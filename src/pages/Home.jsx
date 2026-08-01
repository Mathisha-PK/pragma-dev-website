import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services.json";
import HomeServices from "../data/HomeServices.json";
import pricing from "../data/pricing.json";
import HomeServiceCards from "../components/HomeServiceCards.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import HeroRibbon from "../components/HeroRibbon";
import PricingCard from "../components/Pricingcard.jsx";
import Tools from "../components/Tools.jsx";
import tools from "../data/tools.json";
import IndustryCard from "../components/IndustryCard.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import industries from "../data/industries.json";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark hero-glow relative overflow-hidden bg-radial-fade pt-40 pb-28">
        <HeroRibbon />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            #1 Solution for you.
          </motion.p>
          <motion.h1
            className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.4] sm:text-6xl"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Web <span className="text-brand-blue-light">Design</span>, &
            Development.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl text-lg text-slate-400"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            We provides to you High-performance web apps, SEO, and e-commerce
            platforms that architected around your business goals to drive
            measurable growth.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-8"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <Link to="/contact" className="btn-primary">
              Contact us
            </Link>
            <Link to="/services" className="btn-ghost">
              See our services
            </Link>
          </motion.div>
        </div>
        {/* logo Photo — bottom right */}
        <motion.img
          src="/images/logo full trans.png"
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-5 right-5 z-10 hidden max-h-[85%] w-auto select-none md:block lg:max-h-[60%]"
        />
      </section>

      {/* Services preview */}
      <section className="section-dark border-t border-navy-700 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="flex items-end justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-2 text-3xl font-semibold">
                Services built around outcomes
              </h2>
            </div>
            <Link
              to="/services"
              className="border rounded-md border-brand-blue-light bg-transparent p-6 px-2 py-1 text-sm font-medium text-brand-blue-light transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue-light/20 sm:block"
            >
              View all services →
            </Link>
          </motion.div>

          {/* Services cards */}
          <motion.div
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={containerStagger}
          >
            {HomeServices.slice(0, 3).map((s) => (
              <motion.div key={s.id} variants={fadeUp}>
                <HomeServiceCards HomeService={s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Radial gradient background (red)*/}
        <div
          className="pointer-events-none z-10 absolute bottom-50 left-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(239,68,68,0) 70%)",
          }}
        />
      </section>

    {/* Expertise section */}
    <ExpertiseSection />

       {/* Pricing teaser */}
      <section className="section-dark relative overflow-hidden border-t border-navy-700 py-24">
        
        {/* Line pattern background */}
      <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
         {Array.from({ length: 5 }).map((_, i) => {
          const startY = 40 + i * 55;       // evenly spaced starting points
          const spread = i * 20 + (i % 2 === 0 ? 0 : 10); // gentle alternating variation
        return (
          <path
           key={i}
           d={`M0,${startY}
           C200,${60 + spread} 350,${120 + spread} 500,${90 + spread}
           S700,${40 + spread} 800,${100 + spread}`}
           fill="none"
           stroke="#334155"
           strokeWidth="1"
            opacity="0.3"
         />
        );
     })}
        </svg>

        {/* Radial gradient background (blue) */}
        <div
          className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/2 rounded-full opacity-60 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(8,62,143,1) 0%, rgba(239,68,68,0) 70%)",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-6xl px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerStagger}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Pricing
          </motion.p>
          <motion.h2 className="mt-3 text-3xl font-semibold" variants={fadeUp}>
            Plans built around where your business is headed
          </motion.h2>
          <motion.p className="mt-3 text-slate-500" variants={fadeUp}>
            Simple, transparent pricing — no surprises, no hidden fees.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/pricing"
              className="btn-primary mt-8 inline-flex bg-brand-blue"
            >
              See pricing →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    
      {/* Tools */}
       <section className="section-dark border-t border-navy-700 py-10">
          <div className="mx-auto max-w-6xl px-6">
           <motion.div
             className="flex items-end justify-between"
             initial="hidden"
             whileInView="visible"
             viewport={viewportOnce}
             variants={fadeUp}
           >
           <div>
            <p className="eyebrow">Our stack</p>
             <h2 className="mt-2 text-3xl font-semibold">
                Full stack build, that monitors each inch
               </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-400">
                 From the pixel to the last serverlog, every layer built, tested and watched.
            </p>
          </div>
        </motion.div>

         {/* icons */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={containerStagger}
          >
            {tools.map((s) => (
             <motion.div key={s.id} variants={fadeUp} whileHover={{ scale: 1.1, y: -4 }}>
               <Tools Tools={s} />
             </motion.div>
              ))}
             </motion.div>
           </div>
           <h3 className="font-semibold text-right mx-auto max-w-7xl px-6"> & More... </h3>
        </section>
    </>
  );
}
