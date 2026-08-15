import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="relative px-4 py-10">
      <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange via-orange/80 to-green px-6 py-24 text-center">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-void/30 blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative font-display text-[clamp(2.75rem,9vw,7rem)] font-black uppercase leading-[0.9] tracking-tight text-void"
        >
          Ready To Train?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-4 max-w-md text-sm font-medium text-void/80 sm:text-base"
        >
          Step into the rig. Your first session is on us — no card, no
          commitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-9"
        >
          <MagneticButton
            strength={0.4}
            className="inline-block rounded-full bg-void px-10 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink shadow-[0_0_50px_rgba(0,0,0,0.4)]"
          >
            Claim Free Session
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
