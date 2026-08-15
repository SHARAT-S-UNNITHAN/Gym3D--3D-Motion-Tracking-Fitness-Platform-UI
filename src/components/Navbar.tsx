import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`glass-strong flex w-full items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "mt-3 max-w-3xl px-5 py-2.5"
              : "mt-5 max-w-5xl px-7 py-4"
          }`}
        >
          <a href="#" data-cursor-hover className="font-display text-2xl font-black tracking-tight">
            GYM<span className="text-gradient-og">3D</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-cursor-hover
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <MagneticButton
            className="hidden rounded-full bg-green px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-void transition-transform md:inline-block"
          >
            Join Now
          </MagneticButton>

          <button
            data-cursor-hover
            onClick={() => setOpen(true)}
            className="text-ink md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/70 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl font-black">
                GYM<span className="text-gradient-og">3D</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-bold uppercase text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-4 rounded-full bg-green px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest text-void"
              >
                Join Now
              </motion.a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
