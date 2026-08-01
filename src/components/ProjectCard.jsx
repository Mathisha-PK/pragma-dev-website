export default function ProjectCard({ project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-navy-700 bg-navy-800"
    >
      <div className="aspect-[4/3] overflow-hidden bg-navy-700">
        <img
          src={project.image}
          alt={project.client}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="eyebrow">{project.category}</span>
        <h3 className="mt-2 font-display text-lg font-semibold text-white">{project.client}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-blue-light">
          View live site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </a>
  )
}
