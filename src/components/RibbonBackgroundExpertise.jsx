export default function RibbonBackgroundExpertise() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Single red strand - low, wide arc drifting through the section */}
      <path
        d="M-40,320 C160,220 260,340 420,240 S620,120 840,180"
        fill="none"
        stroke="#ef4444"
        strokeWidth="4"
      />
    </svg>
  );
}
