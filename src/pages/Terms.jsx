import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import terms from "../data/terms.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const viewportOnce = { once: true, amount: 0.2 };

export default function Terms() {
  return (
    <section className="section-dark pt-40 pb-24 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          className="eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Terms &amp; Conditions
        </motion.p>
        <motion.h1
          className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Policies &amp; regulations
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-white/60"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
        >
          The terms that apply to every project — pricing, payment, revisions,
          and what happens after launch.
        </motion.p>

        <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
          {terms.map((section) => (
            <motion.div
              key={section.number}
              className="grid gap-4 py-10 sm:grid-cols-[100px_1fr]"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <div className="flex items-start gap-3 sm:block">
                <span className="font-display text-2xl font-semibold text-white/25">
                  {section.number}
                </span>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.intro && (
                  <p className="mt-3 text-sm text-white/60">
                    {section.intro}
                  </p>
                )}

                <ul className="mt-4 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                      <span aria-hidden="true" className="mt-0.5 text-white/40">
                        &rarr;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {section.note && (
                  <p className="mt-4 text-sm italic text-white/50">
                    {section.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="text-sm leading-relaxed text-white/50">
            These policies are subject to change and may be adjusted per
            project based on mutual agreement between the developer and
            client.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="text-lg text-white/70 sm:text-xl">
            Have questions about how these apply to your project?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
