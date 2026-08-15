import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <HeroScene />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green" />
          Full-Body Volumetric Training
        </motion.div>

        <h1 className="font-display text-[clamp(3.5rem,13vw,12rem)] font-black uppercase leading-[0.85] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-ink"
          >
            TRAIN IN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-gradient block"
          >
            3D
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-lg text-balance text-base text-muted sm:text-lg"
        >
          Every rep, rendered. Every gain, measured. A training platform that
          sees your body in three dimensions and coaches it in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton className="glow-orange flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-light px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-void">
            Start Training
          </MagneticButton>
          <MagneticButton className="glass flex items-center gap-2 rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink">
            <span className="flex items-center gap-2">
              <Play size={14} fill="currentColor" /> Watch Demo
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 z-10 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
