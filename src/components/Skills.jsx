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
        icon: <SiReact />,
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
        icon: '▲',
        color: 'from-gray-800 to-gray-600',
      },
      {
        name: 'Framer Motion',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Created smooth animations, transitions, layout shifts, and micro-interactions to elevate user experience.',
        icon: <PiFramerLogo />,
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
        icon: <CgUiKit />,
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
        icon: <SiCanva />,
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
        icon: <DiNodejsSmall className="text-3xl sm:text-4xl" />,
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
        icon: <BiTargetLock className="text-3xl sm:text-4xl" />,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'AI Integrations',
        level: 'Intermediate',
        proficiency: 75,
        description:
          'Connect AI with CRMs, websites, and workflow automation tools.',
        icon: <GrIntegration />,
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
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Skills & Expertise
          </h3>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto px-2">
            Click on each category to explore my technical proficiencies and
            hover over individual skills to learn more about my experience.
          </p>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative bg-white rounded-lg sm:rounded-2xl  border border-gray-400/50 p-4 sm:p-6 lg:p-8  transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Skill Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">
                    {skill.icon}
                  </div>
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      skill.level === 'Expert'
                        ? 'bg-green-100 text-green-800'
                        : skill.level === 'Advanced'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name & Level */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      Proficiency
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredSkill === skill.name ? 1 : 0.4,
                    height: hoveredSkill === skill.name ? 'auto' : '16px',
                  }}
                  className="text-xs sm:text-sm text-gray-600 leading-relaxed overflow-hidden"
                >
                  {skill.description}
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${skill.color} to-transparent opacity-0 group-hover:opacity-100`}
                  animate={{
                    x: hoveredSkill === skill.name ? ['0%', '100%'] : '0%',
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredSkill === skill.name ? Infinity : 0,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CreativeSkillsSection;
