type StickyTapeProps = {
  rotation?: number;
  bgColor?: string;
  size?: string;
};

export default function Sticker({
  rotation = 0,
  bgColor = "bg-stickytape-pink",
  size = "w-20 h-6",
}: StickyTapeProps) {
  return (
    <div
      className={`${bgColor} ${size} opacity-85 `}
      style={{ transform: `rotate(${rotation}deg)` }}
    ></div>
  );
}
