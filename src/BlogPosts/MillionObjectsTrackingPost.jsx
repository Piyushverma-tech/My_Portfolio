import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from 'lucide-react';

// ─── Table of contents ─────────────────────────────────────────────────────────
const sections = [
  { id: 'counting-pairs', label: 'Counting Pairs' },
  { id: 'spatial-indexing', label: 'Spatial Indexing' },
  { id: 'temporal-indexing', label: 'Temporal Indexing' },
  { id: 'propagation-windows', label: 'Propagation Windows' },
  { id: 'memory-layout', label: 'Memory Layout' },
  { id: 'gpu-vs-cpu', label: 'GPU vs CPU' },
  { id: 'systems-scaling', label: 'Systems Scaling' },
  { id: 'partitioning', label: 'Partitioning' },
  { id: 'fault-tolerance', label: 'Fault Tolerance' },
  { id: 'streaming-updates', label: 'Streaming Updates' },
  { id: 'conclusion', label: 'What Scale Changes' },
];

const TOC = ({ activeId }) => (
  <nav className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 space-y-1 w-52">
    {sections.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        className={`flex items-center gap-2 text-[11px] font-mono tracking-wide transition-all duration-200 py-1 group ${
          activeId === id
            ? 'text-cyan-400'
            : 'text-gray-600 hover:text-gray-400'
        }`}
      >
        <span
          className={`block h-px flex-shrink-0 transition-all duration-300 ${
            activeId === id
              ? 'w-6 bg-cyan-400'
              : 'w-3 bg-gray-700 group-hover:w-5 group-hover:bg-gray-500'
          }`}
        />
        {label}
      </a>
    ))}
  </nav>
);

// ─── Inline code ───────────────────────────────────────────────────────────────
const C = ({ children }) => (
  <code className="font-mono text-cyan-300 text-[0.88em] bg-cyan-950/60 border border-cyan-400/20 px-1.5 py-0.5 rounded-sm">
    {children}
  </code>
);

// ─── Section anchor wrapper ────────────────────────────────────────────────────
const Section = ({ id, children }) => (
  <section id={id} className="scroll-mt-24">
    {children}
  </section>
);

// ─── Section heading ───────────────────────────────────────────────────────────
const H2 = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 leading-tight flex items-baseline gap-3"
  >
    <span className="text-green-400/40 font-mono text-lg font-normal select-none">
      {'//'}
    </span>
    {children}
  </motion.h2>
);

// ─── Body paragraph ────────────────────────────────────────────────────────────
const P = ({ children, lead = false }) => (
  <motion.p
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45 }}
    className={`mb-5 leading-[1.85] ${
      lead
        ? 'text-lg md:text-xl text-gray-200 font-light'
        : 'text-base md:text-[16.5px] text-gray-400'
    }`}
  >
    {children}
  </motion.p>
);

