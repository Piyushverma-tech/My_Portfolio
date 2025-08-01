/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Folder, Leaf, Palette, Server, Zap } from 'lucide-react';
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
import { BsPlayBtn, BsRobot } from 'react-icons/bs';
import { CgUiKit } from 'react-icons/cg';
import { FiFigma } from 'react-icons/fi';
import { BiChat, BiTargetLock } from 'react-icons/bi';
import { TbWriting } from 'react-icons/tb';
import { GrIntegration } from 'react-icons/gr';
import { RiNextjsFill } from 'react-icons/ri';

const CreativeSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationTriggered(true);
    }, 200);
    return () => clearTimeout(timeout);
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
        icon: <SiJavascript />,
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'CSS/SCSS',
        level: 'Expert',
        proficiency: 95,
        description:
          'Expertise in responsive layouts, Flexbox, Grid, SCSS, animations, Tailwind CSS, and modern component-level styling.',
        icon: <SiCss3 />,
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
        icon: <FaSuperpowers />,
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
        icon: <FiFigma />,
        color: 'from-red-500 to-pink-500',
      },
      {
        name: 'Adobe XD',
        level: 'Advanced',
        proficiency: 85,
        description:
          'Designed high-fidelity mockups, interactive flows, and developer-ready assets for web and mobile projects.',
        icon: <SiAdobexd />,
        color: 'from-blue-600 to-purple-600',
      },
      {
        name: 'Adobe Illustrator',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Created vector graphics, logos, icons, and branding assets for both digital and print design needs.',
        icon: <SiAdobeillustrator />,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'Adobe Photoshop',
        level: 'Advanced',
        proficiency: 88,
        description:
          'Edited images, designed layouts, UI assets, and creative visuals for marketing and product design.',
        icon: <SiAdobephotoshop />,
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
        icon: <SiSocketdotio />,
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
        icon: <SiPrisma />,
        color: 'from-indigo-500 to-purple-500',
      },
    ],
    'AI & Automation': [
      {
        name: 'Workflow Automation',
        level: 'Advanced',
        proficiency: 90,
        description:
          'Streamline daily operations, reduce manual work and boost business efficiency.',
        icon: <BsRobot className="text-3xl sm:text-4xl" />,
        color: 'from-purple-600 to-pink-600',
      },
      {
        name: 'AI Chatbots',
        level: 'Advanced',
        proficiency: 88,
        description:
          'Automate customer support, lead generation and real-time communication.',
        icon: <BiChat className="text-3xl sm:text-4xl" />,
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'AI Video',
        level: 'Advanced',
        proficiency: 85,
        description:
          'Create AI-powered video content for storytelling, marketing and brand identity.',
        icon: <BsPlayBtn />,
        color: 'from-red-500 to-pink-500',
      },
      {
        name: 'AI Content',
        level: 'Advanced',
        proficiency: 92,
        description:
          'Automate copywriting, social media posts, ad creatives and blog content.',
        icon: <TbWriting className="text-3xl sm:text-4xl" />,
        color: 'from-green-500 to-blue-500',
      },
      {
        name: 'AI Strategy',
        level: 'Advanced',
        proficiency: 87,
        description:
          'Identify AI opportunities to cut costs, optimize work, and scale faster.',
        icon: <BiTargetLock size={45} />,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'AI Integrations',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Connect AI with CRMs, websites, and workflow automation tools.',
        icon: <GrIntegration size={30} />,
        color: 'from-cyan-500 to-purple-500',
      },
    ],
  };

  const categoryIcons = {
    Frontend: Code,
    Design: Palette,
    Backend: Server,
    'AI & Automation': Zap,
  };

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

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
        <motion.div
          variants={fadeUpVariant}
          className="mb-8 sm:mb-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Skills & Expertise
          </h3>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          variants={containerVariant}
          className="flex flex-wrap justify-center max-sm:gap-y-2 mb-10 sm:mb-12 lg:mb-16 px-2"
        >
          {Object.keys(skillsData).map((category) => {
            const IconComponent = categoryIcons[category];
            return (
              <motion.button
                key={category}
                variants={skillVariant}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-3 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white '
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-black"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="relative flex items-center gap-2 sm:gap-3">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="whitespace-nowrap">{category}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-56 perspective-1000"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Flip Card Container */}
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                  animate={{
                    rotateY: hoveredSkill === skill.name ? 180 : 0,
                  }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border-2 border-gray-200 hover:shadow-red-400/20 hover:shadow-2xl transition-colors duration-300 flex flex-col">
                    {/* Minimal corner accents */}

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full p-6">
                      {/* Header Section */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl text-gray-800">
                          {skill.icon}
                        </div>
                        <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {skill.name}
                        </h3>

                        <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>

                      {/* Proficiency Section */}
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                            Proficiency
                          </span>
                          <span className="text-lg font-bold text-red-500">
                            {skill.proficiency}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-gray-200 relative overflow-hidden">
                          <motion.div
                            className="h-full bg-black"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.3,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-black text-white border border-gray-700 flex flex-col transform rotateY-180">
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full p-6">
                      {/* Header Section */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 border border-gray-700">
                          DETAILS
                        </div>
                        <div className="text-3xl text-white">{skill.icon}</div>
                      </div>

                      {/* Description */}
                      <div className="flex-1">
                        <div className="absolute left-4 top-16 bottom-4 w-px bg-gray-700"></div>
                        <p className="text-sm leading-relaxed text-gray-300 pl-6">
                          {skill.description}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className="flex gap-1 mt-4">
                        <div className="w-2 h-2 bg-white"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default CreativeSkillsSection;
