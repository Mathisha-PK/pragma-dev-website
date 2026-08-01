import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pricing from "../data/pricing.json";
import PricingCard from "../components/Pricingcard.jsx";
import RibbonBackgroundPricing from "../components/RibbonBackgroundPricing.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const viewportOnce = { once: true, amount: 0.3 };

const importantNotes = [
  {
    label: "Payment Terms",
    text: "50% upfront to begin, with the remaining 50% due before final delivery and handover.",
  },
  {
    label: "Add-ons & Customization",
    text: "Additional features can be added at an extra cost. Removing features may reduce the package price.",
  },
  {
    label: "Domain & Hosting",
    text: "Charged separately based on your selected domain and hosting requirements.",
  },
  {
    label: "Maintenance",
    text: "Monthly maintenance fees vary based on your specific needs.",
  },
];

export default function Pricing() {
  return (
    <section className="section-dark pt-40 pb-24  relative overflow-hidden">
      <RibbonBackgroundPricing />
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          className="eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Pricing
        </motion.p>
        <motion.h1
          className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Plans built around where your business is headed.
        </motion.h1>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerStagger}
        >
          {pricing.map((plan) => (
            <motion.div key={plan.id} variants={fadeUp}>
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden p-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="eyebrow">Important</p>
              <h2 className="mt-2 font-display text-xl font-semibold">
                A few things to know before you get started
              </h2>
            </div>

            <Link
              to="/Terms"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Terms &amp; Conditions
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {importantNotes.map((note) => (
              <li key={note.label} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {note.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {note.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="text-lg text-white/70 sm:text-xl">
            Not sure which plan fits?
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            See our services
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}