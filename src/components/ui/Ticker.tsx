type TickerProps = {
  phrases: string[]; // e.g. ["SAFE SPACE FOR WOMEN IN TECH", "JOIN THE MOVEMENT"]
  bgColor?: string; // Tailwind class, e.g. "bg-brand-black"
  textColor?: string; // Tailwind class, e.g. "text-white"
};

export default function Ticker({
  phrases,
  bgColor = "bg-brand-purple-dark",
  textColor = "text-white",
}: TickerProps) {
  // Repeat the phrase list several times so there's always enough
  // content to span the full width, even on wide screens
  const repeatCount = 6; // bump this up/down if you still see gaps on very wide screens
  const repeatedPhrases = Array(repeatCount).fill(phrases).flat();

  // Seconds per repeat — this is your actual "speed" dial now, not the animate class
  const secondsPerRepeat = 6;
  const duration = repeatCount * secondsPerRepeat;

  return (
    // OUTER: clips anything outside the visible strip
    <div className={`${bgColor} w-full overflow-hidden whitespace-nowrap`}>
      {/* INNER: the thing that actually animates */}
      <div className="inline-flex" style={{ animation: `marquee ${duration}s linear infinite` }}>
        {/* Copy 1 - every other star is pink or lime green*/}
        <div className="flex-shrink-0 inline-flex items-center">
          {repeatedPhrases.map((phrase, i) => (
            <span key={`a-${i}`} className={`${textColor} font-semi-bold uppercase py-4`}>
              <span className={`p-4 ${i % 2 === 0 ? "text-brand-pink" : "text-brand-lime"}`}>
                ★
              </span>{" "}
              {phrase}
            </span>
          ))}
        </div>

        {/* Copy 2 — every other star is pink or lime green */}
        <div className="flex-shrink-0 inline-flex items-center" aria-hidden="true">
          {repeatedPhrases.map((phrase, i) => (
            <span key={`b-${i}`} className={`${textColor} font-semi-bold uppercase py-4`}>
              <span className={`p-4 ${i % 2 === 0 ? "text-brand-pink" : "text-brand-lime"}`}>
                ★
              </span>{" "}
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
