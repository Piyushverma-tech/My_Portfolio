import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { title: 'Home', href: '#home', id: 'home' },
    { title: 'Projects', href: '#projects', id: 'projects' },
    { title: 'Contact', href: '#contact', id: 'contact' },
    { title: 'About me', href: '/about', id: 'about', isRoute: true },
  ];

  // Handle smooth scrolling
  const handleNavClick = (e, href, isRoute = false) => {
    e.preventDefault();

    if (isRoute) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    const scrollToSection = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 1500);
    } else {
      scrollToSection();
    }
    if (isOpen) {
      handleClick();
    }
  };

  // Detect active section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleClick = () => {
    if (!isOpen) return;

    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full  bg-transparent backdrop-blur-md top-0  z-50 px-4 sm:px-6 lg:px-12 py-3"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="relative font-bold tracking-tighter z-40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-8 w-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1758477618/a-digital-illustration-of-a-sleek-modern_7Yh7WxrAQ9mJjsOgFlbnmg_z3nHenADTHm3hKOv3tyt1g-removebg-preview_euifkp.png"
                alt="Piyush - Creative Developer"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-auto items-center space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                className={`transition-colors text-sm lg:text-[15px] font-semibold ${
                  location.pathname === '/' &&
                  activeSection === item.id &&
                  !item.isRoute
                    ? 'text-green-500'
                    : location.pathname === item.href && item.isRoute
                      ? 'text-green-500'
                      : 'text-gray-200 hover:text-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex text-green-400 items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 fixed left-0 right-0 top-12 z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
            >
              <div className="flex flex-col items-center py-6 space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    className={`text-gray-100 hover:text-gray-100 transition-colors ${
                      activeSection === item.id
                        ? 'text-green-500 font-medium'
                        : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      handleNavClick(e, item.href, item.isRoute);
                      setIsOpen(false); // Close menu when clicked
                    }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/70 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
