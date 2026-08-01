import industries from "../data/industries.json";
import IndustryCard from "./IndustryCard.jsx";
import RibbonBackgroundExpertise from "./RibbonBackgroundExpertise.jsx";

export default function ExpertiseSection() {
  return (
    <section className="section-dark border-t border-navy-700 py-24 relative">
      <RibbonBackgroundExpertise />
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="ml-auto max-w-2xl text-right">
          <p className="eyebrow">Our expertise</p>
          <h2 className="mt-2 text-3xl font-semibold">
            Industries we work with
          </h2>
          <p className="mt-4 text-slate-400">
            We've built for teams across a range of industries — bringing the
            same rigor no matter the domain.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}