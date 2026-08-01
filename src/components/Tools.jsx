import { Link } from "react-router-dom";

export default function HomeServiceCards({ Tools }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="inline-flex rounded-lg border border-navy-700 p-3">
        <img
          src={Tools.image}
          alt={Tools.name}
          className="h-10 w-10 object-contain"
        />
      </div>
      <p className="text-center text-sm text-slate-300">{Tools.name}</p>
    </div>
  );
}