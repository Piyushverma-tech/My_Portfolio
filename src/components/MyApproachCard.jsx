/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Lightbulb, Target, Eye, Zap } from 'lucide-react';

const ApproachSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationTriggered(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

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

  const cardsData = [
    {
      id: 'what-i-do',
      title: 'What I Do',
      icon: <Code className="w-8 h-8" />,
      items: [
        { text: 'UI/UX Design', icon: <Palette className="w-5 h-5" /> },
        { text: 'Web Development', icon: <Code className="w-5 h-5" /> },
        {
          text: 'Graphic Design & Illustration',
          icon: <Eye className="w-5 h-5" />,
        },
      ],
      description:
        "I love building digital stuff that looks good and works better. Whether I'm sketching out user interfaces or coding solid web apps, my focus is on creating projects that pop visually and run smoothly.",
    },
    {
      id: 'my-approach',
      title: 'My Approach',
      icon: <Target className="w-8 h-8" />,
      items: [
        {
          text: 'Blend creativity with problem-solving',
          icon: <Lightbulb className="w-5 h-5" />,
        },
        {
          text: 'Simplicity and clarity over complexity',
          icon: <Eye className="w-5 h-5" />,
        },
        {
          text: 'Design interfaces that speak for themselves',
          icon: <Zap className="w-5 h-5" />,
        },
      ],
      description:
        'My approach is all about getting what users need and turning that into solutions. I like keeping things simple and minimal. When it comes to design, I make sure every detail has a purpose and works together to create a effortless experience.',
    },
  ];

  return (
    <div className="pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* What I Do & My Approach */}
        <motion.div
          initial="hidden"
          animate={animationTriggered ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4"
        >
          {cardsData.map((card, cardIndex) => (
            <motion.div
              key={card.id}
              variants={fadeUpVariant}
              className="group relative h-80 perspective-1000"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Flip Card Container */}
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                animate={{
                  rotateY: hoveredCard === card.id ? 180 : 0,
                }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200  duration-300 flex flex-col">
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center">
                        <div className="text-3xl text-gray-800 mr-4">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1">
                        {String(cardIndex + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="flex-1">
                      <div className="absolute left-6 top-24 bottom-8 w-px bg-gray-300"></div>
                      <ul className="space-y-4 pl-6">
                        {card.items.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={
                              animationTriggered
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                            }
                            transition={{
                              delay: cardIndex * 0.3 + index * 0.2 + 0.6,
                            }}
                            className="flex items-center text-gray-800"
                          >
                            <div className="w-6 h-6 bg-black flex items-center justify-center mr-3">
                              <div className="text-white text-xs">
                                {item.icon}
                              </div>
                            </div>
                            <span className="text-base font-medium">
                              {item.text}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom accent */}
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                        Overview
                      </span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="w-2 h-2 bg-red-400"></div>
                        <div className="w-2 h-2 bg-red-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-black text-white border border-gray-700 flex flex-col transform rotateY-180">
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 border border-gray-700">
                        DETAILS
                      </div>
                      <div className="text-3xl text-white">{card.icon}</div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <div className="absolute left-6 top-20 bottom-16 w-px bg-gray-700"></div>
                      <p className="text-base leading-relaxed text-gray-300 pl-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white"></div>
                        <div className="w-2 h-2 bg-red-600"></div>
                        <div className="w-2 h-2 bg-red-800"></div>
                      </div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Overview
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
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

export default ApproachSection;
