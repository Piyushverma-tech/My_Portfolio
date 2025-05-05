import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showEntryStar, setShowEntryStar] = useState(true);
  const [titleStarPosition, setTitleStarPosition] = useState({ x: 0, y: 0 });
  const titleStarRef = useRef(null);

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
    'NEXT.JS',
    'ILLUSTRATOR',
    'FIGMA',
    'REACT',
    'PHOTOSHOP',
    'WEBFLOW',
    'PostgreSQL',
    'NODE.JS',
    'AI & Automation',
    'UI/UX',
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 w-full min-h-screen relative ">
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
            className="fixed text-red-500 text-6xl z-50 transform -translate-x-1/2 -translate-y-1/2 hoverflow-hidden"
          >
            ✴
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        id="home"
        className="container mx-auto px-4 md:max-w-7xl py-16 md:pt-24 lg:pt-24"
      >
        <div className="flex flex-col md:flex-row justify-between pt-8 max-sm:space-y-6 items-center max-w-[1440px] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full md:w-[1/2] my-auto mb-4 md:mb-0 md:pr-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] md:leading-[1.3] lg:leading-[1.3] tracking-tight">
              HI, I&apos;M Piyush.
              <br />A DESIGNER{' '}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 1.2,
                }}
                className="inline-block relative"
              >
                <motion.span
                  ref={titleStarRef}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="inline-block rounded-full text-red-600"
                >
                  ✴
                </motion.span>
              </motion.span>{' '}
              DEVELOPER
              <br />
              Based in Bhopal
            </h1>
            <div className="md:text-lg font-normal mt-2 mb-6 sm:mt-4 sm:mb-8">
              Blending design, code, and creativity.
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-2 md:px-6 md:py-3 max-sm:text-sm  whitespace-nowrap"
                onClick={() => handleScrollTo('projects')}
              >
                View projects
              </motion.button>

              <Link to={'/about'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black max-sm:text-sm  px-4 py-2  md:px-8 md:py-3 hover:bg-black hover:text-white font-semibold hover:font-normal transition duration-300 whitespace-nowrap"
                >
                  About me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full md:w-1/2 flex my-auto justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 border-8 border-white shadow-xl">
              <img
                src="/profile-pic.png"
                alt="Piyush - Creative Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Scrolling Skills Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full overflow-hidden bg-black -rotate-3 text-white md:py-5 py-3 absolute bottom-0"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="whitespace-nowrap inline-block"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="inline-block md:mx-6 mx-3 md:text-lg text-sm tracking-wider"
            >
              {skill} <span className="text-red-500 mx-2">✴</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
