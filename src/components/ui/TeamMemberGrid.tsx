import TeamMemberCard, { TeamMember } from "@/components/ui/TeamMemberCard";

type TeamMemberGridProps = {
  members: TeamMember[];
  stickerColor?: string; // default sticker color for the whole group, e.g. "bg-stickytape-green"
  cardsPerRow?: number; // how many cards should sit on a full row (default 3)
};

// Keep these in sync with the fixed sizing used in TeamMemberCard (w-70 = 280px, gap-10 = 40px).
const CARD_WIDTH_PX = 280;
const GAP_PX = 40;

// Small, deliberate alternation so cards don't all lean the same way —
// cycles through a few tilt angles instead of needing one passed in per member.
const ROTATION_SEQUENCE = [5, -5, 6, -6, 8, -8];

function resolveRotation(member: TeamMember, index: number) {
  if (member.rotation !== undefined) return member.rotation;
  return ROTATION_SEQUENCE[index % ROTATION_SEQUENCE.length];
}

export default function TeamMemberGrid({
  members,
  stickerColor = "bg-stickytape-pink",
  cardsPerRow = 3,
}: TeamMemberGridProps) {
  const maxWidth = cardsPerRow * CARD_WIDTH_PX + (cardsPerRow - 1) * GAP_PX;

  return (
    <div
      className="mx-auto flex flex-wrap justify-center gap-10"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {members.map((member, index) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          rotation={resolveRotation(member, index)}
          stickerColor={member.stickerColor ?? stickerColor}
        />
      ))}
    </div>
  );
}
