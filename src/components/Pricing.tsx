import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "../data/content";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-28">
      <SectionHeading
        eyebrow="SYS.MEMBERSHIP"
        title="Pick your rig access"
        description="Simple tiers. No contracts. Change or cancel from your account anytime."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-3">
        {pricing.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 ${
              tier.featured
                ? "glass-strong glow-green scale-100 border-green/50 lg:scale-110"
                : "glass"
            }`}
            style={tier.featured ? { borderColor: "rgba(34,197,94,0.5)" } : undefined}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-void">
                Most Popular
              </span>
            )}

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
              {tier.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{tier.tagline}</p>

            <div className="mt-6 flex items-end gap-1 font-display">
              <span className="text-7xl font-black leading-none text-ink">
                ${tier.price}
              </span>
              <span className="mb-1 font-mono text-xs uppercase text-muted">
                /{tier.period}
              </span>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink/90">
                  <Check
                    size={16}
                    className={`mt-0.5 shrink-0 ${
                      tier.featured ? "text-green" : "text-orange"
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <MagneticButton
              className={`mt-8 block w-full rounded-full py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.15em] ${
                tier.featured
                  ? "bg-green text-void glow-green"
                  : "glass text-ink"
              }`}
            >
              Choose {tier.name}
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
