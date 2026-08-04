import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Clock } from 'lucide-react';

const POSTS = [
  {
    slug: 'tracking-million-space-objects',
    title:
      'The Hidden Software Challenges of Tracking 1 Million Space Objects',
    excerpt:
      'Tracking 30,000 objects and tracking 1 million objects are not the same problem at different scales. From O(N²) conjunction screening to spatial indexing, memory layout, and distributed fault tolerance — the software is what breaks first.',
    date: '2026-08-01',
    readTime: '12 min',
    tags: ['SSA', 'Scalability', 'Architecture'],
    featured: true,
  },
  {
    slug: 'orbital-systems-temporal',
    title: 'Why Orbital Systems Are Fundamentally Temporal Systems',
    excerpt:
      'Most software is built around state. Orbital systems are built around evolution. From conjunction analysis to re-entry prediction, the hardest problems in orbital software emerge when we mistake trajectories for snapshots and treat time as an input instead of a first-class concept.',
    date: '2026-06-04',
    readTime: '8 min',
    tags: ['Orbital Mechanics', 'Architecture', 'DRAKON'],
    featured: false,
  },
];


// ─── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

// ─── Motion variants ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.05 },
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
    transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 },
  },
};

const accentVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut', delay: 0.4 },
  },
};


// ─── post card ───────────────────────────────────────────────────────
const Post = ({ post }) => (
  <motion.div variants={fadeUp}>
    <div className="flex flex-col gap-2 mx-6 border border-white/10 rounded-lg py-4 px-6">
      {/* label */}
      <div className="flex items-center gap-2 mb-4">
      {post.featured && (
        <>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
     
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Latest Post
          </span>
          </>
        )}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4 group-hover:text-cyan-100 transition-colors">
        {post.title}
      </h2>

      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
        {post.excerpt}
      </p>

      {/* meta + tags row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
          <Clock size={12} />
          {post.readTime}
        </span>
        <span className="text-gray-700 font-mono">·</span>
        <span className="text-xs text-gray-500 font-mono">
          {fmt(post.date)}
        </span>
        <span className="text-gray-700 font-mono">·</span>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 border border-green-400/30 text-green-400 bg-green-400/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link to={`/blog/${post.slug}`}>
        <motion.div
          className="inline-flex items-center gap-2 text-sm font-mono text-green-400 border border-green-400/40 px-5 py-2 hover:bg-green-400/10 hover:border-green-400 transition-all duration-200"
          whileHover={{ x: 4 }}
        >
          Read post
          <ArrowRight size={14} />
        </motion.div>
      </Link>
    </div>
  </motion.div>
);



// ─── Main component ───────────────────────────────────────────────────────────
const Blog = () => {


  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/4 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/4 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Page heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 relative"
        >
          <motion.div
            className="relative inline-block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-2xl md:text-4xl Section-Heading px-8 py-4 tracking-widest uppercase text-green-400 font-mono"
              variants={textVariants}
            >
              &gt; dev_log
              <motion.span
                className="text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>

            {/* corner accents */}
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-xs sm:text-base font-mono mt-3 tracking-wider"
          >
            Engineering notes from building DRAKON and beyond
          </motion.p>
        </motion.div>

        {/* ── Featured post ── */}
        {POSTS.map((post) => (    <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-12"
          >
            <Post post={post} />
          </motion.div>) )}
      
      </div>
    </section>
  );
};

export default Blog;
