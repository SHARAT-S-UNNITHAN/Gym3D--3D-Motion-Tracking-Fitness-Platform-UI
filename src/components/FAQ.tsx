import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-28">
      <SectionHeading eyebrow="SYS.FAQ" title="Questions, answered" />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="glass overflow-hidden rounded-2xl">
              <button
                data-cursor-hover
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    isOpen ? "bg-orange text-void" : "bg-white/10 text-ink"
                  }`}
                >
                  <Plus size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
