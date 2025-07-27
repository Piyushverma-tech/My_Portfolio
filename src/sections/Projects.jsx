import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Camera, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingShapes from '../components/FloatingShapes';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('development');

  const categories = [
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'hobby', label: 'Hobby' },
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
        link: '/recipick',
      },
      {
        id: 2,
        title: 'ServEase - hyperlocal service finder App',
        description:
          'A design solution to connect users with reliable local service providers.',
        image:
          'https://res.cloudinary.com/dsrmecb5y/image/upload/v1746034277/Portfolio/mwso8jbwpsnbhvdqvnyb.png',
        tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
        link: '/Servease',
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
        staggerChildren: 0.08, // Slightly faster stagger for more elegance
        delayChildren: 0.06, // Reduced delay for smoother appearance
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a more polished feel
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1, // Items disappear in reverse order
        ease: [0.4, 0, 0.2, 1],
        duration: 0.5,
      },
    },
  };

  // More sophisticated item animation with slight 3D effect
  const item = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.92,
      rotateX: 5, // Subtle 3D rotation
      filter: 'blur(4px)', // Start with slight blur
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

  // More elegant page transition with sophisticated sequencing
  const pageTransition = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1], // Custom easing for smoother entry
      },
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Slight overshoot for elegant entrance
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

  // Add this custom animation for tab switching
  const tabSwitchAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like cubic bezier
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

  // Unique stagger animation for images in projects
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
        ease: [0.25, 1, 0.5, 1], // Custom easing for a smooth reveal
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-6 mt-8"
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
              {/* Project Image/Video with Hover Effect */}
              <div className="mb-6 relative transform perspective-1000 group">
                <motion.div
                  whileHover={{
                    y: -5,
                    rotateY: 2,
                    boxShadow:
                      '0 15px 30px rgba(0,0,0,0.12), 0 8px 12px rgba(0,0,0,0.08)',
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="relative overflow-hidden rounded-lg shadow-xl"
                  onMouseEnter={(e) => {
                    // Find and play the video
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.style.opacity = '1';
                      video.play();
                      // Hide the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.opacity = '0';
                      }
                      // Show the action buttons overlay
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
                    // Find and pause the video
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.style.opacity = '0';
                      video.pause();
                      video.currentTime = 0;
                      // Show the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.opacity = '1';
                      }
                      // Hide the action buttons overlay
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
                    className="w-full h-72 overflow-hidden"
                  >
                    {/* Thumbnail Image (shown by default) */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover object-center transition-all duration-500"
                      style={{
                        position: 'relative',
                        opacity: '1',
                      }}
                    />

                    {/* Video (plays on hover) */}
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 transition-all duration-500 flex items-end justify-end gap-4 p-4 z-10"
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
                        className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                        whileHover={{
                          scale: 1.15,
                          rotate: 3,
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
                        className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-900 transition-colors"
                        whileHover={{
                          scale: 1.15,
                          rotate: -3,
                          transition: { type: 'spring', stiffness: 400 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>

                {/*decorative elements with animation */}
                <motion.div
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-gray-200 rounded-lg z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: -5,
                    x: -2,
                    borderColor: '#f1f1f1',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 border-2 border-red-200 rounded-lg z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: 5,
                    x: 2,
                    borderColor: '#fecaca',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
              </div>

              {/* Project Details with staggered animation */}
              <motion.h3
                className="sm:text-xl text-lg font-bold text-gray-900 mb-2"
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
                className="text-gray-700 max-sm:text-sm mb-4"
              >
                {project.description}
              </motion.p>

              {/*tag animations */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-red-50 text-red-700"
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
                      backgroundColor: '#fef2f2', // Slightly brighter on hover
                      boxShadow: '0 2px 5px rgba(239, 68, 68, 0.1)',
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
            <motion.div
              key={project.id}
              variants={item}
              className="group relative aspect-w-16 aspect-h-12"
            >
              {/* Main Image Container */}
              <Link to={project.link}>
                <div className="relative w-full h-full rounded-lg shadow-xl  overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Content Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {/* Top Content Container */}
                    <div className="absolute inset-x-0 top-0 p-6 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-2">
                        {/* Title and Links */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Content Container */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
                      {/* Tags */}
                      <div className="flex flex-wrap justify-end gap-2">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-gray-200 rounded-lg z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.2 + index * 0.1, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: -5,
                    x: -2,
                    borderColor: '#f1f1f1',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 border-2 border-red-200 rounded-lg z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.8,
                    transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                  }}
                  whileHover={{
                    rotate: 5,
                    x: 2,
                    borderColor: '#fecaca',
                    transition: { duration: 0.3 },
                  }}
                ></motion.div>
              </Link>
            </motion.div>
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
              className="group relative aspect-square overflow-hidden "
            >
              {/* Background Image */}
              <motion.div variants={imageReveal} className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ willChange: 'transform' }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Hover Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 -translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500">
                {/* Link Icon */}
                {project.links.instagram && (
                  <a
                    href={project.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10  hover:bg-white/30   delay-200"
                  >
                    <Camera size={20} className="text-white" />
                  </a>
                )}
                {/* Link Icon */}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/30   delay-200"
                  >
                    <Youtube size={20} className="text-white" />
                  </a>
                )}
                <h3 className="text-white text-lg font-bold mb-1 ">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-3 line-clamp-2  delay-75">
                  {project.description}
                </p>

                {/* Tags - show only on larger screens */}
                <div className="hidden md:flex flex-wrap gap-1 mb-3  delay-150">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-1.5 py-0.5 rounded-sm bg-white/20 text-white/90"
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

  return (
    <section
      id="projects"
      className="md:py-28 py-16 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="hidden lg:block">
        <FloatingShapes />
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            mass: 1,
          }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Work
          </h2>
          <motion.div
            className="h-1 w-20 bg-red-500 mx-auto mt-3"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 145, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              mass: 1,
              delay: 0.3,
            }}
          />
        </motion.div>

        <div className="flex justify-center mb-16 md:mb-24">
          <div className="inline-flex bg-white rounded-full shadow-md w-full max-w-md overflow-hidden">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative flex-1 flex justify-center overflow-hidden"
              >
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-black rounded-full z-0"
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
                  className={`relative z-10 px-2 md:px-8 py-2 w-full text-center text-sm md:text-base font-medium transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  whileHover={activeCategory !== category.id ? { y: -2 } : {}}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.label}
                </motion.button>
                {/* shine effect */}
                {activeCategory === category.id && (
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
                )}
              </div>
            ))}
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
