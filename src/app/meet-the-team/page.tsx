import Ticker from "@/components/ui/Ticker";
import TeamMemberGrid from "@/components/ui/TeamMemberGrid";
import SectionBadge from "@/components/ui/SectionBadge";
import { TeamMember } from "@/components/ui/TeamMemberCard";
import teamData from "@/data/team.json";
import { TeamMemberRecord } from "@/types/team";

const allMembers = (teamData as TeamMemberRecord[]).sort((a, b) => a.displayOrder - b.displayOrder);

function getSection(section: TeamMemberRecord["committeeSection"]): TeamMember[] {
  return allMembers
    .filter((m) => m.committeeSection === section)
    .map((m) => ({ name: m.name, role: m.roleTitle, image: m.photoUrl }));
}

const EXECUTIVE_COMMITTEE = getSection("executive");
const SOCIAL_MEDIA_TEAM = getSection("social-media");
const EVENTS_TEAM = getSection("events");

export default function MeetTheTeamPage() {
  return (
    <div className="bg-brand-purple-light pb-5 lg:pb-20">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center mb-5 py-5 lg:py-10 ">
        <h2 className=" text-xl lg:text-2xl font-extrabold uppercase text-brand-purple">
          The people behind SWITCH
        </h2>
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Meet the team
        </h1>
        <p className="text-sm md:text-md lg:text-lg">The team keeping SWITCH, switched on</p>
      </div>

      {/* ---------------- SECTION 1: EXECUTIVE COMMITTEE ---------------- */}
      <div className="bg-brand-purple p-8 pb-12">
        <div className="mb-10 flex flex-col items-center">
          <SectionBadge
            as="h3"
            bgColor="bg-brand-pink"
            fontWeight="font-extrabold"
            textSize="text-lg lg:text-2xl"
            padding="px-4 lg:px-6"
          >
            EXECUTIVE COMMITTEE
          </SectionBadge>
        </div>{" "}
        <TeamMemberGrid
          members={EXECUTIVE_COMMITTEE}
          stickerColor="bg-stickytape-pink"
          cardsPerRow={4}
        />
      </div>

      {/* ---------------- SECTION 2: GENERAL COMITTEE ---------------- */}
      <div className="mb-10 ">
        <div className="p-8 flex flex-col items-center">
          <SectionBadge
            as="h3"
            bgColor="bg-brand-pink"
            fontWeight="font-extrabold"
            textSize="text-lg lg:text-2xl"
            padding="px-4 lg:px-6"
          >
            GENERAL COMMITTEE
          </SectionBadge>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <Ticker
          phrases={["SOCIAL MEDIA"]}
          bgColor="bg-brand-lime"
          textColor="text-black"
          secondsPerRepeat={9}
        />
      </div>

      <div className="mb-10 px-5">
        <TeamMemberGrid
          members={SOCIAL_MEDIA_TEAM}
          stickerColor="bg-stickytape-green"
          cardsPerRow={3}
        />
      </div>

      {/* EVENTS MANAGEMENT SECTION */}
      <div className="mb-10">
        <Ticker
          phrases={["EVENT MANAGEMENT"]}
          bgColor="bg-brand-lime"
          textColor="text-black"
          secondsPerRepeat={9}
        />
      </div>
      <div className="px-5">
        <TeamMemberGrid members={EVENTS_TEAM} stickerColor="bg-stickytape-green" cardsPerRow={3} />
      </div>
    </div>
  );
}
