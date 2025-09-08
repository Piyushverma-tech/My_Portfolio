import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NextStudyBtn = ({ title, slug }) => {
  return (
    <Link to={slug}>
      <div className="flex justify-center mt-16 mb-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="group relative"
        >
          {/* Main Button Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-black rounded-2xl" />

            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button Content */}
            <div className="relative px-8 py-6 bg-black/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-center gap-4">
                {/* Text Content */}
                <div className="text-right">
                  <motion.p
                    className="text-sm text-white/80 font-medium mb-1"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Next Up
                  </motion.p>
                  <motion.h3
                    className="text-white font-bold text-lg leading-tight max-w-64"
                    initial={{ x: 0 }}
                    whileHover={{ x: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {title}
                  </motion.h3>
                </div>

                {/* Animated Arrow Container */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Background Circle */}
                  <motion.div
                    className="absolute inset-0 bg-green-600/40 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Primary Arrow */}
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 6 }}
                    transition={{
                      duration: 2,
                      delay: 2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                    className="whitespace-nowrap inline-block"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400/60 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-indigo-600/50 rounded-2xl blur-xl -z-10"
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0.4 }}
          />
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
