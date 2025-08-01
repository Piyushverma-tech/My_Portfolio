import { useEffect } from 'react';
import { FiFigma } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import NextStudyBtn from '../components/NextStudyBtn';
import { MatrixRain } from '../components/Martrix';

const ServEase = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen font-sans">
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
      <header className="bg-black pb-4 pt-14 px-6 relative overflow-hidden border-b border-green-400/20">
        <MatrixRain opacity={0.1} />
        {/* Cyberpunk Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
          linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
        `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 max-sm:text-center relative">
              <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-300 md:text-5xl font-bold mb-4 max-md:mt-6 tracking-tight relative">
                ServEase
                <span className="block text-2xl md:text-3xl text-gray-300 font-light mt-1">
                  Case Study
                </span>
              </h1>

              {/* Simple neon underline */}
              <motion.div
                className="w-28 h-px max-sm:mx-auto bg-gradient-to-r from-green-400 to-cyan-400 mb-6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />

              <p className="text-lg md:text-xl max-w-xl text-gray-300 leading-tight sm:leading-relaxed mb-8 relative">
                Connecting local professionals with customers through
                <span className="text-green-400 font-medium">
                  {' '}
                  seamless experiences
                </span>
                .
              </p>

              <div className="flex flex-col items-center sm:flex-row gap-4 mb-6">
                <motion.div
                  className="flex items-center justify-center gap-4 bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm/30 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg shadow-green-400/10"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)',
                    borderColor: 'rgba(0, 255, 157, 0.6)',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-green-400">
                    <FiFigma size={24} />
                  </div>
                  <div className="text-cyan-400">
                    <SiAdobeillustrator size={24} />
                  </div>
                  <div className="text-cyan-400">
                    <SiAdobephotoshop size={24} />
                  </div>
                </motion.div>

                <motion.a
                  href="https://www.figma.com/design/XGmaUCjyyklBUF6JLkwR4y/ServEase?node-id=134-254&t=JEkqjYZiDf1wR5yE-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg px-8 py-3 shadow-lg shadow-green-400/25 group relative overflow-hidden"
                  whileHover={{
                    y: -3,
                    boxShadow:
                      '0 0 30px rgba(0, 255, 157, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
                    scale: 1,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                      repeatDelay: 1,
                    }}
                  >
                    <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    <path d="M12 3.5A3.5 3.5 0 0 0 8.5 7h7a3.5 3.5 0 0 0-3.5-3.5zm3.5 10.5a3.5 3.5 0 0 0-3.5 3.5v3.5a3.5 3.5 0 0 0 7 0V14h-3.5zm-7-7H5a3.5 3.5 0 0 0 0 7h3.5V7zm0 7H5a3.5 3.5 0 0 0 3.5 3.5V14z" />
                  </motion.svg>
                  <span className="relative z-10">View Prototype</span>
                </motion.a>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              {/* Floating App Image */}
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1744464404/jt6st7sx43icz79beddp.png"
                  loading="lazy"
                  alt="ServEase App Interface"
                  className="relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="py-12 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400 font-bold mb-8 md:mb-12 relative">
            Project Overview{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="space-y-8 md:space-y-12">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-400">
                Problem
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                In many cities, finding trusted local professionals like
                plumbers, tutors, and home chefs is difficult, and skilled
                individuals often struggle to reach clients efficiently. Current
                platforms are either cluttered, hard to navigate, or don&apos;t
                support both sides of the service economy.
              </p>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-400">
                Solution
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                ServEase bridges the gap by offering:
              </p>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                <li>
                  A smooth and intuitive experience for customers to discover
                  and book verified local professionals.
                </li>
                <li>
                  An efficient and professional workspace for service providers
                  to receive jobs, manage availability, and build their
                  reputation.
                </li>
                <li>
                  The app&apos;s map-like structure guides both users from one
                  step to the next—eliminating confusion and making the process
                  feel fast, friendly, and familiar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ServEase Timeline */}
      <section className="py-12 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400 font-bold mb-8 md:mb-12 relative">
            Project Timeline{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8 mb-8">
            <div className="flex items-center mb-6">
              <h3 className="text-xl md:text-2xl text-cyan-400 font-semibold">
                25-Days
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">
                      Phase
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">Research & Discovery</td>
                    <td className="py-4 px-4 text-right font-medium">4 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">User Personas & Flows</td>
                    <td className="py-4 px-4 text-right font-medium">3 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">Wireframing</td>
                    <td className="py-4 px-4 text-right font-medium">4 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">UI Design</td>
                    <td className="py-4 px-4 text-right font-medium">5 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">Prototyping & Interaction</td>
                    <td className="py-4 px-4 text-right font-medium">4 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-400/20">
                    <td className="py-4 px-4">Testing & Feedback</td>
                    <td className="py-4 px-4 text-right font-medium">3 days</td>
                  </tr>
                  <tr className="hover:bg-green-400/20">
                    <td className="py-4 px-4">Final Revisions & Polish</td>
                    <td className="py-4 px-4 text-right font-medium">2 day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="py-12 px-4 md:py-16 md:px-6 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Research & Insights{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl text-cyan-400  md:text-2xl font-semibold mb-3 md:mb-6">
                Competitor Gaps
              </h3>
              <ul className="list-disc text-base md:text-lg pl-5 text-gray-200 space-y-4">
                <li>
                  Cluttered flows with too many steps before booking or
                  accepting a job.
                </li>
                <li>Poor accessibility to professional tools for providers.</li>
                <li>
                  Lack of real-time communication and schedule management.
                </li>
              </ul>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl text-cyan-400 md:text-2xl font-semibold mb-3 md:mb-6">
                Key User Pain Points
              </h3>
              <p className="text-gray-100 border-b border-gray-100 text-base md:text-xl font-medium mb-2">
                Customer Users:
              </p>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-4 mb-4">
                <li>
                  &quot;I just want to find someone nearby I can trust without
                  scrolling endlessly.&quot;
                </li>
                <li>
                  &quot;Booking should be quick. I hate filling unnecessary
                  forms.&quot;
                </li>
              </ul>
              <p className="text-gray-50 border-b border-gray-100 text-base md:text-xl font-medium mb-2">
                Service Providers:
              </p>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                <li>
                  &quot;It takes too long to get verified and start receiving
                  work.&quot;
                </li>
                <li>
                  &quot;Managing my jobs and schedule needs to be easy I
                  don&apos;t have time to learn complex tools.&quot;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            User Personas{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-12">
            {/* Customer Persona */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                Customer Persona
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983588/Frame_45_rfoxsp.png"
                alt="Customer Persona"
                loading="lazy"
                className="w-full"
              />
            </div>

            {/* Service Provider Persona */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                Service Provider Persona
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983614/Frame_46_q2x8ok.png"
                alt="Service Provider Persona"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-12 px-4 md:py-16 md:px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Design Process{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="space-y-10 md:space-y-16">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-cyan-400/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-cyan-400">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2 text-center md:text-left">
                    Research
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-200 text-base md:text-lg mb-4">
                    To design something truly useful, I first needed to
                    understand real pain points—both for customers struggling to
                    find reliable services and individuals looking to offer
                    their skills.
                  </p>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                    <li>
                      Conducted user interviews with both potential customers
                      and service providers.
                    </li>
                    <li>
                      Analyzed competitor apps to identify key gaps in usability
                      and accessibility.
                    </li>
                    <li>
                      Mapped out core frustrations like time-consuming signups,
                      confusing UIs, and lack of trust.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-cyan-400/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-cyan-400">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2 text-center md:text-left">
                    Ideation
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-200 text-base md:text-lg mb-4">
                    With insights in hand, I shifted toward defining a solution
                    that feels easy, fast, and empowering—one that brings
                    clarity and confidence to both sides.
                  </p>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                    <li>
                      Brainstormed flows that reduce friction and create
                      confidence from the first tap.
                    </li>
                    <li>
                      Prioritized accessibility and mobile-first interactions.
                    </li>
                    <li>
                      Created journey maps to visualize each user&apos;s ideal
                      path from entry to task completion.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-cyan-400/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-cyan-400">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2 text-center md:text-left">
                    Prototyping
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-200 text-base md:text-lg mb-4">
                    Ideas became tangible through low to high-fidelity
                    wireframes—tested and refined based on feedback to ensure
                    everything felt seamless and intuitive.
                  </p>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                    <li>
                      Designed over 50+ screens including onboarding, booking,
                      and dashboards.
                    </li>
                    <li>
                      Ensured a cohesive visual system with a consistent tone
                      and personality.
                    </li>
                    <li>
                      Conducted mini usability tests to validate flows and
                      adjust for clarity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site map */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            Site Map{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-12">
            {/* Customer */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                For Customer
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983571/Desktop_-_23_ahz9qn.png"
                alt="Customer Site Map"
                loading="lazy"
                className="w-full "
              />
            </div>

            {/* Service Provider*/}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                For Service Providers
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983577/Desktop_-_24_e0hhi6.png"
                alt="Service Provider Site Map"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            User Flow{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-12">
            {/* Customer */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                For Customer
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983587/Desktop_-_25_lkawtt.png"
                alt="Customer User Flow"
                loading="lazy"
                className="w-full "
              />
            </div>

            {/* Service Provider */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                For Service Provider
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983582/Desktop_-_26_p9qcgz.png"
                alt="Service Provider User Flow"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-4 md:py-16 md:px-6 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Key Features{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm p-6 ">
              <h3 className="text-lg text-cyan-400 md:text-xl font-semibold mb-3">
                Location-Based Discovery
              </h3>
              <p className="text-gray-200 text-base md:text-lg">
                Users can easily discover and filter service providers based on
                proximity, ratings, and availability without endless scrolling.
              </p>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm p-6 ">
              <h3 className="text-lg text-cyan-400 md:text-xl font-semibold mb-3">
                Streamlined Booking
              </h3>
              <p className="text-gray-200 text-base md:text-lg">
                Simplified booking process with minimal form fields and smart
                defaults based on user preferences and history.
              </p>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm p-6 ">
              <h3 className="text-lg text-cyan-400 md:text-xl font-semibold mb-3">
                Provider Dashboard
              </h3>
              <p className="text-gray-200 text-base md:text-lg">
                Comprehensive yet simple dashboard for service providers to
                manage their schedule, jobs, and client communications in one
                place.
              </p>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm p-6 ">
              <h3 className="text-lg text-cyan-400 md:text-xl font-semibold mb-3">
                Instant Messaging
              </h3>
              <p className="text-gray-200 text-base md:text-lg">
                Real-time communication system allowing customers and providers
                to discuss details, ask questions, and coordinate services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* wireframes */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            WireFrames{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-16">
            {/* Customer */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Customer Side
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983627/Frame_9_wuaoh0.png"
                loading="lazy"
                alt="Customer Wireframe"
                className="w-full "
              />
            </div>

            {/* Service Provider */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Service Provider Side
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983584/Desktop_-_14_gjykdh.png"
                alt="Service Provider Wireframe"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Style guide */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            Style Guide{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div>
            <img
              src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983598/Desktop_-_27_i6lc5n.png"
              alt="Style Guide"
              loading="lazy"
              className="w-full "
            />
          </div>
        </div>
      </section>

      {/*High Fidelity*/}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            High Fidelity{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-16">
            {/* Customer */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Customer Side
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983627/Frame_43_iupms0.png"
                alt="Customer High Fidelity"
                loading="lazy"
                className="w-full "
              />
            </div>

            {/* Service Provider */}
            <div>
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Service Provider Side
              </h3>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1753983604/Desktop_-_14-1_s0egyn.png"
                alt="Service Provider High Fidelity"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final UI & Prototype*/}
      <section className="py-12 px-4 md:py-16 md:px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Final UI & Prototype{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                For Customers
              </h3>
              <ul className="list-disc text-base md:text-lg pl-5 text-gray-200 space-y-2">
                <li>Home, Explore, and Booking pages with smart filters.</li>
                <li>Real-time chat and notifications.</li>
                <li>
                  &quot;My Bookings&quot; page for tracking and modifying
                  upcoming services.
                </li>
              </ul>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                For Providers
              </h3>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-200 space-y-2">
                <li>
                  Personalized Dashboard with key metrics (jobs, earnings,
                  schedule).
                </li>
                <li>
                  &quot;Set Availability&quot; flow with drag-and-drop time
                  slots.
                </li>
                <li>One-tap job acceptance + smart onboarding roadmap.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Sign up demo */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            Sign Up{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Customer Sign up
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1744467680/pu7i2vhxbxt4jzghyxnl.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1744465705/fs67pbv1nvjdkrl7p5hw.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Service Provider Sign up
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1744467680/pu7i2vhxbxt4jzghyxnl.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1744466719/rbpop2hevyax0lgmarqd.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Task Flow demo video */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-12 relative">
            Task Completion{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Booking Service
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1744467680/pu7i2vhxbxt4jzghyxnl.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1744466590/bogodvdlgffmd5kbxmgd.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-cyan-400">
                Completing Job
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1744467680/pu7i2vhxbxt4jzghyxnl.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1744465698/eyrwl24izsmtneodzrxa.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Results & Takeaways Section */}
      <section className="py-12 px-4 md:py-16 md:px-6 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Results & Takeaways{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                Results
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-gray-200">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    Booking flow reduced from 9 steps (industry avg) to 3 steps.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    Service providers can start accepting jobs in under 2
                    minutes after joining.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    91% of testers said the guided &quot;map-like&quot;
                    navigation helped them feel less lost during onboarding.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                What I Learned
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-gray-200">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    Dual-user platforms must treat both sides as heroes—each
                    experience matters.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    Simplicity is key: reduce friction, and let users complete
                    or expand their journey at their own pace.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>
                    Always prioritize real-world usability over abstract
                    perfection.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-12 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl bg-md:text-3xl text-green-400  font-bold mb-8 md:mb-12 relative">
            Final Thoughts{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-cyan-400"
            >
              ✴
            </motion.span>
          </h2>

          <div className="bg-black/50 border border-green-400/30 backdrop-blur-sm/30 backdrop-blur-sm  p-6 md:p-8">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              With ServEase, I set out to solve a real-world problem, connecting
              people with trusted local services effortlessly, while empowering
              skilled individuals to grow and thrive. Every screen was designed
              with empathy, aiming to reduce friction and build trust. Seeing
              the flow come together for both users was a reminder that good
              design isn&apos;t just about visuals, it&apos;s about making life
              easier, faster, and more human.
            </p>
          </div>
        </div>
        <NextStudyBtn title={'Recipick'} slug={'/recipick'} />
      </section>
    </div>
  );
};

export default ServEase;
