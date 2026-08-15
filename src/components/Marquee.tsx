const ITEM = "STRENGTH • POWER • 3D FITNESS • MOTION CAPTURE • RECOVERY •";

export default function Marquee() {
  return (
    <div className="relative flex -rotate-1 scale-105 overflow-hidden bg-orange py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, i) => (
          <span
            key={i}
            className="mx-4 font-display text-3xl font-black uppercase tracking-tight text-void sm:text-5xl"
          >
            {ITEM.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
