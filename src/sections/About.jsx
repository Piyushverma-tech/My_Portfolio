import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import CreativeSkillsSection from '../components/Skills';

const About = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Handle initial page scroll and animation trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to ensure page has loaded
    const timeout = setTimeout(() => {
      setAnimationTriggered(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  // Fade up animation variant
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Stagger children animation variant
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 min-h-screen bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header  */}
        <motion.div
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          className="mb-12 md:mb-14 text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <motion.div
            className="h-1 w-20 bg-red-500 mx-auto mt-2"
            initial={{ width: 0 }}
            animate={animationTriggered ? { width: 150 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Profile section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row items-center gap-12 md:mb-20 mb-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-semibold md:mb-4 mb-2 text-gray-800"
            >
              Hello, I&apos;m Piyush Verma
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl leading-tight text-gray-700"
            >
              I combine design and development to craft user-focused experiences
              that solve real problems.
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="md:mt-2 mt-6 text-gray-600 italic max-sm:text-sm"
            >
              <span className="font-medium ">Currently working on:</span>{' '}
              Creating AI-Powered Solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* What I Do & My Approach */}
        <motion.div
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4"
        >
          {/* What I Do Card */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{
              y: -5,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-2xl mb-6 text-gray-900 border-b pb-4">
              What I do
            </h3>
            <ul className="space-y-3 font-medium text-gray-700">
              {[
                'UI/UX Design',
                'Web Development',
                'Graphic Design & Illustration',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    animationTriggered
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: index * 0.3 + 0.6 }}
                  className="flex items-center"
                >
                  <span className="text-red-500 mx-2">✴</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* My Approach Card */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{
              y: -5,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-2xl mb-6 text-gray-900 border-b pb-4">
              My approach
            </h3>
            <ul className="space-y-3 font-medium text-gray-700">
              {[
                'Blend creativity with problem-solving',
                'Focus on simplicity and usability',
                'Make technology feel effortless',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    animationTriggered
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: index * 0.3 + 0.6 }}
                  className="flex items-center"
                >
                  <span className="text-red-500 mx-2">✴</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Skills & Expertise  */}
        <motion.div
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
          className="mb-6"
        >
          <CreativeSkillsSection />
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          className="flex justify-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1bQiDX61ELv7SdJuGrYpmxKRKXtlsWrWJ/view?usp=sharing"
            target="_blank"
            className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-black px-7 py-3 shadow-lg transition-all duration-300"
            whileTap={{ scale: 0.98 }}
          >
            {/* Content container */}
            <div className="relative z-10 flex items-center gap-4">
              <span className="font-medium tracking-wide sm:text-lg text-white">
                Download CV
              </span>

              {/* Icon container */}
              <motion.div
                className="flex items-center"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Download className="text-white" size={20} />
              </motion.div>
            </div>

            {/* Shine effect*/}
            <motion.div
              className="absolute inset-0 w-full h-full skew-x-[20deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            {/* Subtle background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/0 to-purple-500/0 opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 0.15 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
