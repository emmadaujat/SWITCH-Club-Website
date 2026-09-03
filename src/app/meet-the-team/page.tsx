import Ticker from "@/components/ui/Ticker-meet-the-team";
import TeamMemberGrid from "@/components/ui/TeamMemberGrid";
import { TeamMember } from "@/components/ui/TeamMemberCard";

// ---------------- HARDCODED DATA ----------------
const EXECUTIVE_COMMITTEE: TeamMember[] = [
  { name: "Navya", role: "President", image: "/pics/team/president.jpg", rotation: 5 },
  { name: "Julie", role: "Vice President", image: "/pics/team/vice-president.jpg", rotation: -5 },
  { name: "Prisha", role: "Secretary", image: "/pics/team/secretary.jpg", rotation: 6 },
  { name: "Emma", role: "Treasurer", image: "/pics/team/treasurer.jpg", rotation: -6 },
];

const SOCIAL_MEDIA_TEAM: TeamMember[] = [
  {
    name: "Tanisha",
    role: "Social Media Coordinator",
    image: "/pics/team/social-media-coordinator.jpg",
  },
  { name: "Audrey", role: "Social Media Member", image: "/pics/team/social-media1.jpg" },
  {
    name: "Bao Bao",
    role: "Social Media Member",
    image: "/pics/team/social-media2.jpg",
  },
];

const EVENTS_TEAM: TeamMember[] = [
  { name: "Dhwani", role: "Events Coordinator", image: "/pics/team/events-coordinator1.jpg" },
  { name: "Bianca", role: "Events Coordinator", image: "/pics/team/events-coordinator2.jpg" },
  { name: "Samarpita", role: "Events Member", image: "/pics/team/events1.jpg" },
  { name: "Sanika", role: "Events Member", image: "/pics/team/events2.jpg" },
  { name: "Samanali", role: "Events Member", image: "pics/team/events3.jpg" },
];

export default function MeetTheTeamPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center mb-10 py-10 ">
        <h2 className=" text-xl lg:text-2xl font-extrabold uppercase text-brand-purple">
          The people behind SWITCH
        </h2>
        <h1 className=" text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Meet the team
        </h1>
        <p>The team keeping SWITCH, switched on</p>
      </div>

      {/* ---------------- SECTION 1: EXECUTIVE COMMITTEE ---------------- */}
      <div className="bg-brand-purple p-15">
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
      <div className="mb-10 ">
        <div className="p-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-pink px-6">
            <h3 className="font-extrabold uppercase text-2xl text-black">GENERAL COMMITTEE</h3>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <Ticker phrases={["SOCIAL MEDIA"]} bgColor="bg-brand-lime" textColor="text-black" />
      </div>

      <div className="mb-20 px-5">
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
      <div className="mb-20 px-5">
        <TeamMemberGrid members={EVENTS_TEAM} stickerColor="bg-stickytape-green" cardsPerRow={3} />
      </div>
    </div>
  );
}
