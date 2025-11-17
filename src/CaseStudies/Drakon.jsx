import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiFigma } from 'react-icons/fi';
import { SiAdobeillustrator } from 'react-icons/si';
import { ExternalLink, Lightbulb, User } from 'lucide-react';
import {
  collision_screening,
  dashboard,
  decisions,
  Maneuver_Design,
  outcomes,
  personas,
  platformStructure,
  takeaways,
  userNeeds,
} from './data';
import NextStudyBtn from '../components/NextStudyBtn';

const Drakon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762872228/Dashboard_mhl55j.png',
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762931442/Dashboard-2_ulpogi.png',
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762886581/Collision_Screening_vgaiaq.png',
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762887405/Maneuver_Design_tnnriz.png',
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762931446/Maneuver_Design_compare_gmolkl.png',
    'https://res.cloudinary.com/dsrmecb5y/image/upload/v1762931768/Custom_Maneuver_oquiie.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Calculate positions for all images
  const getImageStyle = (index) => {
    const diff = index - currentIndex;
    const total = images.length;

    // Normalize difference to handle wrap-around
    let position = diff;
    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;

    const scale = position === 0 ? 1 : 0.7;
    const zIndex = position === 0 ? 10 : 5 - Math.abs(position);
    const translateX = position * 300; // spacing between cards
    const opacity = Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.3;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen">
      <div className="pb-8 pt-28 px-6 relative overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* In Development Badge */}
              <motion.a
                href="https://github.com/Piyushverma-tech/drakon"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-medium hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                In Development
                <ExternalLink size={16} />
              </motion.a>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-100 mb-6 tracking-wide">
                <span className="text-cyan-400 font-medium">DRAKON</span> –
                Satellite Tracking & Visualization Platform
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8"
            >
              A comprehensive design solution for real-time satellite
              monitoring, collision screening, and maneuver planning —
              visualized through an interactive 3D globe for enhanced spatial
              awareness and mission safety.
            </motion.p>

            {/* Tools and Prototype Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <div className="flex items-center justify-center gap-4 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-cyan-400">
                  <FiFigma size={24} />
                </div>
                <div className="text-green-400">
                  <SiAdobeillustrator size={24} />
                </div>
              </div>

              <motion.a
                href="https://www.figma.com/design/KCR1ef8XCh4QtScCj8aU8o/DRAKON-01A?node-id=0-1&t=fiaQWqt62TANRtoh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold rounded-lg px-8 py-3 shadow-lg hover:shadow-cyan-400/30 transition-all"
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                  <path d="M12 3.5A3.5 3.5 0 0 0 8.5 7h7a3.5 3.5 0 0 0-3.5-3.5zm3.5 10.5a3.5 3.5 0 0 0-3.5 3.5v3.5a3.5 3.5 0 0 0 7 0V14h-3.5zm-7-7H5a3.5 3.5 0 0 0 0 7h3.5V7zm0 7H5a3.5 3.5 0 0 0 3.5 3.5V14z" />
                </svg>
                <span>View Prototype</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Carousel Slider */}
          <div className="relative h-[250px] sm:h-[500px] flex items-center justify-center overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className="absolute rounded-2xl sm:w-[900px] w-[400px] overflow-hidden shadow-xl shadow-cyan-300/5"
                style={{
                  ...getImageStyle(index),
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={img}
                  alt={`Dashboard ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-cyan-500 to-green-500'
                    : 'w-3 bg-slate-600 hover:bg-slate-500'
                } h-3 rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Introduction
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The rapid increase in satellites and space debris has made
                collision avoidance a critical challenge for operators,
                analysts, and agencies. A single close approach (conjunction)
                can threaten satellite safety, mission continuity, and
                operational costs.
              </p>
            </motion.div>

            {/* Objective */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-24"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Objective
              </h3>
              <p className="text-lg text-gray-300 mb-10">
                The goal of this project was to design a persona-driven platform
                that enables:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Satellite Operators',
                    description:
                      'to monitor risks in real-time and act quickly',
                  },
                  {
                    title: 'Mission Analysts',
                    description:
                      'to screen conjunctions, validate data, and compare maneuvers.',
                  },
                  {
                    title: 'Agency Representatives',
                    description:
                      'to track fleet-wide health, risk, and cost impact at a glance.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Scope */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scope
              </h3>
              <p className="text-lg text-gray-300 mb-10">
                The platform consists of three major modules:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Dashboard',
                    subtitle: 'Fleet-wide risk awareness and KPIs.',
                  },
                  {
                    title: 'Collision Screening',
                    subtitle:
                      'Identification, filtering, and analysis of potential conjunctions.',
                  },
                  {
                    title: 'Maneuver Design',
                    subtitle:
                      'Designing, validating, and confirming maneuvers with cost & fuel impact analysis.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-base leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/*User Personas*/}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-16"
            >
              User Personas & Pain Points
            </motion.h2>

            {/* Personas Cards */}
            <div className="space-y-6">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {persona.title}
                      </h3>

                      <div>
                        <p className="text-gray-400 mb-2">
                          <span className="font-semibold text-white">
                            Role:
                          </span>{' '}
                          {persona.role}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400 mb-2">
                          <span className="font-semibold text-white">
                            Key Goals:
                          </span>{' '}
                          {persona.keyGoals}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400 mb-2">
                          <span className="font-semibold text-white">
                            Core Tasks:
                          </span>{' '}
                          {persona.coreTasks}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">
                          <span className="font-semibold text-white">
                            Pain Points:
                          </span>{' '}
                          {persona.painPoints}
                        </p>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="flex items-center justify-center my-auto">
                      <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-cyan-400/20 to-green-400/20 border-2 border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-all">
                        <User className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design approach */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Design Approach
            </motion.h2>

            {/* Introduction */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              This approach centered on clarity, speed, and trust. Each screen
              was designed around the specific needs of our three personas:
            </motion.p>

            {/* User Needs List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              {userNeeds.map((need, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />
                  <p className="text-gray-300">
                    <span className="font-bold text-white">{need.label}</span>{' '}
                    {need.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Achievement Statement */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              To achieve this, we structured the platform with:
            </motion.p>

            {/* Platform Structure Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6 mb-16"
            >
              {platformStructure.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-green-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Design Principle */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              variants={fadeInUp}
              className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-l-4 border-cyan-400 rounded-r-lg p-6"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="font-bold text-white">
                  The design was guided by a single principle:
                </span>{' '}
                turning complex space data into simple, actionable decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Dashboard
            </motion.h2>

            {/* Introduction */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              The dashboard provides a high-level overview of fleet health and
              collision risk, enabling users to scan critical information within
              seconds.
            </motion.p>

            {/* Layout List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              <p className="text-2xl text-gray-300 font-semibold">
                Key Widgets
              </p>
              {dashboard.map((Layout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />

                  <p className="text-gray-300">
                    <span className="font-bold text-white">{Layout.label}</span>{' '}
                    {Layout.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Achievement Statement */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-12 leading-relaxed"
            >
              For agency representatives, the dashboard translates technical
              data into clear business insights. For operators, it highlights
              urgent risks immediately, minimizing noise and reducing decision
              time.
            </motion.p>

            {/* Dashboard image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative max-w-6xl mx-auto perspective-1000 p-10 bg-gradient-to-br from-gray-400/10 to-slate-400/10 border-2 border-gray-400 rounded-3xl shadow-2xl"
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ transform: 'rotateX(8deg)' }}
              >
                {/* Product image*/}
                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1762872228/Dashboard_mhl55j.png"
                  alt="Recipick Dashboard"
                  className="w-full h-auto"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Soft glow effect */}
              <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Collision Screening */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Collision Screening
            </motion.h2>

            {/* Introduction */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              The Collision Screening module allows users to detect, filter, and
              analyze conjunctions, balancing fast scanning for operators with
              deep analysis for mission analysts.
            </motion.p>

            {/* feature List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              <p className="text-2xl text-gray-300 font-semibold">Layout</p>
              {collision_screening.map((Layout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />

                  <p className="text-gray-300">
                    <span className="font-bold text-white">{Layout.label}</span>{' '}
                    {Layout.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Achievement Statement */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-12 leading-relaxed"
            >
              Operators get rapid situational awareness and a clear “Send to
              Maneuver Design” path without distraction. Analysts can filter,
              sort, and validate events with both data and visualization before
              planning maneuvers. Agency reps can occasionally review high-risk
              events for transparency, while relying on dashboard summaries for
              oversight.
            </motion.p>

            {/* Dashboard image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative max-w-6xl mx-auto perspective-1000 p-10 bg-gradient-to-br from-gray-400/10 to-slate-400/10 border-2 border-gray-400 rounded-3xl shadow-2xl"
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ transform: 'rotateX(8deg)' }}
              >
                {/* Product image*/}
                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1762886581/Collision_Screening_vgaiaq.png"
                  alt="Collision Screening module"
                  className="w-full h-auto"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Soft glow effect */}
              <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/*  Maneuver Design */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Maneuver Design
            </motion.h2>
            {/* Introduction */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              The Maneuver Design module allow operators and analysts to design,
              compare, and validate orbital maneuvers with both technical rigor
              and business awareness, ensuring safety without unnecessary cost.
            </motion.p>
            {/* feature List */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              <p className="text-2xl text-gray-300 font-semibold">
                Dual Mode Support
              </p>
              {Maneuver_Design.support.map((Layout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />

                  <p className="text-gray-300">
                    <span className="font-bold text-white">{Layout.label}</span>{' '}
                    {Layout.description}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              <p className="text-2xl text-gray-300 font-semibold">
                Key Features
              </p>
              {Maneuver_Design.features.map((Layout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />

                  <p className="text-gray-300">
                    <span className="font-bold text-white">{Layout.label}</span>{' '}
                    {Layout.description}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
              className="mb-12 space-y-3"
            >
              <p className="text-2xl text-gray-300 font-semibold">Results</p>
              {Maneuver_Design.achievements.map((Layout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-2.5" />

                  <p className="text-gray-300">
                    <span className="font-bold text-white">{Layout.label}</span>{' '}
                    {Layout.description}
                  </p>
                </div>
              ))}
            </motion.div>
            {/* Maneuver Design image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative max-w-6xl mx-auto perspective-1000 p-10 bg-gradient-to-br from-gray-400/10 to-slate-400/10 border-2 border-gray-400 rounded-3xl shadow-2xl"
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ transform: 'rotateX(8deg)' }}
              >
                {/* Product image*/}
                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1762887405/Maneuver_Design_tnnriz.png"
                  alt="Maneuver Design"
                  className="w-full h-auto"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Soft glow effect */}
              <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/*  User Flow */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              User Flow
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative max-w-6xl mx-auto"
            >
              <div
                className="relative overflow-hidden "
                style={{ transform: 'rotateX(8deg)' }}
              >
                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1762888991/Frame_1_eo9dof.png"
                  alt="User Flow"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key UX Decisions */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-16"
            >
              Key UX Decisions
            </motion.h2>

            {/* Decisions List */}
            <div className="space-y-8">
              {decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="flex gap-6 items-start">
                    {/* Number and Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-green-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:border-cyan-400/60 transition-all">
                        {decision.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8 border-b border-slate-800 group-hover:border-slate-700 transition-all">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {decision.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {decision.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Outcome Section */}
            <div className="mb-28">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                Outcome
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
              >
                The final design delivers a persona-aligned, problem-solving
                platform:
              </motion.p>

              {/* Outcome Cards */}
              <div className="space-y-6 mb-12">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-green-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                        {outcome.icon}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="font-bold text-white">
                          {outcome.persona}
                        </span>{' '}
                        {outcome.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary Statement */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={fadeInUp}
                className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-l-4 border-cyan-400 rounded-r-lg p-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="font-bold text-white">
                    By integrating tiered information flow, modular widgets, and
                    dual workflow support, the system goes beyond aesthetics.
                  </span>{' '}
                  It ensures quick data-to-decision turnaround and builds trust
                  across all levels of the mission team.
                </p>
              </motion.div>
            </div>

            {/* Takeaways Section */}
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-12"
              >
                Takeaways
              </motion.h2>

              <div className="space-y-8">
                {takeaways.map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mt-3" />
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {takeaway}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Final Insight */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                variants={fadeInUp}
                className="mt-12 flex items-start gap-4 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-green-400/20 border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <p className="text-lg sm:text-xl text-white leading-relaxed italic">
                  &quot;Good UX is not about knowing the industry beforehand —
                  it&apos;s about research, empathy, and problem-solving.&quot;
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <NextStudyBtn title={'ServEase'} slug={'/servease'} />
      </div>
    </div>
  );
};

export default Drakon;
