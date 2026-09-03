import SponsorCard from "@/components/ui/SponsorCard";
import { Sponsor } from "@/types/sponsors";

type SponsorGridProps = {
  sponsors: Sponsor[];
  cardsPerRow?: number;
};

const CARD_WIDTH_PX = 128;
const GAP_PX = 32;

const ROTATION_SEQUENCE = [4, -4, 5, -5, 3, -3];

export default function SponsorGrid({ sponsors, cardsPerRow = 4 }: SponsorGridProps) {
  const maxWidth = cardsPerRow * CARD_WIDTH_PX + (cardsPerRow - 1) * GAP_PX;

  return (
    <div
      className="mx-auto flex flex-wrap justify-center gap-10"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {sponsors.map((sponsor, index) => (
        <SponsorCard
          key={sponsor.id}
          companyName={sponsor.companyName}
          logoUrl={sponsor.logoUrl}
          website={sponsor.website}
          rotation={ROTATION_SEQUENCE[index % ROTATION_SEQUENCE.length]}
        />
      ))}
    </div>
  );
}
