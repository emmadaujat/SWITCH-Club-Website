import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import sponsorsData from "@/data/sponsors.json";
import { SponsorTier, Sponsor } from "@/types/sponsors";
import SponsorGrid from "@/components/ui/SponsorGrid";

// controls left-to-right grid position AND the podium stagger —
// separate from `displayOrder`, which is just "rank" (used elsewhere, e.g. a pricing list)
const podiumOrder = ["BRONZE", "GOLD", "SILVER", "OPAL"];

const tierLayout: Record<string, { offsetClass: string; rotation: number }> = {
  BRONZE: { offsetClass: "relative top-35", rotation: 4 },
  GOLD: { offsetClass: "relative -top-10 left-0", rotation: 2 },
  SILVER: { offsetClass: "relative -bottom-0 left-0", rotation: -4 },
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
      <div className=" flex flex-col items-center py-10 ">
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">Become a Sponsor</h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Sponsorships
        </h1>
        <p>Contribute to a society for empowering Women+ in tech</p>
      </div>

      <div className="mx-auto max-w-7xl py-10 grid grid-cols-3 gap-15 ">
        {orderedTiers.map((tier) => {
          const layout = tierLayout[tier.tierName] ?? { offsetClass: "relative", rotation: 0 };
          return (
            <div key={tier.id} className={layout.offsetClass}>
              <TiltedCard rotation={layout.rotation} bgColor={tier.bgColor}>
                <div className="pl-4 mt-5 flex rotate-2">
                  <div className="rounded-full border-2 border-black bg-white px-4 py-2 rotate-2 self-start ">
                    <p className="font-bold uppercase text-2xl text-black">{tier.tierName}</p>
                  </div>
                </div>

                <div className="flex flex-row p-4 gap-3 items-centre">
                  <p className="font-bold text-3xl">{tier.price}</p>
                </div>

                <ul className="list-disc md:list-disc mt-2 px-8 font-regular">
                  {tier.benefits.map((benefit, i) => (
                    <li className="mt-3 " key={i}>
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
      <div className="py-10 bg-brand-purple">
        <div className="mb-10 flex flex-row justify-center ">
          <span className="text-brand-pink text-4xl mr-2">★</span>
          <div className="rounded-full border-2 border-black bg-brand-lime py-2 px-5">
            <h3 className="font-extrabold uppercase text-2xl text-black">Our Current Sponsors</h3>
          </div>
          <span className="text-brand-pink text-4xl ml-2">★</span>
        </div>
        <SponsorGrid sponsors={sponsors} cardsPerRow={3} />
      </div>
    </div>
  );
}
