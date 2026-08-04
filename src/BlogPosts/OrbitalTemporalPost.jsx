import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from 'lucide-react';

// ─── Table of contents ─────────────────────────────────────────────────────────
const sections = [
  { id: 'misconception', label: 'The Misconception' },
  { id: 'snapshots', label: 'Problem With Snapshots' },
  { id: 'first-class', label: 'Time as First-Class' },
  { id: 'hidden', label: 'Hidden Engineering Problems' },
  { id: 'uncertainty', label: 'Uncertainty Is Temporal' },
  { id: 'decisions', label: 'Human Decision-Making' },
  { id: 'lessons', label: 'Lessons From DRAKON' },
  { id: 'conclusion', label: 'What This Actually Means' },
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

// ─── Numbered problem card ─────────────────────────────────────────────────────
const ProblemCard = ({ number, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45 }}
    className="group flex gap-5 mb-8"
  >
    <div className="flex-shrink-0 mt-0.5">
      <div className="w-8 h-8 border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold group-hover:border-cyan-400/60 transition-colors rounded">
        {String(number).padStart(2, '0')}
      </div>
    </div>
    <div className="flex-1 pb-8 border-b border-white/5">
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
        {children}
      </p>
    </div>
  </motion.div>
);

// ─── Two-column compare ────────────────────────────────────────────────────────
const Compare = ({ left, right }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="my-8 grid sm:grid-cols-2 gap-4"
  >
    <div className="border border-cyan-400/25 bg-cyan-400/5 rounded-lg p-5">
      <p className="text-[11px] font-mono text-red-400 uppercase tracking-widest mb-3">
        Time as a parameter ✗
      </p>
      <p className="text-sm text-gray-400 leading-relaxed">{left}</p>
    </div>
    <div className="border border-cyan-400/25 bg-cyan-400/5 rounded-lg p-5">
      <p className="text-[11px] font-mono text-cyan-400/60 uppercase tracking-widest mb-3">
        Time as first-class ✓
      </p>
      <p className="text-sm text-gray-300 leading-relaxed">{right}</p>
    </div>
  </motion.div>
);

