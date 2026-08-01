import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import RibbonBackgroundContact from "../components/RibbonBackgroundContact.jsx";

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
  visible: { transition: { staggerChildren: 0.08 } },
};

// EmailJS config
const SERVICE_ID = "service_lqxo9m4"
const TEMPLATE_ID = "template_s72mrye"
const PUBLIC_KEY = "3LQ_HjmBBFhjH-M_E"

// Google Apps Script Web App URL (from your deployment)
const SHEET_URL = "https://script.google.com/macros/s/AKfycby35TfAGAAYJi1b1tjeUHbmcRBkPYwvkCgwMsI3M3nFcCeVvraZUf30a_t_kNKSsJRj/exec"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const contactDetails = [
    { label: "Phone / Whatsapp", value: "+94 70 364 2741 ", href: "tel:+94703642741" },
    { label: "Email", value: "pragmadev.info@gmail.com", href: "mailto:pragmadev.info@gmail.com" },
    { label: "Location", value: "Ja-Ela, Sri Lanka", href: null },
    { label: "Facebook", value: "Pragma Development", href: "https://www.facebook.com/share/19TSQt7jAS/" },
  ];

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setSending(true)
    setError(null)

    try {
      await Promise.all([
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          PUBLIC_KEY
        ),
        fetch(SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }),
      ])
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section-dark pt-40 pb-24 relative overflow-hidden">
      <RibbonBackgroundContact />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/2 rounded-full opacity-70 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(8,62,143,1) 0%, rgba(239,68,68,0) 70%)" }}
      />
      <div
        className="pointer-events-none z-10 absolute bottom-50 left-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(239,68,68,0) 70%)" }}
      />

      <div className="mx-auto max-w-5xl px-6 relative">
        <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h1
          className="mt-4 font-display text-4xl font-semibold sm:text-5xl"
          initial="hidden" animate="visible" custom={1} variants={fadeUp}
        >
          Let's build something.
        </motion.h1>
        <motion.p className="mt-4 text-slate-400" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
          Tell us a bit about your project. We reply within one business day.
        </motion.p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div className="space-y-4" initial="hidden" animate="visible" variants={containerStagger}>
            {contactDetails.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const MotionWrapper = motion(Wrapper);
              const wrapperProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : undefined,
                    rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                  }
                : {};
              return (
                <MotionWrapper
                  key={item.label}
                  {...wrapperProps}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <p className="eyebrow text-xs">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white break-words">{item.value}</p>
                </MotionWrapper>
              );
            })}
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-brand-blue bg-navy-800 p-8"
              >
                <p className="font-display text-lg font-semibold text-white">Message sent.</p>
                <p className="mt-2 text-sm text-slate-400">Thanks — we'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <motion.div className="space-y-5" initial="hidden" animate="visible" variants={containerStagger}>
                <motion.div variants={fadeUp}>
                  <label className="mb-1.5 block text-sm font-medium text-slate-400" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-blue"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="mb-1.5 block text-sm font-medium text-slate-400" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-blue"
                    placeholder="you@company.com"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="mb-1.5 block text-sm font-medium text-slate-400" htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-blue"
                    placeholder="What are you looking to build?"
                  />
                </motion.div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <motion.button
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send message"}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}