/*
 * CurrentLine
 * A thin neon "wire" with bright packets of current running along it.
 * Drop it inside any `relative`/`absolute` parent; it pins itself to the top edge.
 *
 * Props
 *  direction : 'rtl' (right -> left, default) | 'ltr' (left -> right)
 *  period    : px between packets (one gradient tile)
 *  speed     : px per second
 *  thickness : px
 */

const WIRE =
  'linear-gradient(90deg, rgba(34,197,94,0.45), rgba(34,211,238,0.45))';

// The head (white) is at the END of the gradient, so the direction keyword decides
// which way it points: 'to right' = head leads going right, 'to left' = head leads going left.
const packet = (dir) =>
  `linear-gradient(${dir}, rgba(74,222,128,0) 0%, rgba(74,222,128,0) 56%, rgba(74,222,128,0.6) 78%, #22d3ee 93%, #ffffff 98%, rgba(255,255,255,0) 100%)`;

const Layer = ({ period, speed, rtl, bloom = false }) => (
  <div
    className="absolute inset-0"
    style={
      bloom ? { filter: 'blur(4px) brightness(1.4)', opacity: 0.95 } : undefined
    }
  >
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: WIRE }} />
      <div
        className={`cl-flow ${rtl ? 'cl-flow-rtl' : 'cl-flow-ltr'} absolute inset-y-0 left-0`}
        style={{
          width: `calc(100% + ${period}px)`,
          '--period': `${period}px`,
          backgroundImage: packet(rtl ? 'to left' : 'to right'),
          backgroundSize: `${period}px 100%`,
          animationDuration: `${period / speed}s`,
        }}
      />
    </div>
  </div>
);

const CurrentLine = ({
  direction = 'rtl',
  period = 480,
  speed = 180,
  thickness = 1,
}) => {
  const rtl = direction === 'rtl';

  return (
    <>
      <style>{`
        @keyframes cl-flow-rtl {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(var(--period) * -1), 0, 0); }
        }
        @keyframes cl-flow-ltr {
          from { transform: translate3d(calc(var(--period) * -1), 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .cl-flow {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .cl-flow-rtl { animation-name: cl-flow-rtl; }
        .cl-flow-ltr { animation-name: cl-flow-ltr; }
        @media (prefers-reduced-motion: reduce) {
          .cl-flow { display: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{ height: thickness }}
      >
        <Layer period={period} speed={speed} rtl={rtl} bloom />
        <Layer period={period} speed={speed} rtl={rtl} />
      </div>
    </>
  );
};

export default CurrentLine;