// ─── Terminal code window ──────────────────────────────────────────────────────
const Terminal = ({ caption, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="my-8 border border-white/10 bg-black/60 rounded-lg overflow-hidden"
  >
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/2">
      {caption && (
        <span className="ml-2 text-[10px] font-mono text-gray-600">
          {caption}
        </span>
      )}
    </div>
    <div className="p-5 font-mono text-sm text-gray-300 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

// ─── Main component ────────────────────────────────────────────────────────────
const OrbitalTemporalPost = () => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title =
      'Why Orbital Systems Are Fundamentally Temporal Systems | dev_log';
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
            {['Orbital Mechanics', 'Architecture', 'DRAKON'].map((t) => (
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
            Why Orbital Systems Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Fundamentally Temporal
            </span>{' '}
            Systems
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 text-[12px] font-mono text-gray-600"
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={10} />
              04 Jun 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={10} />8 min read
            </span>
            <span>·</span>
            <span className="text-green-400/50">Piyush Verma</span>
          </motion.div>
        </div>
      </header>

      {/* ── Article ─────────────────────────────────────────────────────────── */}
      {/* ── Article ─────────────────────────────────────────────────────────── */}
      <article className="relative z-10 px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <P lead>
            Most software systems are built around state. Orbital systems are
            built around evolution. That distinction sounds abstract until you
            spend several months trying to build tools for satellite operators
            and keep discovering that nearly every engineering decision you
            thought was solved by modelling{' '}
            <em className="text-gray-300">&ldquo;where things are&rdquo;</em>{' '}
            was actually wrong because you forgot to model{' '}
            <em className="text-gray-300">&ldquo;when.&rdquo;</em>
          </P>

          <P>
            The naive version of orbital software isn&apos;t hard to build: pull
            TLE data, compute positions, render a globe. You have a real-time
            visualisation. Operators can see their assets. Ship it.
          </P>

          <Callout>The naive version breaks quickly.</Callout>

          <Hr />

          {/* 1 */}
          <Section id="misconception">
            <H2>The Misconception</H2>
            <P>
              In a CRM, a customer record <em>exists</em>. It contains a name,
              status, renewal date, and other facts you write down and
              occasionally change. The record sits there between interactions.
              State dominates; time is just a timestamp column.
            </P>
            <P>
              Orbital systems don&apos;t work like that. Position changes
              continuously. Velocity changes continuously. Orbital geometry
              changes continuously. Uncertainty grows continuously. There is no
              &ldquo;current state&rdquo; that stays valid long enough to be
              useful for decisions. You compute a satellite&apos;s position, and
              by the time you&apos;ve rendered it on screen, it&apos;s already
              somewhere slightly different.
            </P>
            <Callout>
              The physics doesn&apos;t care about your data model.
            </Callout>
            <P>
              What actually exists in an orbital system is a set of{' '}
              <em className="text-gray-300">trajectories</em>:
              time-parameterised functions <C>r(t)</C> and <C>v(t)</C> that
              describe where objects are for every possible <C>t</C>. The
              &ldquo;state&rdquo; stored in a TLE is just a compact encoding of
              a trajectory from which positions at any epoch can be re-derived.
              What you render at <C>T=0</C> is one instantiation. <C>T+24h</C>{' '}
              is another. Neither is more &ldquo;real&rdquo; than the other.
            </P>
            <P>
              This matters because the decisions operators need to make are
              almost never about <em>now</em>.
            </P>
          </Section>

          <Hr />

          {/* 2 */}
          <Section id="snapshots">
            <H2>The Problem With Snapshots</H2>
            <P>
              Conjunction screening asks: will two objects come within dangerous
              proximity? Not{' '}
              <em className="text-gray-300">are they close now</em> but{' '}
              <em className="text-gray-300">will they be, and when?</em> Time of
              Closest Approach might be 18 hours away. A planned manoeuvre burn
              needs to account for whether moving the satellite away from that
              conjunction creates a new one with a different object. Launch
              windows depend on orbital geometry at insertion time. Re-entry
              prediction is, by definition, a statement about the future.
            </P>
            <P>
              <strong className="text-white font-semibold">
                Current position is largely irrelevant to all of these.
              </strong>
            </P>
            <P>
              When I built re-entry risk screening for DRAKON, I ran straight
              into this. <C>BSTAR</C> (a drag coefficient encoded in TLEs) tells
              you how quickly an object is currently losing altitude. From that,
              you compute a decay rate. From the decay rate, you estimate a
              lifetime. The entire output is a future statement derived from a
              current measurement. The &ldquo;state&rdquo; is simply a
              compressed representation of a trajectory.
            </P>
            <P>
              Collision density has the same problem. A voxel-based density map
              shows where objects cluster <em>right now</em>. But operational
              density is about encounter frequency over time: how often
              trajectories pass through the same region. Static crowding and
              dynamic encounter probability can diverge significantly. A busy
              corridor in terms of current positions can have low actual
              encounter risk if all the objects share similar orbits and move in
              the same direction. The snapshot misleads.
            </P>
            <Callout>
              &ldquo;Time of closest approach&rdquo; is how the entire
              profession of space traffic management is organised. The snapshot
              is where you start. It is not where you stop.
            </Callout>
          </Section>

          <Hr />

          {/* 3 */}
          <Section id="first-class">
            <H2>Time Is a First-Class Variable</H2>
            <P>
              There&apos;s a difference between treating time as a parameter and
              treating it as a first-class object.
            </P>
            <Compare
              left={
                <>
                  Time is an input you plug in. <C>getPosition(satellite, t)</C>
                  . You pick a <C>t</C>, you get a position. Everything else in
                  the codebase is still built around spatial concepts.
                </>
              }
              right={
                <>
                  Your data structures, query patterns, state management, and
                  rendering pipeline all carry temporal semantics. A satellite
                  isn&apos;t a point in space; it&apos;s a trajectory. A
                  conjunction risk isn&apos;t a distance; it&apos;s a distance
                  plus a covariance ellipsoid plus remaining decision time
                  before the manoeuvre window closes.
                </>
              }
            />
            <P>
              When you make that shift, a lot of previously puzzling engineering
              problems start making sense.
            </P>
          </Section>

          <Hr />

          {/* 4 */}
          <Section id="hidden">
            <H2>The Hidden Engineering Problems</H2>
            <P>
              Building DRAKON&apos;s simulation mode, where users can scrub
              forward to <C>T+72h</C> and see the projected state of the entire
              orbital environment, looked like an additive feature. Add an
              offset, re-propagate, render. It turned out to be architecturally
              invasive in ways I didn&apos;t anticipate.
            </P>
            <div className="mt-8">
              <ProblemCard number={1} title="Temporal consistency">
                When propagating 20,000+ satellites, every object must be
                evaluated at the same epoch. A 500ms spread across the batch
                creates positions that are inconsistent with each other. In LEO,
                satellites move at roughly <C>7.8 km/s</C>, so half a second is
                nearly <C>4 km</C> of position error. The entire batch has to be
                stamped with the same target epoch before propagation starts.
              </ProblemCard>
              <ProblemCard number={2} title="Stale state propagating upward">
                A satellite selected in simulation mode at <C>T+24h</C> cannot
                use <C>T+0</C> metadata for its detail panel. Ground track
                rendering has to use the simulated epoch as its reference, not
                wall clock time. Collision density computation has to use
                projected positions. Nearly every feature that touched satellite
                data had to become epoch-aware. That wasn&apos;t a scope
                addition. It was a consequence of the architecture not treating
                time as first-class from the start.
              </ProblemCard>
              <ProblemCard number={3} title="Ground tracks aren't geometry">
                They <em>look</em> like geometry, just paths drawn on a map. But
                the past portion is a historical record and the future portion
                is a prediction. Both are functions of time encoded spatially.
                When the simulation offset changes, the entire track has to be
                regenerated because what counts as &ldquo;past&rdquo; and
                &ldquo;future&rdquo; shifts relative to the new reference epoch.
                Getting that wrong produces tracks that show future positions in
                past-track styling, which is subtly broken in ways that are hard
                to debug.
              </ProblemCard>
              <ProblemCard
                number={4}
                title="Density as encounter probability, not crowding"
              >
                The first version counted satellite density in grid cells: a
                purely spatial aggregation. Two Starlink satellites in the same
                cell, moving in the same direction at nearly identical
                velocities, showed up as high density even though their actual
                encounter probability was essentially zero. The fix was
                filtering on relative velocity, not just proximity. That
                required introducing time derivatives into what had started as a
                purely spatial computation.
              </ProblemCard>
            </div>
          </Section>

          <Hr />

          {/* 5 */}
          <Section id="uncertainty">
            <H2>Why Uncertainty Is Also Temporal</H2>
            <P>
              Most people initially frame orbital uncertainty as a spatial
              problem: the position is uncertain by some radius, the covariance
              ellipsoid has some shape. You visualise it as a sphere around the
              current location and move on.
            </P>
            <P>
              That framing misses something important. Prediction uncertainty{' '}
              <em>grows with time</em>. A conjunction 6 hours out has tighter
              position bounds than one 48 hours out. The covariance matrix
              propagates forward using the same orbital mechanics as the state.
              As the prediction horizon extends, it expands, often
              anisotropically.
            </P>
            <Terminal caption="collision-risk.txt">
              <div className="space-y-1 text-gray-400">
                <div className="text-gray-600">
                  {'// same separation, very different risk'}
                </div>
                <div className="mt-3">
                  Sat-A vs Sat-B &nbsp;|&nbsp; sep:{' '}
                  <span className="text-white">200 km</span> &nbsp;|&nbsp; TCA:{' '}
                  <span className="text-red-400">T+48h</span>
                </div>
                <div className="text-gray-600 text-xs ml-2">
                  {'→ covariance ellipsoids '}
                  <span className="text-red-400">overlap significantly</span>
                </div>
                <div className="mt-2">
                  Sat-C vs Sat-D &nbsp;|&nbsp; sep:{' '}
                  <span className="text-white">50 km</span> &nbsp;&nbsp;|&nbsp;
                  TCA: <span className="text-green-400">T+6h</span>
                </div>
                <div className="text-gray-600 text-xs ml-2">
                  {'→ covariance ellipsoids '}
                  <span className="text-green-400">barely overlap</span>
                </div>
              </div>
            </Terminal>
            <Callout>
              Risk is a function of time in at least two ways: the physical
              geometry changes, and confidence in that geometry changes. Systems
              that display &ldquo;P(collision) = 0.0003&rdquo; are collapsing a
              time-varying quantity into a single number. That destroys
              information operators need.
            </Callout>
            <P>
              What they actually need to know: how does the risk estimate evolve
              as TCA approaches? Are new TLE updates shifting it up or down? If
              they wait 12 hours for better tracking data, does that help, or
              does the manoeuvre window close? Those are all temporal questions,
              and a system that answers only the static version of each is only
              partly useful.
            </P>
          </Section>

          <Hr />

          {/* 6 */}
          <Section id="decisions">
            <H2>Human Decision-Making Is Temporal Too</H2>
            <P>
              Operators don&apos;t just care about what the risk is. They care
              about how long they have.
            </P>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="my-8 grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  label: 'Act now',
                  labelColor: 'text-red-400/70',
                  borderColor: 'border-red-400/20',
                  bg: 'bg-red-950/20',
                  rows: [
                    {
                      key: 'P(collision)',
                      val: '1 / 50,000',
                      valClass: 'text-white',
                    },
                    { key: 'TCA', val: 'T+9h', valClass: 'text-red-400' },
                    {
                      key: 'Manoeuvre prep',
                      val: '6h',
                      valClass: 'text-white',
                    },
                    {
                      key: 'Last burn window',
                      val: 'T+3h',
                      valClass: 'text-red-400',
                    },
                  ],
                  verdict: '→ 3h to decide. Low probability, no time.',
                  verdictClass: 'text-red-400',
                },
                {
                  label: 'Watch and wait',
                  labelColor: 'text-green-400/70',
                  borderColor: 'border-green-400/20',
                  bg: 'bg-green-950/20',
                  rows: [
                    {
                      key: 'P(collision)',
                      val: '1 / 800',
                      valClass: 'text-white',
                    },
                    { key: 'TCA', val: 'T+54h', valClass: 'text-green-400' },
                    {
                      key: 'Manoeuvre prep',
                      val: '6h',
                      valClass: 'text-white',
                    },
                    {
                      key: 'Last burn window',
                      val: 'T+48h',
                      valClass: 'text-green-400',
                    },
                  ],
                  verdict:
                    '→ 48h to decide. Higher risk, but time to get better data.',
                  verdictClass: 'text-green-400',
                },
              ].map(
                ({
                  label,
                  labelColor,
                  borderColor,
                  bg,
                  rows,
                  verdict,
                  verdictClass,
                }) => (
                  <div
                    key={label}
                    className={`border ${borderColor} ${bg} rounded-lg p-5`}
                  >
                    <p
                      className={`text-[11px] uppercase tracking-widest mb-4 ${labelColor}`}
                    >
                      {label}
                    </p>
                    <div className="space-y-1.5 font-mono text-sm text-gray-400">
                      {rows.map(({ key, val, valClass }) => (
                        <div key={key}>
                          {key} = <span className={valClass}>{val}</span>
                        </div>
                      ))}
                      <div
                        className={`mt-3 text-xs leading-snug ${verdictClass}`}
                      >
                        {verdict}
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
            <P>
              The lower-probability event demands immediate action. The
              higher-probability one can wait. A system that ranks by
              P(collision) alone and ignores decision time will consistently
              surface the wrong priority.
            </P>
            <P>
              This is where orbital software gets genuinely hard to design well:
              not at the physics layer, but at the information design layer.
              Operators are making irreversible decisions under time pressure,
              with uncertain data, about events that haven&apos;t happened yet.
              The software needs to communicate not just state, but the{' '}
              <em className="text-gray-200">trajectory of state</em>: how
              estimates evolve, when windows close, what happens if you wait.
            </P>
            <Callout>
              Building that kind of interface requires thinking temporally at
              the product level, not just the computation level.
            </Callout>
          </Section>

          <Hr />

          {/* 7 */}
          <Section id="lessons">
            <H2>Lessons From Building DRAKON</H2>
            <P>
              The simulation mode taught me the most. I started building it as
              an overlay: keep the existing architecture, add a time offset,
              show projected positions. That lasted about two days before the
              problems compounded: selected satellite metadata didn&apos;t
              update with the simulated epoch, ground tracks were computing
              relative to wall clock time instead of the offset, the density map
              was showing current positions while the globe was showing future
              ones.
            </P>
            <P>
              The real fix wasn&apos;t patching each component. It was threading
              epoch as an explicit, first-class value through the state
              management layer. Everything that reads satellite data needs to
              know what &ldquo;now&rdquo; means in the current session, whether
              it&apos;s wall clock time or <C>T+offset</C>. Once that was in
              Redux as a single source of truth, the individual component fixes
              became straightforward.
            </P>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="my-8 bg-slate-800/40 border border-white/5 rounded-xl p-6"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Static snapshots break faster than you expect. Features that
                seem complete against static data reveal time-related
                assumptions the moment simulation is turned on. If you&apos;re
                building orbital tooling,{' '}
                <strong className="text-white">
                  test every feature at <C>T=0</C> and at <C>T+24h</C> before
                  calling it done.
                </strong>{' '}
                You&apos;ll find things.
              </p>
            </motion.div>
          </Section>

          <Hr />

          {/* 8 */}
          <Section id="conclusion">
            <H2>What This Actually Means</H2>
            <P>
              The hard part of orbital software is rarely the propagation math.
              SGP4 is well documented, portable, and there are good libraries
              for it. The hard part is building systems where every layer of the
              stack, from the data model and state management to rendering and
              the interface, understands that the thing it&apos;s operating on
              is a <em className="text-gray-200">trajectory</em>, not a point.
            </P>
            <P>
              If you treat time as a parameter you pass to an existing spatial
              system, you&apos;ll keep running into walls: stale metadata,
              inconsistent positions, ground tracks that drift, risk numbers
              that don&apos;t mean what they seem to. If you treat time as a
              first-class variable from the beginning, a lot of those problems
              either don&apos;t appear or become manageable.
            </P>
            <Callout>
              Space is dynamic by default. The software either reflects that, or
              it lies.
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
            <Link to="/blog/tracking-million-space-objects">
              <div className="group border border-white/10 hover:border-cyan-400/25 hover:bg-cyan-400/3 rounded-lg p-5 transition-all duration-300">
                <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mb-2">
                  Next post
                </p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
                  The Hidden Software Challenges of Tracking 1 Million Space Objects
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

export default OrbitalTemporalPost;
