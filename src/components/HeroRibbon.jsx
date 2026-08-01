import { useEffect, useRef } from "react";

export default function HeroRibbon() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = null;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Small offset — max ~14px drift, keeps it subtle
        el.style.transform = `translate(${x * 14}px, ${y * 10}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="hero-ribbon pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ribbonRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonBlue" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b5fd9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b5fd9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Red ribbon */}
        <path
          fill="none"
          stroke="url(#ribbonRed)"
          strokeWidth="120"
          strokeLinecap="round"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
            values="
              M -100,600 C 300,500 500,750 1300,550;
              M -100,550 C 350,700 550,450 1300,650;
              M -100,650 C 300,450 600,700 1300,500;
              M -100,600 C 300,500 500,750 1300,550
            "
          />
        </path>

        {/* Blue ribbon */}
        <path
          fill="none"
          stroke="url(#ribbonBlue)"
          strokeWidth="90"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
            values="
              M -100,150 C 400,300 700,50 1300,250;
              M -100,250 C 450,50 650,300 1300,100;
              M -100,180 C 400,320 700,80 1300,220;
              M -100,150 C 400,300 700,50 1300,250
            "
          />
        </path>
      </svg>
    </div>
  );
}
