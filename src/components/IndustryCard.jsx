export default function IndustryCard({ industry }) {
  return (
    <div className="rounded-2xl border border-navy-700 p-8 transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue-light/20">
      <h3 className="text-xl font-semibold">{industry.name}</h3>
      <p className="mt-3 text-sm text-slate-400">{industry.desc}</p>
    </div>
  );
}
