export default function RibbonBackground() {
  const lines = Array.from({ length: 14 });

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map((_, i) => {
        const yOffset = i * 20;
        return (
          <path
            key={i}
            d={`M0,${10 + yOffset} 
                C 150,${20 + yOffset} 250,${180 + yOffset} 400,${100 + yOffset} 
                S 650,${20 + yOffset} 800,${100 + yOffset}`}
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            opacity="0.3"
          />
        );
      })}

      {/* Highlighted red line */}
      <path
        d="M0,60 C180,140 280,10 420,90 S660,160 800,50"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.5"
      />
      
    </svg>
  );
}
