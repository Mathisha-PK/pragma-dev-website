export default function RibbonBackground() {
  const lines = Array.from({ length: 14 });

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Highlighted red line */}
      <path
        d="M1100,0 C30,80 50,250 900,400 S350,6 100,780"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.5"
        opacity="0.5"
      />
    </svg>
  );
}
