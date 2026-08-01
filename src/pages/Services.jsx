import services from '../data/services.json'
import ServiceCard from '../components/ServiceCard.jsx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RibbonBackground from '../components/RibbonBackground.jsx'

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

export default function Services() {
  return (
    <section className="section-dark relative overflow-hidden pt-40 pb-24">
      <RibbonBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.p
          className="eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Services
        </motion.p>
        <motion.h1
          className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Everything you need to launch, rank, and sell online.
        </motion.h1>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerStagger}
        >
          {services.map((s) => (
            <motion.div key={s.id} variants={fadeUp}>
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-xl border border-navy-700 bg-transparent transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue-light/20 p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2 className="font-display text-xl font-semibold text-white">Not sure what you need?</h2>
          <p className="mt-2 text-sm text-slate-400">Tell us about your project and we'll recommend a starting point.</p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">Talk to us</Link>
        </motion.div>
      </div>
    </section>
  )
}