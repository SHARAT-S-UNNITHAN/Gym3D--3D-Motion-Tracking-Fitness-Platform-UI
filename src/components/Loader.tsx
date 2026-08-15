import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1650;
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.02em", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl font-black uppercase tracking-tight text-ink"
            >
              GYM<span className="text-gradient-og">3D</span>
            </motion.div>

            <div className="relative h-px w-56 overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange to-green"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="font-mono text-xs tracking-[0.3em] text-muted">
              LOADING SYSTEM — {String(progress).padStart(3, "0")}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
