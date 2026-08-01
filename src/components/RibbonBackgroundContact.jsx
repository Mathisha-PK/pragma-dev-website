export default function RibbonBackgroundFull() {
  const lines = Array.from({ length: 16 });

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Converging strands - rise from bottom-left toward a single point, top-right */}
      {lines.map((_, i) => {
        const startY = 400 - i * 24;
        const midY = 220 - i * 6;
        return (
          <path
            key={i}
            d={`M-40,${startY}
                C 200,${midY} 420,${midY - 60} 620,${140 - i * 3}
                S 780,${40 - i * 2} 840,${10}`}
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            opacity="0.22"
          />
        );
      })}

      {/* Signature red strand - sweeps low, then breaks upward through the weave */}
      <path
        d="M-40,340 C160,260 300,300 420,180 S620,40 840,60"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.5"
        opacity="0.9"
      />

      {/* Secondary faint red echo for depth */}
      <path
        d="M-40,300 C180,230 320,260 440,150 S640,10 840,30"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}
