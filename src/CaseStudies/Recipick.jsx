import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FiFigma } from 'react-icons/fi';
import { SiAdobeillustrator } from 'react-icons/si';

const Recipick = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Case Study Header */}
      <header className="bg-black pb-4 pt-14 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Abstract shapes with Framer Motion */}

          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="absolute md:hidden bottom-28 right-28 w-32 h-32 rounded-full bg-serveasebackground blur-xl"
          ></motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-serveasebackground rounded-full opacity-10"
          ></motion.div>

          {/* Twinkling Stars - scattered around */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-serveasebackground"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1 + Math.random() * 3,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Larger star elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`bigstar-${i}`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                opacity: 0,
              }}
              className="absolute text-serveasebackground"
              animate={{
                opacity: [0, 0.7, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 4,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z"></path>
              </svg>
            </motion.div>
          ))}

          {/* Dotted grid pattern - visible on larger screens */}
          <div className="hidden md:block absolute inset-0">
            <div className="absolute right-10 top-10 grid grid-cols-5 gap-4">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-1 h-1 rounded-full bg-serveasebackground"
                  initial={{ opacity: 0.1 }}
                  animate={{
                    opacity: i % 3 === 0 ? [0.1, 0.3, 0.1] : 0.15, // Only animate every 3rd dot
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5 + (i % 3),
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 max-sm:text-center relative">
              {/* Decorative star/sparkle element near title with Framer Motion */}
              <motion.div
                className="absolute -top-6 -left-4 md:-left-8 transform text-recipicktext hidden md:block"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z"></path>
                </svg>
              </motion.div>

              <h1 className="text-3xl text-recipicktext md:text-5xl font-bold mb-4 max-md:mt-6 tracking-tight">
                Recipick - Case Study
                {/* Inline decoration after text with Framer Motion */}
                <motion.span
                  className="ml-2 text-recipicktext hidden md:inline-block"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                >
                  ✧
                </motion.span>
              </h1>

              <p className="text-lg md:text-xl max-w-xl text-gray-200 leading-tight sm:leading-relaxed mb-8 relative">
                Empowering food lovers to discover, cook, and share with an
                engaging community-driven recipe app.
              </p>

              <div className="flex flex-col items-center sm:flex-row gap-4 mb-6">
                <motion.div
                  className="text-recipicktext backdrop-blur-sm px-4 py-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center justify-center gap-4 max-w-xl">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <FiFigma size={24} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                      <SiAdobeillustrator size={24} />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.a
                  href="https://www.figma.com/design/vRw65wD0ecZrSRIAvBT30d/ReciPick?node-id=50-521&t=zRtKTjJBREa4XctV-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-recipicktext text-white font-medium rounded-lg px-6 py-3 shadow-md group"
                  whileHover={{
                    y: -2,
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  View Prototype
                </motion.a>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              {/* Image with subtle animation */}
              <motion.div
                className="relative"
                animate={{
                  opacity: [1],
                  scale: [0.9, 1.1, 0.9],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
              >
                {/* Decorative device frame shadow with animation */}

                <img
                  src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846046/Recipick%20-%20case%20study/rr85ni9q0fj8idcc3wdh.png"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Project Overview{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className=" mb-10 ">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <span className="font-bold text-xl">Recipick</span> is a modern
              recipe discovery app designed to make cooking more engaging,
              personalized, and social. The app not only helps users find
              exciting recipes, but also encourages them to share their cooking
              journey through reviews, photos, and interactions.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 ">
                Problem
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Most recipe apps are either cluttered with too much information,
                lack personalization, or feel too one-sided — users just consume
                content but don’t interact. New users often struggle to find
                trustworthy recipes or feel motivated enough to try them.
                There’s also a lack of community-driven feedback, making it
                harder to know which recipes are worth cooking.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Solution
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Recipick solves this by offering a fun, curated, and social
                experience around food. With personalized feeds, playful
                onboarding, and a gamified review system (Arena Points,
                Leaderboards, and Badges), the app encourages users not only to
                cook but to share their experiences. Reviews with images help
                others make better choices, while the community aspects boost
                user engagement and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Foundation */}
      <section className="py-12 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Project Foundation{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0  ">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Goals
              </h3>
              <ul className="list-disc text-base md:text-lg pl-5 text-gray-700 space-y-6 ">
                <li>
                  Make recipe discovery exciting with a clean, playful, and
                  visually engaging interface.
                </li>
                <li>
                  Encourage user engagement by introducing social elements like
                  reviews, Arena Points, Leaderboards, and Badges.
                </li>
                <li>
                  Personalize the experience with smart onboarding questions and
                  a tailored recipe feed.
                </li>
                <li>
                  Build a trusted community where users can rely on real
                  reviews, photos, and tips from fellow home cooks.
                </li>
                <li>
                  Simplify the cooking process with easy-to-follow steps,
                  organized ingredient lists, and time-saving filters.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Target Audience
              </h3>

              <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-6 mb-4">
                <li>
                  Young adults (18–35) who enjoy cooking at home or are just
                  getting started.
                </li>
                <li>
                  People looking for personalized recipes with variety and
                  modern flair.
                </li>
                <li>
                  Users who enjoy visuals, community-driven content, and
                  gamified experiences.
                </li>
                <li>
                  Busy individuals who need quick filters based on mood,
                  available time, or diet type.
                </li>
                <li>
                  Anyone who wants to explore cooking in a fun and encouraging
                  environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ReciPick Timeline */}
      <section className="py-12 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Project Timeline{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="flex items-center mb-6">
              <h3 className="text-xl md:text-2xl font-semibold">15-Days</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Phase
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">Research & Discovery</td>
                    <td className="py-4 px-4 text-right font-medium">3 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">User Personas & Flows</td>
                    <td className="py-4 px-4 text-right font-medium">2 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">Wireframing</td>
                    <td className="py-4 px-4 text-right font-medium">2 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">UI Design</td>
                    <td className="py-4 px-4 text-right font-medium">4 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">Prototyping & Interaction</td>
                    <td className="py-4 px-4 text-right font-medium">2 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">Testing & Feedback</td>
                    <td className="py-4 px-4 text-right font-medium">1 day</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">Final Revisions & Polish</td>
                    <td className="py-4 px-4 text-right font-medium">1 day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            User Personas{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-6">
            {/* Persona 1 */}
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846044/Recipick%20-%20case%20study/watrfkpk1gejpsts4psq.png"
                alt="User Persona"
                loading="lazy"
                className="w-full"
              />
            </div>

            {/*Persona 2*/}
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846044/Recipick%20-%20case%20study/upzgrzxlzg5znxhoqlxi.png"
                alt="Service Provider Persona"
                loading="lazy"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-12 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Design Process{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="space-y-10 md:space-y-16 ">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-recipickPrimary rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-recipicktext">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                    Research
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 text-base md:text-lg mb-4">
                    I started by exploring existing recipe apps and studying
                    user behaviors around cooking, personalization, and content
                    discovery. I also gathered insights through informal user
                    interviews to understand frustrations, needs, and
                    motivations in their cooking journeys.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-recipickPrimary rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-recipicktext">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                    Ideation
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 text-base md:text-lg mb-4">
                    With insights in hand, I brainstormed key features and flows
                    to solve user problems. Sketches, wireframes, and flow
                    diagrams helped shape ideas like personalized feeds,
                    mood-based recipe filters, and a community-driven review
                    system (Arena). The goal was to keep the experience fun,
                    helpful, and engaging.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/4">
                  <div className="bg-recipickPrimary rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
                    <span className="text-xl md:text-2xl font-bold text-recipicktext">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                    Prototyping
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 text-base md:text-lg mb-4">
                    I brought the vision to life using Figma—designing over 30+
                    high-fidelity screens with a clean, playful vibe. Each
                    element was thoughtfully designed, from the mood picker to
                    the Arena leaderboard, to enhance user experience and
                    engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site map */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            Site Map{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-12">
            {/* Customer */}
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846044/Recipick%20-%20case%20study/gbxxwmsugq1weaxvbnol.png"
                alt="Customer Site Map"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            User Flow{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-12">
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846043/Recipick%20-%20case%20study/uzac5mfbeiyjainzyfjp.png"
                alt="User Flow"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Key Features{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Personalized Recipes
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                ReciPick suggests recipes based on the user&apos;s selected diet
                type and preferences, creating a truly customized cooking
                experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Save and Bookmark Favorites
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                Easily bookmark and organize your favorite recipes for quick
                access whenever you need them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Schedule Recipes
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                Plan your cooking by scheduling recipes for later. Helps users
                stay organized with meal prepping and planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Track Cooking Progress
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                Users can track completed recipes, see their cooking streaks,
                and monitor their overall cooking journey through the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* wireframes */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            WireFrames{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-16">
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846096/Recipick%20-%20case%20study/ewaap5tnm81crx0wp7kk.png"
                loading="lazy"
                alt="Customer Wireframe"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style guide */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            Style Guide{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div>
            <img
              src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846110/Recipick%20-%20case%20study/q6qa5a0hacbbg0qycvmh.png"
              alt="Style Guide"
              loading="lazy"
              className="w-full "
            />
          </div>
          <div className="space-y-8 mt-4 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 ">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 ">
              <h3 className="text-xl  font-semibold mb-3 md:mb-4">
                Typography
              </h3>
              <ul className="list-disc text-base md:text-lg pl-5 text-gray-700 space-y-6">
                <li>
                  I used Merriweather Sans for headings because it is clean,
                  modern, and easy to read — giving a fresh and welcoming feel.
                </li>
                <li>
                  For body text, Lato was chosen for its simplicity and smooth
                  readability, ensuring that users can browse recipes and
                  instructions without strain.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl  font-semibold mb-3 md:mb-4">
                Color Palette
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium mb-6">
                I selected warm, natural tones to reflect the theme of food,
                freshness, and home-style comfort.
              </p>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-6 mb-4">
                <li>
                  The Primary color (#D97C48) gives an appetizing and energetic
                  vibe.
                </li>
                <li>
                  The Accent color (#FFE0B2) and Highlight color (#FFB74D) bring
                  a light, cheerful feeling.
                </li>
                <li>
                  Dark browns (#4A3F35) for headings and text ground the design
                  and improve readability against the soft Background (#FAF8F5).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*High Fidelity*/}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            High Fidelity{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid  gap-16">
            <div>
              <img
                src="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745846082/Recipick%20-%20case%20study/krkt3vtudardyazjjkiz.png"
                alt="Customer High Fidelity"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Final UI & Prototype{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className=" mb-10 ">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              After several rounds of ideation, iteration, and user feedback,
              ReciPick’s final UI was crafted to deliver a playful yet modern
              experience that feels both intuitive and delightful. The design
              emphasizes clean layouts, vibrant imagery, and simple navigation
              to make discovering, saving, and cooking recipes an enjoyable
              process.
            </p>
          </div>

          <div className="space-y-8 ">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Key highlights of the final design include
              </h3>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-6 mb-4">
                <li>
                  A welcoming onboarding flow that personalizes the experience
                  based on dietary preferences.
                </li>
                <li>
                  A visually rich home screen with personalized recipe
                  suggestions.
                </li>
                <li>
                  Smooth browsing and search features to easily explore new
                  dishes.
                </li>
                <li>
                  Interactive features like scheduling recipes, tracking cooking
                  progress, and sharing reviews in the Arena.
                </li>
                <li>
                  A light, approachable color palette paired with clean
                  typography to maintain readability and warmth across the app.
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base md:text-lg ">
              The working prototype was built in Figma, showcasing all major
              user flows from onboarding to recipe completion and community
              interactions.
            </p>
          </div>
        </div>
      </section>
      {/* demo */}
      <section className="py-16 px-6  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
            Demo{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-recipicktext">
                Sign up
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745938816/Recipick%20-%20case%20study/whg2cxmi51alijiddkrc.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1745937974/Recipick%20-%20case%20study/alxjlouqqxi0qqv8po4x.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-1 p-4">
              <h3 className="text-xl md:text-2xl  font-semibold mb-4 text-recipicktext">
                Recipe completion
              </h3>
              <video
                controls
                className="w-full max-w-sm rounded-lg"
                preload="none"
                poster="https://res.cloudinary.com/dsrmecb5y/image/upload/v1745938816/Recipick%20-%20case%20study/whg2cxmi51alijiddkrc.png"
              >
                <source
                  src="https://res.cloudinary.com/dsrmecb5y/video/upload/v1745938215/Recipick%20-%20case%20study/ren61rduwyrurxwbxpiz.mp4"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Results & Takeaways{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                Results
              </h3>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-6 mb-4">
                <li>
                  <span className="font-semibold">
                    Seamless User Experience:
                  </span>{' '}
                  Through personalized onboarding and an engaging Arena system,
                  ReciPick successfully delivers a smooth and rewarding cooking
                  journey for users.
                </li>
                <li>
                  <span className="font-semibold">Increased Engagement:</span>{' '}
                  Features like recipe scheduling, progress tracking, and
                  earning Arena points encouraged users to not just explore but
                  actively complete recipes.
                </li>

                <li>
                  <span className="font-semibold">Community Building:</span> By
                  enabling users to share reviews and achievements, the app
                  fosters a sense of community, motivating others to participate
                  and explore more recipes.
                </li>
                <li>
                  <span className="font-semibold">Flexible and Inclusive:</span>{' '}
                  Allowing users to choose their dietary preferences at the
                  start ensures the app caters to a wide range of eating habits,
                  making it more accessible and personalized.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                Takeaways
              </h3>
              <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-6 mb-4">
                <li>
                  <span className="font-semibold">
                    User Motivation Matters:
                  </span>{' '}
                  Small incentives like Arena points and badges can
                  significantly boost engagement and completion rates.
                </li>
                <li>
                  <span className="font-semibold">Simplicity Wins:</span> Clean,
                  friendly UI paired with a straightforward flow makes the app
                  approachable, even for non-tech-savvy users.
                </li>
                <li>
                  <span className="font-semibold">
                    Community Features Add Value:
                  </span>{' '}
                  Giving users a platform to share their journey not only
                  enriches the experience but builds a vibrant ecosystem around
                  the product.
                </li>
                <li>
                  <span className="font-semibold">
                    Research-Led Design Pays Off:
                  </span>{' '}
                  Starting with clear research goals and user insights helped in
                  creating a product that feels purposeful and user-centric.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-12 px-4 md:py-16 md:px-6 mb-8  ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 relative">
            Final Thoughts{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-4xl rounded-full text-red-600"
            >
              ✴
            </motion.span>
          </h2>

          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Throughout this project, the focus remained on building a tool
              that is not only visually inviting but also genuinely helpful for
              users at different cooking levels. From quick dietary
              customization to earning rewards through shared experiences,
              ReciPick makes every step of the cooking journey engaging and
              personal. This project reinforced the importance of designing with
              empathy — understanding users needs, keeping interactions simple,
              and making the experience delightful.
            </p>
          </div>
        </div>
      </section>
      <a
        href="https://www.figma.com/design/vRw65wD0ecZrSRIAvBT30d/ReciPick?node-id=50-521&t=0p7qgMA8dqxiwd7f-1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex  justify-center items-center bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white font-medium px-6 py-4 md:py-6 shadow-md hover:shadow-lg"
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
        View Prototype
      </a>
    </div>
  );
};

export default Recipick;
