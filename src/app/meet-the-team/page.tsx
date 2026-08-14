import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import Ticker from "@/components/ui/Ticker-meet-the-team";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import TeamMemberGrid from "@/components/ui/TeamMemberGrid";
import { TeamMember } from "@/components/ui/TeamMemberCard";

// ---------------- HARDCODED DATA ----------------
const EXECUTIVE_COMMITTEE: TeamMember[] = [
  { name: "Navya", role: "President", image: "/pics/team-bonding-sem12026.jpg", rotation: 5 },
  { name: "Julie", role: "Vice President", image: "/pics/team-bonding-sem12026.jpg", rotation: -5 },
  { name: "Prisha", role: "Secretary", image: "/pics/team-bonding-sem12026.jpg", rotation: 6 },
  { name: "Emma", role: "Treasurer", image: "/pics/team-bonding-sem12026.jpg", rotation: -6 },
];

const SOCIAL_MEDIA_TEAM: TeamMember[] = [
  { name: "Tanisha", role: "Social Media Coordinator", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Audrey", role: "Social Media Member", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Bao Bao", role: "Social Media Member", image: "/pics/team-bonding-sem12026.jpg" },
];

const EVENTS_TEAM: TeamMember[] = [
  { name: "Dhwani", role: "Events Coordinator", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Bianca", role: "Events Coordinator", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Samarpita", role: "Events Member", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Sanika", role: "Events Member", image: "/pics/team-bonding-sem12026.jpg" },
  { name: "Samanali", role: "Events Member", image: "/pics/team-bonding-sem12026.jpg" },
];

export default function MeetTheTeamPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center mb-10 py-10 ">
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">
          The people behind SWITCH
        </h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Meet the team
        </h1>
        <p>Placeholder intro line about the committee and what they do.</p>
      </div>

      {/* ---------------- SECTION 1: EXECUTIVE COMMITTEE ---------------- */}
      <div className="bg-brand-purple px-10 pt-10 pb-20">
        <div className="mb-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-pink px-6">
            <h3 className="font-extrabold uppercase text-2xl text-black">EXECUTIVE COMMITTEE</h3>
          </div>
        </div>
        <TeamMemberGrid
          members={EXECUTIVE_COMMITTEE}
          stickerColor="bg-stickytape-pink"
          cardsPerRow={4}
        />
      </div>

      {/* ---------------- SECTION 2: GENERAL COMITTEE ---------------- */}
      <div className="mb-10">
        <div className="p-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-pink px-6">
            <h3 className="font-extrabold uppercase text-2xl text-black">GENERAL COMMITTEE</h3>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <Ticker phrases={["SOCIAL MEDIA"]} bgColor="bg-brand-lime" textColor="text-black" />
      </div>
      <div className="mb-20">
        <TeamMemberGrid
          members={SOCIAL_MEDIA_TEAM}
          stickerColor="bg-stickytape-green"
          cardsPerRow={3}
        />
      </div>

      {/* EVENTS MANAGEMENT SECTION */}
      <div className="mb-10">
        <Ticker phrases={["EVENT MANAGEMENT"]} bgColor="bg-brand-lime" textColor="text-black" />
      </div>
      <div className="mb-20">
        <TeamMemberGrid members={EVENTS_TEAM} stickerColor="bg-stickytape-green" cardsPerRow={3} />
      </div>
    </div>
  );
}
