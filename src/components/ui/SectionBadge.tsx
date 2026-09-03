type SectionBadgeProps = {
  children: React.ReactNode;
  bgColor?: string; // Tailwind class, e.g. "bg-brand-pink" — default "bg-white"
  textSize?: string; // e.g. "text-xl lg:text-2xl" — default "text-lg lg:text-xl"
  fontWeight?: string; // "font-bold" or "font-extrabold" — default "font-bold"
  padding?: string; // e.g. "px-6", "py-2 px-5" — default "p-2"
  rotation?: string; // e.g. "rotate-2" — default "" (no rotation on the badge itself)
  as?: "p" | "h3"; // which tag wraps the text — default "p"
};

export default function SectionBadge({
  children,
  bgColor = "bg-white",
  textSize = "text-lg lg:text-xl",
  fontWeight = "font-bold",
  padding = "p-2",
  rotation = "",
  as: Tag = "p",
}: SectionBadgeProps) {
  return (
    <div className={`rounded-full border-2 border-black ${bgColor} ${padding} ${rotation}`}>
      <Tag className={`${fontWeight} uppercase ${textSize} text-black`}>{children}</Tag>
    </div>
  );
}
