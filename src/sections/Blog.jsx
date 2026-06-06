import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const POSTS = [
  {
    slug: 'orbital-systems-temporal',
    title: 'Why Orbital Systems Are Fundamentally Temporal Systems',
    excerpt:
      'Most software is built around state. Orbital systems are built around evolution. From conjunction analysis to re-entry prediction, the hardest problems in orbital software emerge when we mistake trajectories for snapshots and treat time as an input instead of a first-class concept.',
    date: '2026-06-04',
    readTime: '8 min',
    tags: ['Orbital Mechanics', 'Architecture', 'DRAKON'],
    featured: true,
  },
];

// const ALL_TAGS = ['All', ...Array.from(new Set(POSTS.flatMap((p) => p.tags)))];

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

// ─── Tag badge ────────────────────────────────────────────────────────────────
// const TagBadge = ({ label, active, onClick }) => (
//   <motion.button
//     onClick={onClick}
//     whileHover={{ scale: 1.06 }}
//     whileTap={{ scale: 0.96 }}
//     className={`text-xs font-mono px-3 py-1 border transition-all duration-200 ${
//       active
//         ? 'bg-cyan-400/15 border-cyan-400 text-cyan-400'
//         : 'bg-black/40 border-green-400/30 text-gray-400 hover:border-green-400/60 hover:text-green-400'
//     }`}
//   >
//     {label}
//   </motion.button>
// );

// ─── Featured post card ───────────────────────────────────────────────────────
const FeaturedCard = ({ post }) => (
  <motion.div variants={fadeUp}>
    <div className="p-6 sm:p-10">
      {/* label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
          Latest Post
        </span>
      </div>

      <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-cyan-100 transition-colors">
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

// ─── Regular post card ────────────────────────────────────────────────────────
// const PostCard = ({ post, index }) => (
//   <motion.div
//     variants={fadeUp}
//     className="group relative border border-green-400/20 bg-black/20 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-black/40 transition-all duration-300 overflow-hidden"
//   >
//     {/* top accent line on hover */}
//     <motion.div className="absolute top-0 left-0 h-px bg-gradient-to-r from-green-400/0 via-green-400/60 to-green-400/0 w-0 group-hover:w-full transition-all duration-500" />

//     <div className="p-5 sm:p-6 flex flex-col h-full">
//       {/* index badge */}
//       <div className="flex items-start justify-between mb-4">
//         <span className="text-xs font-mono text-gray-700">
//           /{String(index + 1).padStart(2, '0')}
//         </span>
//         <span className="text-xs font-mono text-gray-600">
//           {fmt(post.date)}
//         </span>
//       </div>

//       <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-3 group-hover:text-cyan-100 transition-colors flex-1">
//         {post.title}
//       </h3>

//       <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
//         {post.excerpt}
//       </p>

//       {/* tags */}
//       <div className="flex flex-wrap gap-1.5 mb-4">
//         {post.tags.map((t) => (
//           <span
//             key={t}
//             className="text-[10px] font-mono px-2 py-0.5 border border-green-400/20 text-green-400/70 bg-green-400/5"
//           >
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* footer */}
//       <Link
//         to={`/blog/${post.slug}`}
//         className="flex items-center justify-between text-xs font-mono text-gray-500 hover:text-cyan-400 transition-colors mt-auto group/link"
//       >
//         <span className="flex items-center gap-1">
//           <Clock size={10} />
//           {post.readTime}
//         </span>
//         <span className="flex items-center gap-1 group-hover/link:gap-2 transition-all">
//           Read
//           <ChevronRight size={12} />
//         </span>
//       </Link>
//     </div>
//   </motion.div>
// );

// ─── Empty state ──────────────────────────────────────────────────────────────
// const EmptyState = ({ tag }) => (
//   <motion.div
//     variants={fadeUp}
//     initial="hidden"
//     animate="visible"
//     className="col-span-full py-20 text-center border border-green-400/10 bg-black/10"
//   >
//     <p className="text-gray-600 font-mono text-sm mb-2">
//       {'> no posts tagged "'}
//       <span className="text-green-400">{tag}</span>
//       {'"'}
//     </p>
//     <p className="text-gray-700 font-mono text-xs">more coming soon_</p>
//   </motion.div>
// );

// ─── Main component ───────────────────────────────────────────────────────────
const Blog = () => {
  // const [activeTag, setActiveTag] = useState('All');

  const featured = POSTS.find((p) => p.featured);
  // const rest = POSTS.filter((p) => !p.featured);

  // const filtered =
  //   activeTag === 'All' ? rest : rest.filter((p) => p.tags.includes(activeTag));

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
            className="text-gray-500 text-base font-mono mt-3 tracking-wider"
          >
            Engineering notes from building DRAKON and beyond
          </motion.p>
        </motion.div>

        {/* ── Featured post ── */}
        {featured && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-12"
          >
            <FeaturedCard post={featured} />
          </motion.div>
        )}

        {/* ── Tag filter ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 items-center mb-8 pb-6 border-b border-green-400/10"
        >
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-600 mr-1">
            <Tag size={11} />
            filter
          </span>
          {ALL_TAGS.map((tag) => (
            <TagBadge
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </motion.div> */}

        {/* ── Post grid ── */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))
            ) : (
              <EmptyState tag={activeTag} />
            )}
          </motion.div>
        </AnimatePresence> */}
      </div>
    </section>
  );
};

export default Blog;
