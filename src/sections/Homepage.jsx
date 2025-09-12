import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showEntryStar, setShowEntryStar] = useState(true);
  const [titleStarPosition, setTitleStarPosition] = useState({ x: 0, y: 0 });

  const titleStarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Piyush Verma | Designer & Developer';

    // Calculate title star position after render
    const calculateStarPosition = () => {
      if (titleStarRef.current) {
        const rect = titleStarRef.current.getBoundingClientRect();
        setTitleStarPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    // Initial calculation
    calculateStarPosition();

    // Recalculate on window resize
    window.addEventListener('resize', calculateStarPosition);

    // Hide entry star after animation
    const timer = setTimeout(() => {
      setShowEntryStar(false);
    }, 1000);

    return () => {
      window.removeEventListener('resize', calculateStarPosition);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'JavaScript',
    'Node.js',
    'Express.js',
    'NEXT.js',
    'React',
    'Vue.js',
    'TypeScript',
    'CSS',
    'HTML',
    'Tailwind',
    'Bootstrap',
    'UI/UX',
    'Illustrator',
    'Figma',
    'Photoshop',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'SQL',
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub',
    'CI/CD',
    'Deployment',
    'Agile',
    'Scrum',
    'Data Structures and Algorithms',
    'Optimization',
    'Security',
    'Design Patterns',
    'Networking',
    'Operating Systems',
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full min-h-screen relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Tech Corner Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 max-sm:hidden border-green-400/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border max-sm:hidden border-cyan-400/30"></div>

        {/* Entry Star Animation */}
        <AnimatePresence>
          {showEntryStar && (
            <motion.div
              initial={{
                scale: 20,
                rotate: 0,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 0,
              }}
              animate={{
                scale: 1.5,
                rotate: 720,
                x: titleStarPosition.x,
                y: titleStarPosition.y,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              className="fixed text-cyan-400 text-6xl z-50 transform -translate-x-1/2 -translate-y-1/2 hoverflow-hidden"
            >
              ✴
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          id="home"
          className="relative z-10 min-h-screen flex items-center px-4 sm:px-6"
        >
          <div className="container mx-auto md:px-12 max-w-7xl w-full">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 sm:mb-14 items-center min-h-[80vh]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="order-2 lg:order-1"
              >
                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center space-x-2 sm:space-x-3 font-mono text-xs sm:text-sm mb-4 bg-black/50 px-3 py-1 border-l-2 border-green-400 backdrop-blur-sm w-fit"
                >
                  <div className="w-2 h-2  bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 tracking-wider sm:tracking-widest text-xs sm:text-sm">
                    STATUS: AVAILABLE
                  </span>
                </motion.div>

                {/* Main Title */}
                <div className="mb-4 space-y-2 sm:mb-6">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                  >
                    <div className="overflow-hidden text-sm sm:text-xl">
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-cyan-400 font-mono tracking-wider"
                      >
                        HI, I&apos;M
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        style={{
                          clipPath:
                            'polygon(0px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                        }}
                        className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent relative drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                      >
                        PIYUSH
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 flex items-center justify-start space-x-2 sm:space-x-4 font-mono"
                  >
                    <span className="text-green-400">DESIGNER</span>
                    <motion.span
                      ref={titleStarRef}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="text-cyan-400 text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                    >
                      ✴
                    </motion.span>
                    <span className="text-green-400">DEVELOPER</span>
                  </motion.div>
                </div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="max-sm:hidden font-mono text-sm sm:text-lg text-cyan-400 mb-4 tracking-wider text-left bg-black/30 px-3 py-2 border border-cyan-400/30 backdrop-blur-sm w-fit"
                >
                  &gt; LOCATION: BHOPAL, INDIA
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="text-sm sm:text-lg italic text-gray-300 font-semibold max-w-lg leading-relaxed text-left mx-auto lg:mx-0 bg-black/20 px-2 py-1 sm:px-4 sm:py-2 border-l-2 border-green-400/50 backdrop-blur-sm"
                >
                  Blending design, code, and creativity
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="flex flex-col sm:flex-row gap-4 pt-8  items-center lg:items-start"
                >
                  {/* Primary Button - VIEW_PROJECTS */}
                  <motion.button
                    style={{
                      clipPath:
                        'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto overflow-hidden"
                    onClick={() => handleScrollTo('projects')}
                  >
                    {/* Minimal wireframe design */}
                    <div className="relative  py-2 sm:px-10 sm:py-4 border border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-500 bg-cyan-400/5 group-hover:bg-cyan-400/10">
                      {/* Corner brackets - matching your UI style */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Subtle pulse effect */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100"
                        animate={{
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Content */}
                      <motion.span className="relative z-10 text-cyan-400/80 font-mono text-sm tracking-[0.2em] font-medium group-hover:text-cyan-400 transition-colors duration-300">
                        VIEW_PROJECTS
                      </motion.span>
                    </div>
                  </motion.button>

                  {/* Secondary Button - ABOUT_ME */}
                  <Link to={'/about'}>
                    <motion.button
                      style={{
                        clipPath:
                          'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full sm:w-auto overflow-hidden"
                    >
                      {/* Minimal wireframe design */}
                      <div className="relative px-10 py-2 sm:px-10 sm:py-4 border border-green-400/20 group-hover:border-green-400/50 transition-all duration-500 bg-green-400/5 group-hover:bg-green-400/10">
                        {/* Corner brackets - matching your UI style */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Subtle pulse effect */}
                        <motion.div
                          className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100"
                          animate={{
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />

                        {/* Content */}
                        <motion.span className="relative z-10 text-green-400/80 font-mono text-sm tracking-[0.2em] font-medium group-hover:text-green-400 transition-colors duration-300">
                          ABOUT_ME
                        </motion.span>
                      </div>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Profile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center lg:justify-end relative order-1 lg:order-2"
              >
                <div className="relative">
                  {/* Outer rotating ring with glow */}
                  <motion.div
                    className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-green-400/30"
                    animate={{
                      rotate: 360,
                      boxShadow: [
                        '0 0 20px rgba(34,255,0,0.3)',
                        '0 0 40px rgba(34,211,238,0.5)',
                        '0 0 20px rgba(34,255,0,0.3)',
                      ],
                    }}
                    transition={{
                      rotate: {
                        duration: 50,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />

                  {/* Inner rotating ring with glow */}
                  <motion.div
                    className="absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/50"
                    animate={{
                      rotate: -360,
                      boxShadow: [
                        '0 0 15px rgba(34,211,238,0.4)',
                        '0 0 30px rgba(34,255,0,0.6)',
                        '0 0 15px rgba(34,211,238,0.4)',
                      ],
                    }}
                    transition={{
                      rotate: {
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />

                  {/* Profile container */}
                  <motion.div
                    className="relative w-52 h-52 sm:w-80 sm:h-80 md:w-96 md:h-96"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Profile frame */}
                    <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-black to-gray-900 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl backdrop-blur-sm">
                      <motion.img
                        src="avatar.jpg"
                        alt="Piyush - Creative Developer"
                        className="w-full h-full object-cover opacity-80"
                        animate={{
                          filter: [
                            'hue-rotate(0deg) saturate(1)',
                            'hue-rotate(5deg) saturate(1.2)',
                            'hue-rotate(-3deg) saturate(0.8)',
                            'hue-rotate(0deg) saturate(1)',
                          ],
                        }}
                        transition={{
                          y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          x: {
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'easeInOut',
                          },
                          filter: {
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: 'easeInOut',
                          },
                        }}
                      />

                      {/* Cyberpunk overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-green-400/10" />

                      {/* RGB Split Glitch Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 mix-blend-screen"
                        animate={{
                          x: [0, -2, 2, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 0.15,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Digital noise overlay */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          backgroundImage: [
                            'radial-gradient(circle at 20% 30%, rgba(34,255,0,0.1) 1px, transparent 4px)',
                            'radial-gradient(circle at 80% 70%, rgba(34,211,238,0.1) 1px, transparent 4px)',
                            'radial-gradient(circle at 40% 90%, rgba(255,0,100,0.1) 1px, transparent 4px)',
                            'radial-gradient(circle at 60% 10%, rgba(34,255,0,0.1) 1px, transparent 4px)',
                          ],
                        }}
                        transition={{
                          duration: 0.05,
                          repeat: Infinity,
                          repeatDelay: 1.5,
                        }}
                      />

                      {/* Glitch blocks */}
                      {/* {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute  bg-cyan-400/50 mix-blend-screen"
                          style={{
                            width: '100%',
                            height: '2px',
                            top: `${20 + i * 30}%`,
                            left: 0,
                          }}
                          animate={{
                            x: [0, -100, 50, 0],
                            opacity: [0, 1, 0.5, 0],
                            scaleX: [1, 0.3, 0.8, 1],
                          }}
                          transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 2 + i * 0.5,
                            delay: i * 0.1,
                            ease: 'easeInOut',
                          }}
                        />
                      ))} */}

                      {/* Data corruption effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: 'linear',
                        }}
                      />

                      {/* Static interference */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          backgroundColor: [
                            'transparent',
                            'rgba(34,255,0,0.05)',
                            'rgba(255,0,100,0.03)',
                            'transparent',
                          ],
                        }}
                        transition={{
                          duration: 0.05,
                          repeat: Infinity,
                          repeatDelay: 2.5,
                        }}
                      />
                    </div>

                    {/* Tech corner accents */}
                    {[
                      {
                        borders: 'border-l-4 border-t-4 border-green-400',
                        position: { top: '0', left: '0' },
                      },
                      {
                        borders: 'border-r-4 border-t-4 border-cyan-400',
                        position: { top: '0', right: '0' },
                      },
                      {
                        borders: 'border-r-4 border-b-4 border-green-400',
                        position: { bottom: '0', right: '0' },
                      },
                      {
                        borders: 'border-l-4 border-b-4 border-cyan-400',
                        position: { bottom: '0', left: '0' },
                      },
                    ].map((corner, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-6 h-6 sm:w-10 sm:h-10 ${corner.borders}`}
                        style={{
                          ...corner.position,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          boxShadow:
                            i % 2 === 0
                              ? '0 0 10px rgba(34,255,0,0.5)'
                              : '0 0 10px rgba(34,211,238,0.5)',
                          // Glitch the corner accents too
                          x: [0, 1, -1, 0],
                        }}
                        transition={{
                          opacity: { delay: 2.5 + i * 0.1 },
                          scale: { delay: 2.5 + i * 0.1 },
                          x: {
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 3 + i * 0.5,
                          },
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Floating tech data points */}
                  {['UI', 'UX', 'DEV', 'AI'].map((text, i) => {
                    return (
                      <motion.div
                        key={i}
                        className="absolute bg-black/80 text-green-400 px-2 sm:px-3 py-1 text-xs font-mono tracking-wider border border-green-400/50 backdrop-blur-sm"
                        style={{
                          top: `${16 + i * 25}%`,
                          left: i % 2 === 0 ? '-60px' : 'calc(100% + 20px)',
                        }}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          y: [0, -10, 0],
                          boxShadow: [
                            '0 0 5px rgba(34,255,0,0.3)',
                            '0 0 15px rgba(34,211,238,0.5)',
                            '0 0 5px rgba(34,255,0,0.3)',
                          ],
                          // Add glitch to data points
                          filter: ['blur(0px)', 'blur(0.5px)', 'blur(0px)'],
                        }}
                        transition={{
                          opacity: { delay: 3 + i * 0.2 },
                          x: { delay: 3 + i * 0.2 },
                          y: {
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          filter: {
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 2 + i * 0.3,
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: '0 0 20px rgba(34,211,238,0.8)',
                        }}
                      >
                        {text}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
      {/*  Skills Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black -rotate-1 sm:-rotate-3 text-green-400 py-2 sm:py-3 md:py-5 absolute bottom-0 border-t border-green-400/30"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="whitespace-nowrap inline-block"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="inline-block mx-2 sm:mx-3 md:mx-6 text-xs sm:text-sm md:text-lg tracking-wider font-mono"
            >
              {skill}{' '}
              <span className="text-cyan-400 mx-1 sm:mx-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                ✴
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
