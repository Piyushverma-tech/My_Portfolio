import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
export const SkillCard = ({ skill, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm  transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{skill.name}</h4>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
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
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-gray-600 tracking-wide overflow-hidden"
          >
            {skill.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.string,
  category: PropTypes.string,
};

export const SkillCategory = ({ category, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:mb-8 mb-6">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white ${
          isOpen ? 'shadow-md' : ''
        } p-4 rounded-lg  text-gray-800 hover:text-red-500  transition-all duration-300`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h4 className="text-xl font-semibold">{category}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} category={category} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

SkillCategory.propTypes = {
  skills: PropTypes.string,
  category: PropTypes.string,
};
