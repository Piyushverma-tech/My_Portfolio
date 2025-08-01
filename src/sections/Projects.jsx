import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Camera,
  Youtube,
  Terminal,
  Database,
  Code,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MatrixRain } from '../components/Martrix';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('development');

  const categories = [
    { id: 'development', label: 'DEVELOPMENT', icon: Code },
    { id: 'design', label: 'DESIGN', icon: Database },
    { id: 'hobby', label: 'HOBBY', icon: Terminal },
  ];

  //Projects data
  const projectsData = {
    development: [
      {
        id: 1,
        title: 'Codebin - AI-Powered Code Management App',
        description:
          'A personal code library to save, generate, and manage code snippets efficiently.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746034309/Portfolio/jppxrchyxo3p8zgxmb4v.png',
        tags: ['Next.js', ' Zustand', 'MongoDB', ' Tailwind CSS'],
        videoUrl:
          'https://res.cloudinary.com/dsrmecb5y/video/upload/v1749838244/Codebin_tngddk.mp4',
        links: {
          live: 'https://codebin-alpha.vercel.app/',
          github: 'https://github.com/Piyushverma-tech/codebin',
        },
      },
      {
        id: 2,
        title: 'iWitness - AI-Powered Crime Reporting App',
        description:
          'A platform for users to anonymously report incidents or crimes with evidence.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1747671768/Mockup_Ribbon_2_1_cbbako.png',
        tags: ['Next.js', 'Prisma', 'Tailwind CSS', 'BCrypt'],
        videoUrl:
          'https://res.cloudinary.com/dsrmecb5y/video/upload/v1747663953/nipfgf39zfrs2vez3uy5.mp4',
        links: {
          live: 'https://iwitness-report.vercel.app/',
          github: 'https://github.com/Piyushverma-tech/iwitness',
        },
      },
      {
        id: 3,
        title: 'Salex - Sales Management App',
        description:
          'A SaaS web app to manage sales data, sales insights, team and customer tracking.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1747671757/Mockup_Ribbon_10_1_wfbbzy.png',
        tags: ['Next.js', 'ShadCN UI', 'MongoDB', 'Razorpay'],
        videoUrl:
          'https://res.cloudinary.com/dsrmecb5y/video/upload/v1747581601/0518_1_jncepy.mp4',
        links: {
          live: 'https://salex-deals.vercel.app/',
          github: 'https://github.com/Piyushverma-tech/sales-management-app',
        },
      },
      {
        id: 4,
        title: 'Taggle - Social Media App',
        description:
          'A social platform to share posts, connect, and engage in real-time.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746034253/Portfolio/pewq5cmcud6isui9gfr2.png',
        tags: ['React', 'Node.js', 'MongoDB', 'Context API'],
        videoUrl:
          'https://res.cloudinary.com/dsrmecb5y/video/upload/v1747730306/0518_xsussh.mp4',
        links: {
          live: 'https://taggle-social-media.onrender.com/',
          github: 'https://github.com/Piyushverma-tech/Taggle---social-media',
        },
      },
    ],
    design: [
      {
        id: 1,
        title: 'Recipick - Personalized Recipe App',
        description:
          'A UI/UX case study for a smart app that curates personalized recipes.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746034358/Portfolio/ha0vcakprxxlw08x5c8o.png',
        tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
        slug: '/recipick',
      },
      {
        id: 2,
        title: 'ServEase - hyperlocal service finder App',
        description:
          'A design solution to connect users with reliable local service providers.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746034277/Portfolio/mwso8jbwpsnbhvdqvnyb.png',
        tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
        slug: '/Servease',
      },
    ],

    hobby: [
      {
        id: 1,
        title: 'Art & Sketches',
        description:
          'Traditional pencil and ink sketches capturing emotions and everyday life.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746127250/Portfolio/zh8csmsueampxxkmoquc.jpg',
        tags: ['Traditional Art', 'Sketching'],
        links: {
          instagram: 'https://www.instagram.com/piyushverma.art/',
        },
      },
      {
        id: 2,
        title: 'Animated Film for Startup',
        description:
          'Created an AI-driven short film for a startup internship project.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746127261/Portfolio/gvtymjgj5zxqihcmlqqg.png',
        tags: ['AI Animation', 'Storytelling'],
        links: {
          youtube: 'https://youtu.be/ue92My3ozrU?si=71JHX-YmleFD8huE',
        },
      },
      {
        id: 3,
        title: 'Client Work: Trophy House',
        description:
          'Designed 20+ creatives for marketing, products, and brand promotions.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746127247/Portfolio/bc2xnfgpua6maeol9vrz.png',
        tags: ['Graphic Design', 'Marketing'],
        links: {
          instagram:
            'https://www.instagram.com/p/Cx2Vwt1MLwa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
      },
      {
        id: 4,
        title: 'Client Work: Kanco Raymond',
        description:
          'Delivered 15+ social media designs and brand-focused promotional visuals.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746127270/Portfolio/sci35ocf9hknmz8cdzgv.jpg',
        tags: ['Creative Design', 'Brand Identity'],
        links: {
          instagram: 'https://www.instagram.com/kanco_raymond_authdlr/',
        },
      },
    ],
  };

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
        ease: [0.4, 0, 0.2, 1],
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.92,
      rotateX: 5,
      filter: 'blur(4px)',
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
        mass: 0.4,
        duration: 0.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const pageTransition = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -25,
      scale: 0.96,
      filter: 'blur(5px)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const tabSwitchAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
      filter: 'saturate(0.8) brightness(0.8)',
    },
    show: {
      opacity: 1,
      clipPath: 'inset(0% 0 0 0)',
      filter: 'saturate(1) brightness(1)',
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Custom renders for each category
  const renderDevelopmentProjects = () => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative"
      layout
    >
      <AnimatePresence>
        <motion.div
          variants={tabSwitchAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          key="development-section"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-8 mt-8"
        >
          {projectsData.development.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:mb-12' : 'md:mt-12'
              }`}
              whileHover={{
                y: -3,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                },
              }}
            >
              {/* Project Image/Video with Cyberpunk Hover Effect */}
              <div className="mb-6 relative transform perspective-1000 group">
                <motion.div
                  whileHover={{
                    y: -5,
                    rotateY: 2,
                    boxShadow:
                      '0 0 30px rgba(34,211,238,0.5), 0 0 60px rgba(34,255,0,0.2)',
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="relative overflow-hidden border border-green-400/30 bg-black/50 backdrop-blur-sm"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.style.opacity = '1';
                      video.play();
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.opacity = '0';
                      }
                      const overlay = e.currentTarget.querySelector(
                        '.absolute.inset-0.bg-gradient-to-t'
                      );
                      if (overlay) {
                        overlay.style.opacity = '1';
                        overlay.style.pointerEvents = 'auto';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.style.opacity = '0';
                      video.pause();
                      video.currentTime = 0;
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.opacity = '1';
                      }
                      const overlay = e.currentTarget.querySelector(
                        '.absolute.inset-0.bg-gradient-to-t'
                      );
                      if (overlay) {
                        overlay.style.opacity = '0';
                        overlay.style.pointerEvents = 'none';
                      }
                    }
                  }}
                >
                  <motion.div
                    variants={imageReveal}
                    className="w-full h-72 overflow-hidden relative"
                  >
                    {/* Thumbnail Image */}
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover object-center transition-all duration-500"
                      style={{
                        position: 'relative',
                        opacity: '1',
                      }}
                    /> */}

                    <MatrixRain opacity={0.3} />

                    {/* Cyberpunk Scanning Effect */}
                    {/* <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-8"
                      animate={{ y: ['0%', '1000%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    /> */}

                    {/* Video overlay */}
                    {project.videoUrl && (
                      <video
                        src={project.videoUrl}
                        className="w-full h-72 object-cover object-center transition-opacity duration-300"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 5,
                          opacity: 0,
                        }}
                        muted
                        playsInline
                        loop
                        preload="auto"
                      />
                    )}
                  </motion.div>

                  {/* Cyberpunk Action Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-all duration-500 flex items-end justify-end gap-4 p-4 z-10"
                    style={{
                      pointerEvents: 'none',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black bg-green-400 p-2 border border-green-400/50   transition-colors backdrop-blur-sm"
                        whileHover={{
                          scale: 1.15,

                          boxShadow: '0 0 20px rgba(34,211,238,0.8)',
                          transition: { type: 'spring', stiffness: 400 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 bg-black/80 border border-green-400/50 p-2 hover:bg-gray-900 hover:border-cyan-400 transition-colors backdrop-blur-sm"
                        whileHover={{
                          scale: 1.15,

                          boxShadow: '0 0 20px rgba(34,255,0,0.8)',
                          transition: { type: 'spring', stiffness: 400 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>

                {/* Cyberpunk decorative elements */}
                <motion.div
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-green-400/30 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: -5,
                    x: -2,
                    borderColor: '#22d3ee',
                    boxShadow: '0 0 15px rgba(34,211,238,0.5)',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 border-2 border-cyan-400/30 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: 5,
                    x: 2,
                    borderColor: '#22ff00',
                    boxShadow: '0 0 15px rgba(34,255,0,0.5)',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
              </div>

              {/* Project Details with cyberpunk styling */}
              <motion.h3
                className="sm:text-xl text-lg font-bold text-green-400 mb-2 font-mono tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-gray-300 max-sm:text-sm mb-4 bg-black/20 p-3 border-l-2 border-cyan-400/50 backdrop-blur-sm"
              >
                {project.description}
              </motion.p>

              {/* Cyberpunk tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="text-xs font-medium px-2.5 py-0.5 bg-black/50 text-green-400 border border-green-400/30 font-mono backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                      duration: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      backgroundColor: 'rgba(34,211,238,0.1)',
                      borderColor: '#22d3ee',
                      boxShadow: '0 0 10px rgba(34,211,238,0.3)',
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );

  const renderDesignProjects = () => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative"
      layout
    >
      <AnimatePresence>
        <motion.div
          variants={tabSwitchAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          key="design-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8"
        >
          {projectsData.design.map((project, index) => (
            <Link to={project.slug} key={index}>
              <motion.div
                key={project.id}
                variants={item}
                className="group relative aspect-w-16 aspect-h-12"
              >
                {/* Main Image Container with cyberpunk styling */}
                <div className="relative w-full h-full border border-green-400/30 bg-black/20 backdrop-blur-sm overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Cyberpunk Scanning Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent w-8"
                    animate={{ x: ['0%', '1000%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Cyberpunk Hover Content Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {/* Top Content Container */}
                    <div className="absolute inset-x-0 top-0 p-6 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-green-400 font-mono tracking-wider">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed bg-black/30 p-2 border-l-2 border-cyan-400/50 backdrop-blur-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Content Container */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-wrap justify-end gap-2">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs bg-black/50 text-green-400 border border-green-400/30 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300 font-mono backdrop-blur-sm"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Cyberpunk decorative elements */}
                <motion.div
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-green-400/30 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.2 + index * 0.1, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: -5,
                    x: -2,
                    borderColor: '#22d3ee',
                    boxShadow: '0 0 15px rgba(34,211,238,0.5)',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 border-2 border-cyan-400/30 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: 5,
                    x: 2,
                    borderColor: '#22ff00',
                    boxShadow: '0 0 15px rgba(34,255,0,0.5)',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );

  const renderHobbyProjects = () => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="mt-8"
      layout
    >
      <AnimatePresence>
        <div className="grid grid-cols md:grid-cols-4 gap-3 md:gap-4">
          {projectsData.hobby.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              custom={index}
              className="group relative aspect-square overflow-hidden border border-green-400/30 bg-black/20 backdrop-blur-sm"
            >
              {/* Background Image */}
              <motion.div variants={imageReveal} className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ willChange: 'transform' }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Cyberpunk Scanning Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent h-8"
                  animate={{ y: ['0%', '1000%'] }}
                  transition={{
                    duration: 2.5 + index * 0.3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              {/* Cyberpunk Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 -translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500">
                {/* Link Icons */}
                {project.links.instagram && (
                  <a
                    href={project.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 bg-black/50 border border-green-400/50 hover:border-cyan-400 backdrop-blur-sm transition-colors"
                  >
                    <Camera
                      size={20}
                      className="text-green-400 hover:text-cyan-400 transition-colors"
                    />
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 bg-black/50 border border-green-400/50 hover:border-cyan-400 backdrop-blur-sm transition-colors"
                  >
                    <Youtube
                      size={20}
                      className="text-green-400 hover:text-cyan-400 transition-colors"
                    />
                  </a>
                )}

                <h3 className="text-green-400 text-lg font-bold mb-1 font-mono tracking-wider">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2 bg-black/30 p-2 border-l-2 border-cyan-400/50 backdrop-blur-sm">
                  {project.description}
                </p>

                {/* Cyberpunk Tags */}
                <div className="hidden md:flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-1.5 py-0.5 bg-black/50 text-green-400 border border-green-400/30 font-mono backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );

  // Cyberpunk Animation variants for the heading
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9, // Less dramatic scale change
      rotateX: -10, // Reduced rotation
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8s
        ease: 'easeOut',
        staggerChildren: 0.05, // Reduced from 0.1s
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
        duration: 0.6, // Reduced from 1s
        ease: 'easeInOut',
        delay: 0.2, // Reduced from 0.6s
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
        duration: 0.2, // Reduced from 0.3s
        ease: 'easeOut',
        delay: 0.4, // Reduced from 1s
      },
    },
  };

  return (
    <section
      id="projects"
      className="md:py-28 py-16  min-h-screen overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }} // Reduced y offset from 20
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }} // Reduced from 0.6s
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
              className="text-3xl md:text-4xl font-bold px-8 py-4 tracking-widest uppercase text-green-400 font-mono"
              variants={textVariants}
            >
              &gt; Projects_
              <motion.span
                className="text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }} // Slightly faster blinking
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

        {/* Cyberpunk Tab Navigation */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="inline-flex bg-black/50 border border-green-400/30 backdrop-blur-sm w-full max-w-md overflow-hidden">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="relative flex-1 flex justify-center overflow-hidden"
                >
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50 backdrop-blur-sm z-0"
                      layoutId="activeBackground"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <motion.button
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative z-10 px-2 md:px-8 py-3 w-full text-center text-sm md:text-base font-medium font-mono tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 ${
                      activeCategory === category.id
                        ? 'text-green-400'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                    whileHover={activeCategory !== category.id ? { y: -2 } : {}}
                    whileTap={{ scale: 0.97 }}
                  >
                    <IconComponent size={16} />
                    {category.label}
                  </motion.button>
                  {/* Cyberpunk shine effect */}
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 w-full h-full skew-x-[20deg] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {activeCategory === 'development' && renderDevelopmentProjects()}
            {activeCategory === 'design' && renderDesignProjects()}
            {activeCategory === 'hobby' && renderHobbyProjects()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
