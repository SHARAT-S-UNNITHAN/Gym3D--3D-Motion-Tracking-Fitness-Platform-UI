import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden py-28">
      <SectionHeading
        eyebrow="SYS.FEEDBACK"
        title="Trained, tracked, transformed"
      />

      <div className="group relative mt-16 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div
              key={i}
              className="glass noise flex w-[340px] shrink-0 flex-col gap-5 rounded-3xl p-7"
            >
              <Quote size={28} className="text-orange/70" />
              <p className="text-sm leading-relaxed text-ink/90">“{t.quote}”</p>
              <div className="mt-auto flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold text-void"
                  style={{ background: t.color }}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
