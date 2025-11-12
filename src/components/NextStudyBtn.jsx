import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NextStudyBtn = ({ title, slug }) => {
  return (
    <Link to={slug} className="block">
      <div className="flex justify-center mt-16 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative cursor-pointer group"
          whileHover={{ scale: 1.05 }}
        >
          {/* Container */}
          <div className="relative h-24 w-[400px] flex items-center justify-center overflow-hidden">
            {/* Animated arrows moving right */}
            <div className="absolute inset-0 flex items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 gap-4"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{
                    x: [
                      -60, -40, -20, 0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
                      200, 220, 240, 260, 280, 300, 320, 340,
                    ],
                    opacity: [
                      0, 0, 0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1,
                      0.9, 0.8, 0.7, 0.5, 0.3, 0.1, 0, 0,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'linear',
                  }}
                >
                  <ChevronRight
                    className="text-green-400"
                    size={65}
                    strokeWidth={1.5}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))',
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key="title"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 text-center"
              >
                <motion.p
                  className="text-xs text-cyan-400 font-mono tracking-widest mb-2 uppercase"
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                  }}
                >
                  Next Up
                </motion.p>
                <motion.h3
                  className="text-white font-bold text-2xl leading-tight"
                  style={{
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  }}
                >
                  {title}
                </motion.h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default NextStudyBtn;

NextStudyBtn.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
