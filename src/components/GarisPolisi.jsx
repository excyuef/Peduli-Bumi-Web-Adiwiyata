function GarisPolisi() {
  const text = "Pilah • Olah • Reduce • Reuse • Recycle •";

  return (
    <div
      aria-hidden="true"
      className="group overflow-hidden border-y-4 border-black bg-foreground py-3 font-heading text-sm uppercase text-[#fff8e7] sm:text-lg md:text-2xl"
    >
      <style>{`
        @keyframes garis-polisi-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .garis-polisi-track {
          animation: garis-polisi-marquee 20s linear infinite;
        }
        .group:hover .garis-polisi-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="garis-polisi-track flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i} className="flex shrink-0">
            {Array.from({ length: 4 }).map((_, j) => (
              <span key={j} className="px-4">
                {text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GarisPolisi;