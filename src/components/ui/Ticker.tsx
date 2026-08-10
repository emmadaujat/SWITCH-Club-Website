// components/layout/Ticker.tsx

type TickerProps = {
  phrases: string[]; // e.g. ["SAFE SPACE FOR WOMEN IN TECH", "JOIN THE MOVEMENT"]
  bgColor?: string; // Tailwind class, e.g. "bg-brand-black"
  textColor?: string; // Tailwind class, e.g. "text-white"
};

export default function Ticker({
  phrases,
  bgColor = "bg-black",
  textColor = "text-white",
}: TickerProps) {
  return (
    // OUTER: clips anything outside the visible strip
    <div className={`${bgColor} overflow-hidden whitespace-nowrap`}>
      {/* INNER: the thing that actually animates */}
      <div className="inline-flex animate-[marquee_20s_linear_infinite]">
        {/* Copy 1 */}
        <div className="flex-shrink-0 inline-flex items-center">
          {phrases.map((phrase, i) => (
            <span key={`a-${i}`} className={`${textColor} font-bold uppercase px-4`}>
              {phrase} ★
            </span>
          ))}
        </div>

        {/* Copy 2 — identical, makes the loop seamless */}
        <div className="flex-shrink-0 inline-flex items-center" aria-hidden="true">
          {phrases.map((phrase, i) => (
            <span key={`b-${i}`} className={`${textColor} font-bold uppercase px-4`}>
              {phrase} ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
