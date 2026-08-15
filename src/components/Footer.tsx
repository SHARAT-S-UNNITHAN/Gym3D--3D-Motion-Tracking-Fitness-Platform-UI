import { AtSign, MessageCircle, Video, Code2 } from "lucide-react";
import { footerLinks } from "../data/content";

const socials = [
  { icon: AtSign, label: "Instagram" },
  { icon: MessageCircle, label: "Twitter / X" },
  { icon: Video, label: "YouTube" },
  { icon: Code2, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-4 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2">
          <span className="font-display text-3xl font-black tracking-tight">
            GYM<span className="text-gradient-og">3D</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted">
            A training platform that renders your body in three dimensions,
            live, every session.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={s.label}
                data-cursor-hover
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-orange"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {heading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-ink/80 transition-colors hover:text-orange"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted sm:flex-row sm:text-left">
        <span>© 2026 Gym3D. All rights reserved.</span>
        <span>UI showcase build — no backend attached.</span>
      </div>
    </footer>
  );
}
