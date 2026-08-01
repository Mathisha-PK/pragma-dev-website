import { Link } from "react-router-dom";
export default function HomeServiceCards({ HomeService }) {
  return (
    <div className="group rounded-xl border border-navy-700 bg-navy-800 p-6 transition-all duration-200 hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20">
      <h3 className="mt-2 font-display text-center text-lg font-semibold text-white">
        {HomeService.name}
      </h3>

      <img
        className="mx-auto block h-20 w-20 object-contain"
        src={HomeService.image}
        alt={HomeService.name}
      />

      <p className="mt-4 text-center leading-relaxed text-slate-400">
        {HomeService.description}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        <Link to="/services" className="btn-ghost">
          Learn more
        </Link>
      </div>

    </div>
  );
}
