import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Code,
  Database,
  Download,
  Folder,
  Leaf,
  Target,
  Terminal,
  User,
} from 'lucide-react';
import { DiNodejsSmall } from 'react-icons/di';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
} from 'react-icons/si';
import { PiFramerLogo } from 'react-icons/pi';
import { FaSuperpowers } from 'react-icons/fa';

import { CgUiKit } from 'react-icons/cg';
import { FiFigma } from 'react-icons/fi';

import { RiNextjsFill } from 'react-icons/ri';
import Spline from '@splinetool/react-spline';

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('Frontend');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const skillsData = {
    Frontend: [
      {
        name: 'React.js',
        level: 'Advanced',
        proficiency: 90,
        description:
          'Built scalable apps using components, custom hooks, state management (Redux/Context), routing, and performance optimization.',
        icon: <SiReact size={40} />,
        color: 'from-gray-500 to-cyan-500',
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        proficiency: 88,
        description:
          'Proficient in ES6+, async/await, closures, HOFs, DOM manipulation, and dynamic UI logic for interactive experiences.',
        icon: <SiJavascript size={35} />,
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'CSS/SCSS',
        level: 'Expert',
        proficiency: 95,
        description:
          'Expertise in responsive layouts, Flexbox, Grid, SCSS, animations, Tailwind CSS, and modern component-level styling.',
        icon: <SiCss3 size={35} />,
        color: 'from-pink-500 to-rose-500',
      },
      {
        name: 'Next.js',
        level: 'Advanced',
        proficiency: 85,
        description:
          'Used for SSR, static generation, API routes, dynamic routing, SEO, and building fast, production-grade apps.',
        icon: <RiNextjsFill size={50} />,
        color: 'from-gray-800 to-gray-600',
      },
      {
        name: 'Framer Motion',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Created smooth animations, transitions, layout shifts, and micro-interactions to elevate user experience.',
        icon: <PiFramerLogo size={40} />,
        color: 'from-purple-500 to-indigo-500',
      },
      {
        name: 'GSAP',
        level: 'Intermediate',
        proficiency: 70,
        description:
          'Used for advanced timeline-based animations, scroll-triggered effects, and creating dynamic UI animations.',
        icon: <FaSuperpowers size={35} />,
        color: 'from-green-500 to-emerald-500',
      },
    ],
    Design: [
      {
        name: 'UI/UX Design',
        level: 'Advanced',
        proficiency: 90,
        description:
          'Skilled in wireframing, prototyping, user journeys, usability testing, and solving real problems with functional design.',
        icon: <CgUiKit size={40} />,
        color: 'from-violet-500 to-purple-500',
      },
      {
        name: 'Figma',
        level: 'Advanced',
        proficiency: 92,
        description:
          'Efficient with auto-layouts, components, design systems, interactive prototypes, and collaborative workflows.',
        icon: <FiFigma size={35} />,
        color: 'from-red-500 to-pink-500',
      },
      {
        name: 'Adobe XD',
        level: 'Advanced',
        proficiency: 85,
        description:
          'Designed high-fidelity mockups, interactive flows, and developer-ready assets for web and mobile projects.',
        icon: <SiAdobexd size={35} />,
        color: 'from-blue-600 to-purple-600',
      },
      {
        name: 'Adobe Illustrator',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Created vector graphics, logos, icons, and branding assets for both digital and print design needs.',
        icon: <SiAdobeillustrator size={35} />,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'Adobe Photoshop',
        level: 'Advanced',
        proficiency: 88,
        description:
          'Edited images, designed layouts, UI assets, and creative visuals for marketing and product design.',
        icon: <SiAdobephotoshop size={35} />,
        color: 'from-blue-500 to-indigo-500',
      },
      {
        name: 'Canva',
        level: 'Advanced',
        proficiency: 80,
        description:
          'Designed branded visuals, social media content, and presentations quickly using templates and custom layouts.',
        icon: <SiCanva size={40} />,
        color: 'from-cyan-500 to-blue-500',
      },
    ],
    Backend: [
      {
        name: 'Node.js',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Built REST APIs with Express.js, handled JWT auth, middleware, routing, and integrated third-party APIs.',
        icon: <DiNodejsSmall className="text-3xl sm:text-5xl" />,
        color: 'from-green-600 to-green-500',
      },
      {
        name: 'WebSocket',
        level: 'Intermediate',
        proficiency: 70,
        description:
          'Implemented real-time communication using WebSocket for features like live chat and real-time notifications.',
        icon: <SiSocketdotio size={35} />,
        color: 'from-yellow-600 to-orange-500',
      },
      {
        name: 'File Handling',
        level: 'Intermediate',
        proficiency: 72,
        description:
          'Handled file uploads using Multer, integrated AWS S3 for storage, and implemented optimization techniques.',
        icon: <Folder className="w-7 h-7 sm:w-8 sm:h-8" />,
        color: 'from-gray-600 to-gray-500',
      },
      {
        name: 'MongoDB',
        level: 'Intermediate',
        proficiency: 78,
        description:
          'Worked with Mongoose for schema design, CRUD operations, data modeling, and using aggregation pipelines.',
        icon: <Leaf className="w-8 h-8 sm:w-9 sm:h-9" />,
        color: 'from-green-500 to-teal-500',
      },
      {
        name: 'PostgreSQL',
        level: 'Basic',
        proficiency: 60,
        description:
          'Familiar with writing SQL queries, creating normalized schemas, managing relationships, and indexing.',
        icon: <SiPostgresql className="text-3xl sm:text-4xl" />,
        color: 'from-blue-600 to-indigo-600',
      },
      {
        name: 'Prisma',
        level: 'Intermediate',
        proficiency: 73,
        description:
          'Used for schema modeling, database migrations, and writing type-safe queries in full-stack apps.',
        icon: <SiPrisma size={35} />,
        color: 'from-indigo-500 to-purple-500',
      },
    ],
  };

  const skillCategories = [
    { id: 'Frontend', label: 'FRONTEND', icon: Code },
    { id: 'Design', label: 'DESIGN', icon: Terminal },
    { id: 'Backend', label: 'BACKEND', icon: Database },
  ];

  const myApproach = [
    'Blend creativity with problem-solving',
    'Focus on simplicity and usability',
    'Design interfaces that speak for themselves',
  ];

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.2,
      },
    },
  };

  const accentVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?export=download&id=19IrEky5Ugj4jZkNGN7ZaM9spWdQkrNNG';

    link.download = 'Piyush_Verma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24 relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center relative"
        >
          {/* Cyberpunk-styled header container */}
          <motion.div
            className="relative inline-block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main heading with cyberpunk styling */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold px-8 py-4 tracking-widest uppercase text-green-400 font-mono"
              variants={textVariants}
            >
              &gt; ABOUT_ME_
              <motion.span
                className="text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h2>

            {/* Cyberpunk corner accents */}
            <motion.div
              className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green-400"
              variants={accentVariants}
            />
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400"
              variants={accentVariants}
            />
            <motion.div
              className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400"
              variants={accentVariants}
            />
            <motion.div
              className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-400"
              variants={accentVariants}
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid*/}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
        >
          {/* Left Column - Robot Avatar  */}
          <motion.div variants={itemVariants}>
            {/* Robot Avatar Section  */}
            <motion.div className="flex justify-center perspective-1000">
              <div className="relative w-full max-w-sm transform-gpu">
                {/* 3D Container with depth */}
                <motion.div className="relative w-full aspect-square overflow-hidden border border-green-400/30 bg-black/30 h-[400px] lg:h-[445px] shadow-2xl">
                  {/* Depth layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/10"></div>

                  {/* Inner glow effect */}
                  <div className="absolute inset-2 bg-gradient-to-br from-green-400/5 to-cyan-400/10 backdrop-blur-sm"></div>

                  {/* Holographic scan lines */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent opacity-50"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <Spline
                    className="scale-[1.4] mt-4 w-full h-full relative z-10"
                    scene="https://prod.spline.design/CQiUWRLV77SGOXG6/scene.splinecode"
                  />

                  {/* Enhanced corner accents with glow */}
                  <motion.div
                    className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400"
                    style={{ filter: 'drop-shadow(0 0 4px #22ff00)' }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"
                    style={{ filter: 'drop-shadow(0 0 4px #00ffff)' }}
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"
                    style={{ filter: 'drop-shadow(0 0 4px #00ffff)' }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400"
                    style={{ filter: 'drop-shadow(0 0 4px #22ff00)' }}
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Personal Info and Approach */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* Introduction Card */}
            <motion.div
              variants={itemVariants}
              className="bg-black/50 border border-green-400/30 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <User className="text-green-400" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-green-400 font-mono">
                  INIT_PERSONAL
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-cyan-400 font-mono">
                  Hello World, I&apos;m{' '}
                  <span className="text-green-400 font-bold">Piyush Verma</span>
                  ,
                </p>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  I&apos;ve been working on web apps for about a year now—doing
                  the whole front-end, back-end, and even some design stuff.
                  I&apos;m hooked on making things dope and actually work for
                  people.
                </p>
              </div>
            </motion.div>

            {/* Bottom Row - Approach and Resume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* My Approach Card */}
              <motion.div
                variants={itemVariants}
                className="bg-black/50 border border-green-400/30 backdrop-blur-sm p-6 relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Target className="text-cyan-400" size={24} />
                  <h3 className="text-lg font-bold text-cyan-400 font-mono">
                    LOAD_APPROACH
                  </h3>
                </div>

                <div className="space-y-3">
                  {myApproach.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight
                        className="text-cyan-400 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Download Resume Card */}
              <motion.div
                variants={itemVariants}
                className="bg-black/50 border border-cyan-400/30 backdrop-blur-sm p-6 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-400 font-mono mb-6">
                    ACCESS_RESUME
                  </h3>
                  <motion.button
                    onClick={handleDownloadResume}
                    className="group relative px-6 py-3 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400 text-green-400 font-mono font-bold tracking-wider hover:bg-gradient-to-r hover:from-green-400/30 hover:to-cyan-400/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden w-full"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      clipPath:
                        'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <Download size={18} />
                      <span className="text-sm md:text-base">
                        DOWNLOAD.RESUME
                      </span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          {/* Skills Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-cyan-400 font-mono tracking-wider mb-4"
              animate={{
                textShadow: [
                  '0 0 10px #00ffff',
                  '0 0 20px #00ffff',
                  '0 0 10px #00ffff',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &gt; SKILLS_MATRIX
              <motion.span
                className="text-green-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h2>
          </div>

          {/* Skills Categories */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-black/50 border border-green-400/30 backdrop-blur-sm overflow-hidden">
              {skillCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className="relative flex-1 flex justify-center overflow-hidden"
                  >
                    {activeSkillCategory === category.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50"
                        layoutId="activeSkillBackground"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <motion.button
                      onClick={() => setActiveSkillCategory(category.id)}
                      className={`relative z-10 px-4 md:px-8 py-4 text-sm font-mono font-medium tracking-wider transition-colors duration-300 flex items-center gap-2 ${
                        activeSkillCategory === category.id
                          ? 'text-green-400'
                          : 'text-gray-400 hover:text-cyan-400'
                      }`}
                      whileHover={
                        activeSkillCategory !== category.id ? { y: -2 } : {}
                      }
                      whileTap={{ scale: 0.97 }}
                    >
                      <IconComponent className="max-sm:hidden" size={16} />
                      {category.label}
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillCategory}
              initial={{ opacity: 0, y: 40, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeSkillCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="group bg-black/50 border border-green-400/30 backdrop-blur-sm p-6 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px rgba(34, 255, 0, 0.1)',
                  }}
                >
                  {/* Scanning effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-green-400 group-hover:text-cyan-400 transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 font-mono group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-400 font-mono">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400 font-mono">
                        PROFICIENCY
                      </span>
                      <span className="text-xs text-green-400 font-mono">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 relative overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                      {/* Animated glow effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', `${skill.proficiency + 10}%`] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
