import { motion } from "framer-motion";
import { Dumbbell, Flame, Mountain, type LucideIcon } from "lucide-react";
import { programs } from "../data/content";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = { Dumbbell, Flame, Mountain };

function ProgramCard({ program, index }: { program: (typeof programs)[number]; index: number }) {
  const Icon = icons[program.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-96 [perspective:1400px]"
    >
      <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="glass noise absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl p-8 text-center [backface-visibility:hidden]">
          <span className="font-mono text-xs tracking-[0.3em] text-muted">
            PROGRAM.{program.id}
          </span>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange/30 bg-orange/10 text-orange">
            <Icon size={28} />
          </div>
          <h3 className="font-display text-4xl font-black uppercase tracking-tight">
            {program.title}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green">
            {program.subtitle}
          </p>
          <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Hover to inspect
          </span>
        </div>

        {/* Back */}
        <div className="glass-strong absolute inset-0 flex h-full w-full flex-col justify-between rounded-3xl p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
              {program.title} — {program.subtitle}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {program.details}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                <span>Difficulty</span>
                <span>{program.difficulty}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${program.difficulty}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-orange to-green"
                />
              </div>
            </div>
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              <span>{program.weeks} weeks</span>
              <span>{program.sessions}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="relative px-4 py-28">
      <SectionHeading
        eyebrow="SYS.PROGRAMS"
        title="Three paths, one engine"
        description="Every program adapts to what your last session actually showed."
      />
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, i) => (
          <ProgramCard program={p} index={i} key={p.id} />
        ))}
      </div>
    </section>
  );
}
