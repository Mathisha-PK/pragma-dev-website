export default function PricingCard({ plan }) {
  const { icon, name, tagline, features, highlighted, price, price2 } = plan

  const cardClasses = highlighted
    ? 'relative flex flex-col rounded-2xl border border-white/20 bg-white/[0.06] p-8'
    : 'relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8'

  const buttonClasses = highlighted
    ? 'mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90'
    : 'mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10'

  return (
    <div className={cardClasses}>
      {highlighted && (
        <span className="eyebrow absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs text-black">
          Most popular
        </span>
      )}

<div className="flex items-center justify-between">
  <span className="text-3xl">{icon}</span>
  <div className="text-right">
    <p className="text-lg font-semibold text-white">
      <span className="eyebrow font-thin text-xs">Setup fee </span>
      {price}
    </p>
    <p className="text-sm text-white/50">
      <span className="eyebrow font-thin text-xs">Monthly </span>
      {price2}/mo
    </p>
  </div>
</div>
      <h2 className="mt-4 font-display text-2xl font-semibold">{name}</h2>
      <p className="mt-2 text-sm text-white/60">{tagline}</p>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-white/80">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-0.2 text-white/40">
              &rarr;
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a href="/contact" className={buttonClasses}>
        Get started
      </a>
    </div>
  )
}