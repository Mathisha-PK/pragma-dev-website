import { useState } from "react";

export default function ServiceCard({ service }) {
  const [activeTag, setActiveTag] = useState(null);

  return (
    <div className="group rounded-xl border border-navy-700 bg-navy-800 p-6 transition-all duration-200 hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-white">
          {service.name}
        </h3>

        <img
          className="ml-auto block h-10 w-10 object-contain"
          src={service.image}
          alt={service.name}
        />
      </div>

      <p className="mt-2 text-sm text-slate-400">{service.tagline}</p>


      <div className="mt-5 flex flex-wrap gap-2">
        {service.stack.map((tech) => (
          <div key={tech.name} className="relative">
            <span
              onClick={() =>
                setActiveTag(activeTag === tech.name ? null : tech.name)
              }
              className="cursor-pointer rounded-full border border-navy-700 px-2.5 py-1 font-mono text-[11px] text-slate-400 group-hover:border-brand-red/40"
            >
              {tech.name}
            </span>

            {activeTag === tech.name && (
              <div className="absolute bottom-full left-1/2 z-20 mb-2 w-48 -translate-x-1/2 rounded-lg border border-navy-700 bg-navy-900 p-3 text-xs text-slate-300 shadow-lg">
                {tech.description}
                <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-navy-700 bg-navy-900" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}