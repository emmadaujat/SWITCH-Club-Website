import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import sponsorsData from "@/data/sponsors.json";
import { SponsorTier, Sponsor } from "@/types/sponsors";
import SponsorGrid from "@/components/ui/SponsorGrid";
import SectionBadge from "@/components/ui/SectionBadge";

const podiumOrder = ["GOLD", "SILVER", "BRONZE", "OPAL"];

const tierLayout: Record<string, { offsetClass: string; rotation: number }> = {
  GOLD: { offsetClass: "relative bottom-7 lg:-top-18 left-0", rotation: -3 },
  SILVER: { offsetClass: "relative lg:left-5", rotation: 4 },
  BRONZE: { offsetClass: "relative top-7 lg:top-20 lg:left-7", rotation: -2 },
  OPAL: { offsetClass: "relative top-15 lg:top-0", rotation: 3 },
};

export default function SponsorshipsPage() {
  const tiersByName = new Map(
    (sponsorsData.tiers as SponsorTier[]).map((tier) => [tier.tierName, tier]),
  );
  const orderedTiers = podiumOrder
    .map((name) => tiersByName.get(name))
    .filter((tier): tier is SponsorTier => Boolean(tier));

  const sponsors = sponsorsData.sponsors as Sponsor[];

  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-8 pb-15 lg:pb-20">
        <h2 className=" text-lg lg:text-2xl font-extrabold uppercase text-brand-purple">
          Become a Sponsor
        </h2>
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Sponsorships
        </h1>
        <p className="max-w-xs lg:max-w-3xl text-center text-xs lg:text-base text-black">
          Contribute to a society for empowering Women+ in tech
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-15 mb-30 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {orderedTiers.map((tier) => {
          const layout = tierLayout[tier.tierName] ?? { offsetClass: "relative", rotation: 0 };
          return (
            <div key={tier.id} className={layout.offsetClass}>
              <TiltedCard rotation={layout.rotation} bgColor={tier.bgColor}>
                <div className="pl-2 mt-2 flex rotate-2">
                  <SectionBadge
                    bgColor="bg-white"
                    textSize="text-lg lg:text-xl"
                    padding="px-4 py-2"
                    rotation="rotate-2"
                  >
                    {tier.tierName}
                  </SectionBadge>
                </div>

                <div className="flex flex-row pl-2 lg:pl-3 items-center">
                  <p className="font-bold text-lg lg:text-2xl">{tier.price}</p>
                </div>

                <ul className="list-disc md:list-disc pl-5 lg:pl-7 font-normal text-xs lg:text-sm">
                  {tier.benefits.map((benefit, i) => (
                    <li className="mt-2 " key={i}>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className=" m-3 justify-end flex">
                  <ChunkyButton
                    variant="other"
                    trailingSymbol="→"
                    href={"https://campus.hellorubric.com/?s=10199"}
                  >
                    Get in touch
                  </ChunkyButton>
                </div>
              </TiltedCard>
            </div>
          );
        })}
      </div>

      {/* CURRENT SPONSORS */}
      <div className="py-7 bg-brand-purple">
        <div className="mb-7 flex flex-row justify-center ">
          <span className="text-brand-pink text-2xl lg:text-4xl mr-2 align-middle">★</span>
          <SectionBadge
            bgColor="bg-brand-lime"
            textSize="text-lg lg:text-2xl"
            padding="py-2 px-5"
            fontWeight="font-extrabold"
            as="h3"
          >
            Our Current Sponsors
          </SectionBadge>

          <span className="text-brand-pink text-2xl lg:text-4xl ml-2 align-middle">★</span>
        </div>
        <SponsorGrid sponsors={sponsors} cardsPerRow={3} />
      </div>
    </div>
  );
}