// ─── Callout / pull-quote ──────────────────────────────────────────────────────
const Callout = ({ children }) => (
  <motion.blockquote
    initial={{ opacity: 0, x: -8 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="relative my-10 pl-6 border-l-2 border-cyan-400"
  >
    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-400" />
    <p className="text-cyan-100 text-base md:text-lg leading-relaxed italic font-light">
      {children}
    </p>
  </motion.blockquote>
);

// ─── Divider ───────────────────────────────────────────────────────────────────
const Hr = () => (
  <div className="my-14 flex items-center gap-4 opacity-40">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-green-400/50" />
    <motion.span
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="text-cyan-400 text-xl sm:text-2xl font-normal drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
    >
      ✴
    </motion.span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-green-400/50" />
  </div>
);

// ─── Main component ────────────────────────────────────────────────────────────
const MillionObjectsTrackingPost = () => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title =
      'The Hidden Software Challenges of Tracking 1 Million Space Objects | dev_log';
    return () => {
      document.title = 'Piyush Verma | Frontend Developer';
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* background grid */}
      <div className="fixed inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.018)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <TOC activeId={activeId} />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-14 px-4 sm:px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-green-400 transition-colors group"
            >
              <ArrowLeft
                size={12}
                className="group-hover:-translate-x-1 transition-transform"
              />
              dev_log
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {['SSA', 'Scalability', 'Architecture'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 border border-green-400/25 text-green-400/80 bg-green-400/5 rounded-sm"
              >
                <Tag size={9} />
                {t}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-bold leading-[1.18] mb-8"
          >
            The Hidden Software Challenges of Tracking{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              1 Million Space Objects
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 text-[12px] font-mono text-gray-600"
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={10} />
              01 Aug 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={10} />
              12 min read
            </span>
            <span>·</span>
            <span className="text-green-400/50">Piyush Verma</span>
          </motion.div>
        </div>
      </header>

      {/* ── Article ─────────────────────────────────────────────────────────── */}
      <article className="relative z-10 px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <P lead>
            Tracking 30,000 objects and tracking 1 million objects are not the
            same problem at different scales. They are different problems
            entirely.
          </P>

          <P>
            Most orbital tracking systems today are built around catalogs in the
            tens of thousands, roughly matching what ground-based radar and
            optical networks could resolve, and what existing software
            architectures could hold in memory and reason about pairwise. But
            that ceiling is moving. Improved sensor networks, commercial SSA
            constellations, and debris growth from collisions and anti-satellite
            tests are pushing catalogs toward the hundreds of thousands, with a
            million-object regime no longer theoretical.
          </P>

          <Callout>
            The physics of orbital mechanics does not change at that scale. The
            software does.
          </Callout>

          <Hr />

          {/* 1 */}
          <Section id="counting-pairs">
            <H2>The problem starts with counting pairs, not objects</H2>
            <P>
              Conjunction screening, asking &ldquo;which objects might come
              close to which other objects&rdquo; is at its core a pairwise
              problem. Compare every object to every other object, check the
              distance, flag the close ones.
            </P>
            <P>
              At 30,000 objects, that&apos;s roughly 450 million pairs.
              Expensive, but tractable with a nightly batch job.
            </P>
            <P>
              At 1 million objects, that&apos;s roughly 500 billion pairs. Run
              that same brute-force comparison and you&apos;re no longer talking
              about compute time in minutes. You&apos;re talking about a regime
              where the screening run takes longer than the orbital period of
              the objects it&apos;s screening. The algorithm doesn&apos;t just
              get slower. It stops being a real-time, or even a near-real-time,
              system.
            </P>
            <Callout>
              This is <C>O(N²)</C> complexity, and it is the single fact that
              reshapes every downstream design decision in a large-scale
              tracking system. You cannot brute-force your way to a
              million-object catalog. Everything below is, in one way or
              another, an answer to that constraint.
            </Callout>
          </Section>

          <Hr />

          {/* 2 */}
          <Section id="spatial-indexing">
            <H2>
              Spatial indexing: stop asking every object about every other
              object
            </H2>
            <P>
              The standard fix for <C>O(N²)</C> is to stop comparing objects
              that have no chance of being close to each other. That requires
              knowing, cheaply, which objects occupy which regions of space
              before doing any expensive distance math.
            </P>
            <P>
              This is where spatial indexing (octrees, k-d trees, grid-based
              binning, R-trees) earns its keep. The idea is uniform across all
              of them: partition space into cells or regions, bucket objects
              into those regions, and only run precise conjunction checks
              between objects that share a region or sit in adjacent ones. Done
              well, this turns 500 billion candidate pairs into a screening
              problem an order of magnitude smaller, or more.
            </P>
            <P>
              Orbital space complicates the standard version of this problem in
              one important way: nothing sits still. A k-d tree built for a
              static point cloud assumes the points don&apos;t move between
              queries. Orbital objects move at kilometers per second. A spatial
              index that&apos;s accurate at epoch is stale within seconds. That
              means the index itself has to be rebuilt or incrementally updated
              on a cadence fast enough to stay useful, and rebuilding a spatial
              index for a million moving objects, over and over, is its own
              performance problem layered on top of the one it&apos;s solving.
            </P>
            <P>
              Grid-based approaches, binning space into fixed cells, typically
              in an orbital-shell-aware frame rather than raw Cartesian ECI,
              often outperform tree structures in highly dynamic orbital
              catalogs, because rebuilding a grid is closer to <C>O(N)</C> than
              the <C>O(N log N)</C> rebalancing cost of a tree.
            </P>
          </Section>

          <Hr />

          {/* 3 */}
          <Section id="temporal-indexing">
            <H2>Temporal indexing: the part everyone underestimates</H2>
            <P>
              Spatial proximity alone doesn&apos;t tell you if two objects will
              collide. Two objects can occupy the same region of space and never
              be in danger, because they pass through it at different times.
              Conjunction risk is a joint condition over space and time, and
              most of the hard engineering lives in the &ldquo;and time&rdquo;
              half of that sentence.
            </P>
            <P>
              This means the index isn&apos;t just answering &ldquo;who&apos;s
              near whom right now.&rdquo; It&apos;s answering &ldquo;who&apos;s
              near whom, at any point, within this future window,&rdquo; which
              turns a spatial query into a spatiotemporal one. In practice, this
              means maintaining time-windowed indices alongside spatial ones:
              interval trees or time-binned structures that let you ask
              &ldquo;which objects have a predicted position in this region
              during this time slice&rdquo; without re-propagating and
              re-checking every object for every slice.
            </P>
            <P>
              The subtlety is that the temporal resolution you need isn&apos;t
              fixed. A close pass between two objects in a stable,
              well-characterized orbit might only need coarse time sampling. A
              high-relative-velocity encounter in a congested shell might need
              sub-second resolution to avoid missing the actual closest approach
              between sample points. A fixed time step is either wasteful for
              the easy cases or dangerously coarse for the hard ones, so a real
              system has to vary temporal resolution based on relative geometry,
              which means the temporal index has to support variable-resolution
              queries, not uniform ones.
            </P>
          </Section>

          <Hr />

          {/* 4 */}
          <Section id="propagation-windows">
            <H2>
              Propagation windows: you cannot afford to be precise about
              everything
            </H2>
            <P>
              Every object&apos;s future position comes from propagation:
              projecting its orbit forward in time using models like{' '}
              <C>SGP4/SDP4</C> for quick screening, or higher-fidelity numerical
              integrators for precision work. High-fidelity propagation is
              accurate. It is also expensive, and running it continuously for a
              million objects, indefinitely into the future, is not a
              computational budget any system has.
            </P>
            <P>
              The answer is tiered propagation, structured around windows rather
              than a single continuous simulation. A coarse, cheap propagation
              model screens the entire catalog over a wide time window to
              identify candidate close approaches. Only the objects that survive
              that first filter, a small fraction of the catalog, get promoted
              to expensive, high-fidelity propagation over a narrower window
              around the predicted approach time.
            </P>
            <Callout>
              This is the same coarse-to-fine pattern that shows up in spatial
              indexing, applied to time: cheap and wide first, expensive and
              narrow second.
            </Callout>
            <P>
              Get the window size wrong in either direction and the system fails
              in different ways. Too wide, and you&apos;re running expensive
              propagation on far more objects than necessary. Too narrow, and
              you miss encounters that fall outside your screening horizon, so
              the system reports a clean catalog because it never looked far
              enough ahead to see the risk.
            </P>
          </Section>

          <Hr />

          {/* 5 */}
          <Section id="memory-layout">
            <H2>
              Memory layout: the bottleneck nobody notices until it&apos;s the
              whole problem
            </H2>
            <P>
              At 30,000 objects, memory layout is an afterthought. At 1 million,
              it&apos;s frequently the actual bottleneck, not the propagation
              math, not the distance calculations, but how the bytes are
              arranged in memory.
            </P>
            <P>
              The default way to represent an object, a struct bundling
              position, velocity, epoch, covariance, and metadata together, is
              convenient to write but hostile to performance at scale. This
              array-of-structures (<C>AoS</C>) layout means that a bulk
              operation over just the position vectors of a million objects
              still drags the rest of each struct through the cache, wasting
              bandwidth on data the operation doesn&apos;t need.
            </P>
            <P>
              Structure-of-arrays (<C>SoA</C>) layout, separate contiguous
              arrays for x, y, z, vx, vy, vz, and so on, fixes this by keeping
              the data you actually operate on packed together in memory. For
              bulk operations like propagating a million objects&apos; positions
              forward, or computing a million pairwise distances, this isn&apos;t
              a minor optimization. It&apos;s frequently the difference between
              an operation that&apos;s cache-bound and one that&apos;s
              compute-bound, which at this scale can mean a multiple-times
              difference in throughput before a single algorithmic change is
              made.
            </P>
            <P>
              This matters more, not less, as compute gets thrown at the
              problem, because the next lever, GPU acceleration, only pays off
              if the memory layout feeding it is already right.
            </P>
          </Section>

          <Hr />

          {/* 6 */}
          <Section id="gpu-vs-cpu">
            <H2>
              GPU vs CPU: parallelism helps exactly where the workload is
              uniform
            </H2>
            <P>
              Not every part of a tracking pipeline benefits equally from GPU
              acceleration, and treating &ldquo;put it on the GPU&rdquo; as a
              universal answer is a common and expensive mistake.
            </P>
            <P>
              Bulk propagation and pairwise distance calculation are close to
              ideal GPU workloads: the same operation, applied independently to
              millions of data points, with minimal branching. This is exactly
              the kind of embarrassingly parallel work GPUs are built for, and
              moving it off the CPU can produce order-of-magnitude speedups.
            </P>
            <P>
              Spatial index traversal and conjunction logic are a different
              story. Traversing a tree, deciding which branch to follow based on
              data-dependent conditions, handling irregular candidate sets that
              vary wildly in size from object to object: this is branch-heavy,
              irregular-access work, and GPUs are comparatively bad at it.
              Forcing tree traversal onto a GPU often means fighting the
              hardware&apos;s architecture more than benefiting from it, and the
              overhead of transferring irregular data structures between host
              and device memory can erase any parallelism gains.
            </P>
            <P>
              The practical solution is a hybrid pipeline: CPU handles spatial
              indexing, temporal windowing, and the branching logic of
              screening; GPU handles the bulk numerical work (propagation,
              distance computation, covariance transformation) once the CPU
              side has already narrowed the problem down. Getting the boundary
              between those two right, and minimizing the data transfer across
              it, matters more than which processor is theoretically faster at
              either task in isolation.
            </P>
            <Callout>
              Even after optimizing algorithms, memory layout, and hardware
              acceleration, another limit eventually appears: a single machine
              is no longer enough.
            </Callout>
          </Section>

          <Hr />

          {/* 7 — transition */}
          <Section id="systems-scaling">
            <H2>A shift from algorithmic scaling to systems scaling</H2>
            <P>
              Everything so far assumes a single machine, with a single memory
              space, doing the indexing and the math. At 1 million objects, with
              propagation, indexing, and screening all running concurrently,
              that assumption eventually breaks. The working set doesn&apos;t
              fit comfortably in one machine&apos;s memory and compute budget at
              the update rates operations actually require.
            </P>
          </Section>

          <Hr />

          {/* 8 */}
          <Section id="partitioning">
            <H2>
              Partitioning and distributed execution: one machine stops being
              enough
            </H2>
            <P>
              The fix looks like the spatial partitioning described earlier, but
              one level up: split the catalog across machines, typically along
              the same spatial or orbital-shell boundaries used for indexing, so
              each node owns a region of space rather than an arbitrary slice of
              the catalog. That keeps most conjunction checks local to a node,
              since most close approaches happen between objects in similar
              orbital regimes.
            </P>
            <P>
              The catch is the boundary. Objects near the edge of one node&apos;s
              partition can still conjunct with objects just across the line in
              a neighboring node&apos;s partition, and a naive split will miss
              those pairs entirely. The standard fix is a halo region:
              overlapping each partition slightly into its neighbors so boundary
              objects get checked on both sides. That overlap costs memory and
              cross-node network traffic, and sizing it is a real trade-off. Too
              small and you miss legitimate conjunctions at partition edges. Too
              large and you&apos;re duplicating work across the whole cluster.
            </P>
            <Callout>
              Distributed execution isn&apos;t just about splitting the
              workload. It&apos;s about splitting it without losing interactions
              that cross machine boundaries.
            </Callout>
          </Section>

          <Hr />

          {/* 9 */}
          <Section id="fault-tolerance">
            <H2>Fault tolerance: something is always failing</H2>
            <P>
              At cluster scale, a node dying mid-run isn&apos;t an edge case.
              It&apos;s a scheduling assumption. With enough machines running
              long enough, node failures, network partitions, and slow
              stragglers happen on a normal operating cadence, not as rare
              incidents.
            </P>
            <P>
              A system built like a single batch job, one that either completes
              cleanly or fails and restarts from scratch, doesn&apos;t survive
              that environment.
            </P>
            <P>
              The failure of one partition shouldn&apos;t take down the
              screening run for the rest of the catalog, and a restart
              shouldn&apos;t mean re-propagating a million objects from the
              beginning. That pushes the design toward checkpointing propagated
              state at intervals fine enough to resume cheaply, and toward
              partition-level fault isolation, where one node&apos;s failure
              degrades coverage in a single region temporarily rather than
              halting the entire pipeline.
            </P>
          </Section>

          <Hr />

          {/* 10 */}
          <Section id="streaming-updates">
            <H2>Streaming updates: the catalog is never actually finished</H2>
            <P>
              Everything I described so far can sound like a batch process:
              propagate, index, screen, repeat on a schedule. In practice, the
              inputs never stop moving. New observations arrive continuously.
              Orbit determinations get refined. Objects maneuver. Debris events
              add hundreds of new tracked pieces without warning.
            </P>
            <P>
              A system that only updates on a fixed batch cycle is, by
              construction, working from a catalog that&apos;s already stale by
              the time the results are usable. The alternative is treating
              updates as a stream rather than a periodic reload: when a new
              observation arrives, only that object&apos;s index entry and
              propagated trajectory need updating, not the entire catalog. That
              keeps the spatial and temporal indices described earlier as living
              structures that absorb small, constant updates, rather than static
              snapshots rebuilt from zero on every cycle. It&apos;s the same
              coarse-to-fine instinct from propagation windows, applied to data
              ingestion: update what changed, leave the rest alone.
            </P>
          </Section>

          <Hr />

          {/* 11 */}
          <Section id="conclusion">
            <H2>
              Scale doesn&apos;t just make the problem bigger. It changes what
              the problem is.
            </H2>
            <P>
              None of this changes the underlying physics of orbital mechanics.
              A conjunction at 1 million objects is governed by the same
              dynamics as a conjunction at 30,000. What changes is whether a
              system can find that conjunction in time for it to matter, on
              hardware that will partially fail while it&apos;s looking, fed by
              data that never stops arriving.
            </P>
            <P>
              That&apos;s the part of space situational awareness that
              doesn&apos;t show up in a mission brief: the quiet architecture of
              indices, windows, partitions, and memory layouts that determines
              whether &ldquo;we&apos;re tracking a million objects&rdquo; means
              a real operational capability, or a batch job that finishes after
              the encounter it was supposed to predict.
            </P>
            <Callout>
              The hardest problems in space traffic are increasingly software
              problems. Orbital mechanics was mostly solved decades ago. The
              question now is whether the systems built on top of it can keep up
              with how much space there now is to watch.
            </Callout>
          </Section>

          {/* ── Post footer ── */}
          <motion.footer
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-1 uppercase tracking-widest">
                Written by
              </p>
              <p className="text-sm font-semibold text-white">Piyush Verma</p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Product Engineer · building DRAKON
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 border border-white/10 px-4 py-2 rounded hover:border-green-400/40 hover:text-green-400 transition-all duration-200 group"
            >
              <ArrowLeft
                size={11}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              All posts
            </Link>
          </motion.footer>
           {/* Next post */}
           <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Link to="/blog/orbital-systems-temporal">
              <div className="group border border-white/10 hover:border-cyan-400/25 hover:bg-cyan-400/3 rounded-lg p-5 transition-all duration-300">
                <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mb-2">
                  Next post
                </p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
                  Why Orbital Systems Are Fundamentally Temporal Systems
                  </p>
                <ChevronRight
                  size={18}
                  className="flex-shrink-0 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default MillionObjectsTrackingPost;
