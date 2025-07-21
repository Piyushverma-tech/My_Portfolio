import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const floatingShapes = [
    { id: 1, shape: '◆', size: 'text-6xl', color: 'text-blue-400', delay: 0 },
    { id: 2, shape: '●', size: 'text-6xl', color: 'text-purple-400', delay: 2 },
    { id: 3, shape: '▲', size: 'text-6xl', color: 'text-green-400', delay: 4 },
    { id: 4, shape: '■', size: 'text-6xl', color: 'text-orange-400', delay: 1 },
    { id: 5, shape: '✦', size: 'text-6xl', color: 'text-pink-400', delay: 3 },
    { id: 6, shape: '◯', size: 'text-6xl', color: 'text-indigo-400', delay: 5 },
  ];
  return (
    <div>
      {/* Floating Background Shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} opacity-50 select-none pointer-events-none`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, 0.3, 0.1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + shape.delay * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: shape.delay,
          }}
        >
          {shape.shape}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
