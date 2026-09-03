type TiltedCardProps = {
  rotation?: number; // e.g. -2, 3 — defaults to 0 if not passed
  bgColor?: string; // Tailwind class, e.g. "bg-brand-lime"
  children?: React.ReactNode; // optional — anything else (heading, badge, button...)
};

export default function TiltedCard({
  rotation = 0,
  bgColor = "bg-white",
  children,
}: TiltedCardProps) {
  return (
    <div
      className={`${bgColor} border-2 border-black rounded-md shadow-[4px_4px_0px_#000] p-4 relative`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Anything else — badge, heading, body text, button, whatever the page needs */}
      {children}
    </div>
  );
}
