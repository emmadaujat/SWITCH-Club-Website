type TiltedCardProps = {
  rotation?: number; // e.g. -2, 3 — defaults to 0 if not passed
  bgColor?: string; // Tailwind class, e.g. "bg-brand-lime"
  image?: string; // optional — photo URL
  caption?: string; // optional — text under the photo
  showTape?: boolean; // optional — corner tape strip, default false
  children?: React.ReactNode; // optional — anything else (heading, badge, button...)
};

export default function TiltedCard({
  rotation = 0,
  bgColor = "bg-white",
  image,
  caption,
  showTape = false,
  children,
}: TiltedCardProps) {
  return (
    <div
      className={`${bgColor} border-2 border-black rounded-md shadow-[4px_4px_0px_#000] p-4`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape corner — only render if requested */}
      {showTape && <div className="tape-element-goes-here" />}

      {/* Photo block — only render if an image was passed */}
      {image && (
        <div className="photo-container-goes-here">
          <img src={image} alt={caption ?? ""} />
        </div>
      )}

      {/* Caption — only render if passed */}
      {caption && <p className="caption-styles-go-here">{caption}</p>}

      {/* Anything else — badge, heading, body text, button, whatever the page needs */}
      {children}
    </div>
  );
}
