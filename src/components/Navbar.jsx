import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const LOGO_SRC =
  'https://res.cloudinary.com/dsrmecb5y/image/upload/v1758477618/a-digital-illustration-of-a-sleek-modern_7Yh7WxrAQ9mJjsOgFlbnmg_z3nHenADTHm3hKOv3tyt1g-removebg-preview_euifkp.png';

const MENU_ITEMS = [
  { title: 'Home', href: '#home', id: 'home' },
  { title: 'Projects', href: '#projects', id: 'projects' },
  { title: 'Contact', href: '#contact', id: 'contact' },
  { title: 'About me', href: '/about', id: 'about', isRoute: true },
  { title: 'Blog', href: '/blog', id: 'blog', isRoute: true },
];
const SECTION_ITEMS = MENU_ITEMS.filter((i) => !i.isRoute);

/* ================================================================== */
/* Tunables                                                            */
/* ================================================================== */

// Speed of the current along the outline, in px per second
const CURRENT_SPEED = 140;

// Glass. Lower the tint alpha for clearer glass, raise it for more contrast.
const GLASS_TINT = 'rgba(6, 12, 18, 0.38)';
const GLASS_BLUR = 'blur(16px) saturate(160%)';

// The outline: a dim "wire" with bright packets of current running through it
const WIRE =
  'linear-gradient(90deg, rgba(34,197,94,0.45), rgba(34,211,238,0.45))';
const PACKET =
  'linear-gradient(90deg, rgba(74,222,128,0) 0%, rgba(74,222,128,0) 56%, rgba(74,222,128,0.6) 78%, #22d3ee 93%, #ffffff 98%, rgba(255,255,255,0) 100%)';

/* ================================================================== */
/* Shape geometry                                                      */
/*                                                                     */
/* --h : plate height (set on <nav>, responsive)                       */
/* --b : outline thickness                                             */
/*                                                                     */
/* The slant is 45deg (horizontal run == --h). The "outer" polygons    */
/* are the glass shapes. The "strip" polygons are just the outline,    */
/* i.e. the bottom edge + slanted edge, with a perpendicular thickness */
/* of --b (hence the 1.4142 = sqrt(2) factors on the slant).           */
/* ================================================================== */

// Left plate (logo)
const LEFT_OUTER = 'polygon(0 0, 100% 0, calc(100% - var(--h)) 100%, 0 100%)';
const LEFT_STRIP = `polygon(
  0 calc(100% - var(--b)),
  calc(100% - var(--h) - var(--b) * 0.4142) calc(100% - var(--b)),
  calc(100% - var(--b) * 1.4142) 0,
  100% 0,
  calc(100% - var(--h)) 100%,
  0 100%
)`;

// Right plate (links)
const RIGHT_OUTER = 'polygon(0 0, 100% 0, 100% 100%, var(--h) 100%)';
const RIGHT_STRIP = `polygon(
  0 0,
  calc(var(--b) * 1.4142) 0,
  calc(var(--h) + var(--b) * 0.4142) calc(100% - var(--b)),
  100% calc(100% - var(--b)),
  100% 100%,
  var(--h) 100%
)`;

// Mobile dropdown
const PANEL_OUTER = 'polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)';
const PANEL_STRIP = `polygon(evenodd,
  24px 0, 100% 0, 100% 100%, 0 100%, 0 24px, 24px 0,
  25px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px),
  2px calc(100% - 2px), 2px 25px, 25px 2px
)`;

/* ================================================================== */
/* Building blocks                                                     */
/* ================================================================== */

/*
 * One layer of outline. It is the dim wire plus a wide strip of repeating
 * "packets" that slides sideways by exactly one tile, so the loop is seamless.
 * Rendered twice: once blurred (the bloom) and once sharp (the line itself).
 */
const CurrentLine = ({ strip, period, bloom = false }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={bloom ? { filter: 'blur(5px)', opacity: 0.9 } : undefined}
  >
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ clipPath: strip }}
    >
      <div className="absolute inset-0" style={{ background: WIRE }} />
      <div
        className="nav-current absolute inset-y-0 left-0"
        style={{
          width: `calc(100% + ${period}px)`,
          '--period': `${period}px`,
          backgroundImage: PACKET,
          backgroundSize: `${period}px 100%`,
          animationDuration: `${period / CURRENT_SPEED}s`,
        }}
      />
    </div>
  </div>
);

/*
 * Glass + outline + content.
 *
 * IMPORTANT: the glass layer must NOT sit inside an element that has a
 * filter, opacity < 1, mask or clip-path, or the browser stops blurring the
 * page behind it. That's why glass, bloom and line are siblings here instead
 * of nested wrappers.
 */
