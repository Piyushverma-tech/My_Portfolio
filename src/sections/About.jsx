import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SkillCategory } from '../components/Skills';

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

  const skillsData = {
    Frontend: [
      {
        name: 'React.js',
        level: 'Advanced',
        description:
          'Built scalable apps using components, custom hooks, state management (Redux/Context), routing, and performance optimization.',
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        description:
          'Proficient in ES6+, async/await, closures, HOFs, DOM manipulation, and dynamic UI logic for interactive experiences.',
      },
      {
        name: 'CSS/SCSS',
        level: 'Expert',
        description:
          'Expertise in responsive layouts, Flexbox, Grid, SCSS, animations, Tailwind CSS, and modern component-level styling.',
      },
      {
        name: 'Next.js',
        level: 'Advanced',
        description:
          'Used for SSR, static generation, API routes, dynamic routing, SEO, and building fast, production-grade apps.',
      },
      {
        name: 'Framer Motion',
        level: 'Advanced',
        description:
          'Created smooth animations, transitions, layout shifts, and micro-interactions to elevate user experience.',
      },
      {
        name: 'GSAP',
        level: 'Intermediate',
        description:
          'Used for advanced timeline-based animations, scroll-triggered effects, and creating dynamic UI animations.',
      },
    ],

    Design: [
      {
        name: 'UI/UX Design',
        level: 'Advanced',
        description:
          'Skilled in wireframing, prototyping, user journeys, usability testing, and solving real problems with functional design.',
      },
      {
        name: 'Figma',
        level: 'Advanced',
        description:
          'Efficient with auto-layouts, components, design systems, interactive prototypes, and collaborative workflows.',
      },
      {
        name: 'Adobe XD',
        level: 'Intermediate',
        description:
          'Designed high-fidelity mockups, interactive flows, and developer-ready assets for web and mobile projects.',
      },
      {
        name: 'Adobe Illustrator',
        level: 'Intermediate',
        description:
          'Created vector graphics, logos, icons, and branding assets for both digital and print design needs.',
      },
      {
        name: 'Adobe Photoshop',
        level: 'Intermediate',
        description:
          'Edited images, designed layouts, UI assets, and creative visuals for marketing and product design.',
      },
      {
        name: 'Canva',
        level: 'Advanced',
        description:
          'Designed branded visuals, social media content, and presentations quickly using templates and custom layouts.',
      },
    ],

    Backend: [
      {
        name: 'Node.js',
        level: 'Intermediate',
        description:
          'Built REST APIs with Express.js, handled JWT auth, middleware, routing, and integrated third-party APIs.',
      },
      {
        name: 'WebSocket',
        level: 'Basic',
        description:
          'Implemented real-time communication using WebSocket for features like live chat and real-time notifications.',
      },
      {
        name: 'File Handling',
        level: 'Intermediate',
        description:
          'Handled file uploads using Multer, integrated AWS S3 for storage, and implemented optimization techniques for performance and security.',
      },
      {
        name: 'MongoDB',
        level: 'Intermediate',
        description:
          'Worked with Mongoose for schema design, CRUD operations, data modeling, and using aggregation pipelines.',
      },
      {
        name: 'PostgreSQL',
        level: 'Basic',
        description:
          'Familiar with writing SQL queries, creating normalized schemas, managing relationships, and indexing.',
      },
      {
        name: 'Prisma',
        level: 'Intermediate',
        description:
          'Used for schema modeling, database migrations, and writing type-safe queries in full-stack apps.',
      },
    ],

    'AI & Automation': [
      {
        name: 'Workflow Automation',
        level: 'Advanced',
        description:
          'Streamline daily operations, reduce manual work and boost business efficiency.',
      },
      {
        name: 'AI Chatbots',
        level: 'Advanced',
        description:
          'Automate customer support, lead generation and real-time communication.',
      },
      {
        name: 'AI Video',
        level: 'Advanced',
        description:
          'Create AI-powered video content for storytelling, marketing and brand identity.',
      },
      {
        name: 'AI Content',
        level: 'Advanced',
        description:
          'Automate copywriting, social media posts, ad creatives and blog content.',
      },
      {
        name: 'AI Strategy',
        level: 'Advanced',
        description:
          'Identify AI opportunities to cut costs, optimize work, and scale faster.',
      },
      {
        name: 'AI Integrations',
        level: 'Intermediate',
        description:
          'Connect AI with CRMs, websites, and workflow automation tools.',
      },
    ],
  };

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
          className="flex flex-col md:flex-row items-center gap-12 md:mb-20 mb-12"
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
              className="text-lg md:text-xl leading-relaxed text-gray-700"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
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
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
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
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
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
          className="mb-20"
        >
          <motion.div variants={fadeUpVariant} className="mb-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on each category to explore my technical proficiencies and
              hover over individual skills to learn more about my experience.
            </p>
          </motion.div>

          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          className="flex justify-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1bQiDX61ELv7SdJuGrYpmxKRKXtlsWrWJ/view?usp=drive_link"
            target="_blank"
            className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-black px-7 py-3 shadow-lg transition-all duration-300"
            whileTap={{ scale: 0.98 }}
          >
            {/* Content container */}
            <div className="relative z-10 flex items-center gap-4">
              <span className="font-medium tracking-wide text-white">
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
