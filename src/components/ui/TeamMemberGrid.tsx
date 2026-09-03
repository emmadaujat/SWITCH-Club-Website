import CardGrid from "@/components/ui/CardGrid";
import TeamMemberCard, { TeamMember } from "@/components/ui/TeamMemberCard";

type TeamMemberGridProps = {
  members: TeamMember[];
  stickerColor?: string;
  cardsPerRow?: number;
};

// Keep in sync with the lg: width used in TeamMemberCard (currently w-70 = 280px).
const CARD_WIDTH_PX = 280;
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
  return (
    <CardGrid
      items={members}
      cardWidthPx={CARD_WIDTH_PX}
      cardsPerRow={cardsPerRow}
      getKey={(member) => member.name}
      renderCard={(member, index) => (
        <TeamMemberCard
          member={member}
          rotation={resolveRotation(member, index)}
          stickerColor={member.stickerColor ?? stickerColor}
        />
      )}
    />
  );
}
