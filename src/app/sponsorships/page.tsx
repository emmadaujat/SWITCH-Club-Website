import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import { TeamMember } from "@/components/ui/TeamMemberCard";
import TeamMemberGrid from "@/components/ui/TeamMemberGrid";

// TODO: CREATE DATABASE & GET SPONSORSHIP INFORMATION
// ---------------- HARDCODED DATA ----------------
const SPONSORS: TeamMember[] = [
  { name: "Sponsor 1", role: "Sponsor", image: "/pics/team-bonding-sem12026.jpg", rotation: 5 },
  { name: "Sponsor 2", role: "Sponsor", image: "/pics/team-bonding-sem12026.jpg", rotation: -5 },
  { name: "Sponsor 3", role: "Sponsor", image: "/pics/team-bonding-sem12026.jpg", rotation: 6 },
  { name: "Sponsor 4", role: "Sponsor", image: "/pics/team-bonding-sem12026.jpg", rotation: -6 },
];

export default function SponsorshipsPage() {
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

      <div className="mx-auto max-w-6xl py-6 grid grid-cols-3 gap-7 mb-20 ">
        {/* ---------------- CARD 3: Bronze ---------------- */}
        <div className="relative top-25">
          <TiltedCard rotation={-4} bgColor="bg-bronze">
            <div className="pl-4 mt-5 flex rotate-2">
              <div className="rounded-full border-2 border-black bg-white px-4 py-2 rotate-2 self-start ">
                <p className="font-bold uppercase text-2xl text-black">Bronze</p>
              </div>
            </div>
            <div className="flex flex-row p-4 gap-5 items-centre">
              <p className="font-bold text-6xl mr-2">$</p>
              <h2 className="font-semibold text-4xl mt-4 ">--</h2>
            </div>
            <ul className="list-disc md:list-disc mt-2 px-8">
              <li>Logo on website</li>
              <li>Social media shoutout</li>
              <li>Next item </li>
              <li>Next Next item</li>
            </ul>

            {/* BUTTON */}
            {/* TODO: make all links open in seperate tab */}
            <div className=" m-5 justify-end flex">
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

        {/* ---------------- CARD 1: Gold ---------------- */}
        <div className="relative -top-10 left-0 ">
          <TiltedCard rotation={3} bgColor="bg-gold">
            <div className="pl-4 mt-5 flex rotate-2">
              <div className="rounded-full border-2 border-black bg-white px-4 py-2 rotate-2 self-start ">
                <p className="font-bold uppercase text-2xl text-black">GOLD</p>
              </div>
            </div>
            <div className="flex flex-row p-4 gap-3 items-centre">
              <p className="font-bold text-6xl ">$</p>
              <h2 className="font-semibold text-4xl mt-4">--</h2>
            </div>

            <ul className="list-disc md:list-disc mt-2 px-8">
              <li>Logo on website</li>
              <li>Social media shoutout</li>
              <li>Next item </li>
              <li>Next Next item</li>
            </ul>
            {/* BUTTON */}
            {/* TODO: make all links open in seperate tab */}
            <div className=" m-5 justify-end flex">
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

        {/* ---------------- CARD 2: Silver ---------------- */}
        <div className="relative -bottom-8 left-0 ">
          <TiltedCard rotation={-2} bgColor="bg-silver">
            <div className="pl-4 mt-5 flex rotate-2">
              <div className="rounded-full border-2 border-black bg-white px-4 py-2 rotate-2 self-start ">
                <p className="font-bold uppercase text-2xl text-black">Silver</p>
              </div>
            </div>
            <div className="flex flex-row p-4 gap-5 items-centre">
              <p className="font-bold text-6xl mr-2">$</p>
              <h2 className="font-semibold text-4xl mt-4 ">--</h2>
            </div>
            <ul className="list-disc md:list-disc mt-2 px-8">
              <li>Logo on website</li>
              <li>Social media shoutout</li>
              <li>Next item </li>
              <li>Next Next item</li>
            </ul>

            {/* BUTTON */}
            {/* TODO: make all links open in seperate tab */}
            <div className=" m-5 justify-end flex">
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
      </div>

      {/* ---------------- Current sponsors ---------------- */}
      <div className="py-20 ">
        <div className="mb-15 flex flex-row justify-center ">
          <span className="text-brand-pink text-4xl mr-2">★</span>

          <div className="rounded-full border-2 border-black bg-brand-lime py-2 px-5">
            <h3 className="font-extrabold uppercase text-xl text-black">Our Current Sponsors</h3>
          </div>
          <span className="text-brand-pink text-4xl ml-2">★</span>
        </div>
        <TeamMemberGrid members={SPONSORS} stickerColor="" cardsPerRow={4} />
      </div>
    </div>
  );
}
