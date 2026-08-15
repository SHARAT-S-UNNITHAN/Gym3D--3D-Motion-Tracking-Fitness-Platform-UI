import { motion } from "framer-motion";
import {
  Scan,
  Activity,
  Radar,
  HeartPulse,
  Boxes,
  Users,
  type LucideIcon,
} from "lucide-react";
import { features } from "../data/content";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Scan,
  Activity,
  Radar,
  HeartPulse,
  Boxes,
  Users,
};

const sizeClasses: Record<string, string> = {
  lg: "lg:col-span-2 lg:row-span-2",
  md: "lg:col-span-2 lg:row-span-1",
  sm: "lg:col-span-1 lg:row-span-1",
};

export default function Bento() {
  return (
    <section id="features" className="relative px-4 py-28">
      <SectionHeading
        eyebrow="SYS.CAPABILITIES"
        title="Built for bodies in motion"
        description="Six systems working together the moment you step into frame."
      />

      <div className="mx-auto mt-16 grid max-w-6xl auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = icons[f.icon];
          const accent = f.accent === "orange" ? "#F97316" : "#22C55E";
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={sizeClasses[f.size]}
            >
              <TiltCard className="glass noise h-full rounded-3xl p-7">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${accent}55`,
                    background: `${accent}14`,
                    color: accent,
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {f.text}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
