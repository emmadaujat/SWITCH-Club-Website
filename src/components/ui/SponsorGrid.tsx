import CardGrid from "@/components/ui/CardGrid";
import SponsorCard from "@/components/ui/SponsorCard";
import { Sponsor } from "@/types/sponsors";

type SponsorGridProps = {
  sponsors: Sponsor[];
  cardsPerRow?: number;
};

const CARD_WIDTH_PX = 128;
const ROTATION_SEQUENCE = [4, -4, 5, -5, 3, -3];

export default function SponsorGrid({ sponsors, cardsPerRow = 4 }: SponsorGridProps) {
  return (
    <CardGrid
      items={sponsors}
      cardWidthPx={CARD_WIDTH_PX}
      cardsPerRow={cardsPerRow}
      getKey={(sponsor) => sponsor.id}
      renderCard={(sponsor, index) => (
        <SponsorCard
          companyName={sponsor.companyName}
          logoUrl={sponsor.logoUrl}
          website={sponsor.website}
          rotation={ROTATION_SEQUENCE[index % ROTATION_SEQUENCE.length]}
        />
      )}
    />
  );
}