const NeonPlate = ({
  outer,
  strip,
  period = 300,
  className = '',
  children,
}) => (
  <div className={`relative ${className}`}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        clipPath: outer,
        background: `linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 70%), ${GLASS_TINT}`,
        backdropFilter: GLASS_BLUR,
        WebkitBackdropFilter: GLASS_BLUR,
      }}
    />
    <CurrentLine strip={strip} period={period} bloom />
    <CurrentLine strip={strip} period={period} />
    <div className="relative">{children}</div>
  </div>
);

/* Wait for a section to exist (e.g. right after a route change), then scroll to it */
const scrollToSelector = (selector, tries = 40) => {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (tries > 0) setTimeout(() => scrollToSelector(selector, tries - 1), 50);
};

/* ================================================================== */
/* Navbar                                                              */
/* ================================================================== */

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isActive = (item) =>
    item.isRoute
      ? location.pathname === item.href
      : location.pathname === '/' && activeSection === item.id;

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.isRoute) {
      navigate(item.href);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.href } });
      return;
    }
    scrollToSelector(item.href);
  };

  // Finish a cross-page "go to section" request once we land on "/"
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (location.pathname === '/' && target) {
      scrollToSelector(target);
      navigate('/', { replace: true, state: null });
    }
  }, [location, navigate]);

  // Active section tracking
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { root: null, rootMargin: '-50% 0px', threshold: 0 }
    );
    SECTION_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  // Close the mobile menu on route change / Escape
  useEffect(() => setIsOpen(false), [location.pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes nav-current {
          from { transform: translate3d(calc(var(--period) * -1), 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .nav-current {
          animation: nav-current linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-current { display: none; }
        }
      `}</style>

      {/* Scroll progress */}
      {/* <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-green-400 via-cyan-400 to-green-400"
      /> */}

      {/* No opacity animation here on purpose: opacity < 1 on an ancestor kills backdrop blur */}
      <motion.nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between [--b:2px] [--h:48px] md:[--h:62px]"
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* ---------- Left plate: logo ---------- */}
        <NeonPlate
          outer={LEFT_OUTER}
          strip={LEFT_STRIP}
          period={420}
          className="pointer-events-auto"
        >
          <motion.a
            href="/"
            onClick={(e) => handleNavClick(e, MENU_ITEMS[0])}
            className="flex items-center"
            style={{
              height: 'var(--h)',
              paddingLeft: 20,
              paddingRight: 'calc(var(--h) * 0.5 + 24px)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <img
              src={LOGO_SRC}
              alt="Piyush - Creative Developer"
              className="h-8 w-auto object-contain md:h-9"
            />
          </motion.a>
        </NeonPlate>

        {/* ---------- Right plate: desktop links ---------- */}
        <NeonPlate
          outer={RIGHT_OUTER}
          strip={RIGHT_STRIP}
          period={520}
          className="pointer-events-auto hidden md:block"
        >
          <ul
            className="flex items-center gap-6 lg:gap-8"
            style={{
              height: 'var(--h)',
              paddingLeft: 'calc(var(--h) * 0.5 + 32px)',
              paddingRight: 'clamp(24px, 4vw, 56px)',
            }}
          >
            {MENU_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.title}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block text-sm font-semibold transition-colors lg:text-[15px] ${
                      active
                        ? 'text-green-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#4ade80]"
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </NeonPlate>

        {/* ---------- Right plate: mobile button + dropdown ---------- */}
        <div className="relative md:hidden">
          <NeonPlate
            outer={RIGHT_OUTER}
            strip={RIGHT_STRIP}
            period={400}
            className="pointer-events-auto"
          >
            <div
              className="flex items-center"
              style={{
                height: 'var(--h)',
                paddingLeft: 'calc(var(--h) * 0.5 + 32px)',
                paddingRight: 20,
              }}
            >
              <motion.button
                type="button"
                onClick={() => setIsOpen((o) => !o)}
                whileTap={{ scale: 0.92 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </NeonPlate>

          <AnimatePresence>
            {isOpen && (
              // Slide only (no opacity) so the glass keeps blurring while it moves
              <motion.div
                id="mobile-menu"
                className="pointer-events-auto absolute right-0 top-full mt-4 w-64"
                initial={{ x: 20 }}
                animate={{
                  x: 0,
                  transition: { type: 'spring', stiffness: 300, damping: 24 },
                }}
                exit={{ x: 20, transition: { duration: 0.12 } }}
              >
                <NeonPlate outer={PANEL_OUTER} strip={PANEL_STRIP} period={400}>
                  <motion.ul
                    className="flex flex-col gap-1 py-5 pl-9 pr-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    {MENU_ITEMS.map((item) => {
                      const active = isActive(item);
                      return (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item)}
                            aria-current={active ? 'page' : undefined}
                            className={`block py-2 text-sm font-semibold transition-colors ${
                              active
                                ? 'text-green-400'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </motion.ul>
                </NeonPlate>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
