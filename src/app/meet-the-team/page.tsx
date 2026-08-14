import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import Ticker from "@/components/ui/Ticker-meet-the-team";

export default function MeetTheTeamPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* TOP SECTION */}
      <div className=" flex flex-col items-center mb-10 py-10 ">
        {/* TOP SECTION: PAGE TITLE */}
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">
          The people behind SWITCH
        </h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Meet the team
        </h1>
        <p>Placeholder intro line about the committee and what they do.</p>
      </div>

      {/* SECTION 1: EXECUTIVE COMMITTEE */}
      <div className="bg-brand-purple px-10 pt-10 pb-20">
        {/* HEADING */}
        <div className="mb-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-pink px-6">
            <h3 className="font-extrabold uppercase text-2xl text-black">EXECUTIVE COMMITTEE</h3>
          </div>
        </div>
        {/* CARDS - EXECUTIVE COMMITTEE*/}
        <div className="max-w-7xl px-20 grid grid-cols-4 gap-40 ">
          {/* CARDS - President */}
          <div className="w-70">
            <TiltedCard rotation={5} bgColor="bg-white">
              <div className="absolute -top-3 right-30">
                {" "}
                <Sticker rotation={0} bgColor="bg-stickytape-pink" />
              </div>
              <img
                src="/pics/team-bonding-sem12026.jpg"
                alt="president-pic"
                className="w-70 object-cover"
              />
              <p className="pt-2 font-semibold text-md">Navya</p>
              <p className=" text-sm">President</p>
            </TiltedCard>
          </div>
          {/* CARDS - Vice President */}
          <div className="w-70">
            <TiltedCard rotation={-5} bgColor="bg-white">
              <div className="absolute -top-3 right-30">
                {" "}
                <Sticker rotation={0} bgColor="bg-stickytape-pink" />
              </div>
              <img
                src="/pics/team-bonding-sem12026.jpg"
                alt="president-pic"
                className="w-70 object-cover"
              />
              <p className="pt-2 font-semibold text-md">Julie</p>
              <p className=" text-sm">Vice President</p>
            </TiltedCard>
          </div>
          {/* CARDS - Secretary */}
          <div className="w-70">
            <TiltedCard rotation={6} bgColor="bg-white">
              <div className="absolute -top-3 right-30">
                {" "}
                <Sticker rotation={0} bgColor="bg-stickytape-pink" />
              </div>
              <img
                src="/pics/team-bonding-sem12026.jpg"
                alt="president-pic"
                className="w-70 object-cover"
              />
              <p className="pt-2 font-semibold text-md">Prisha</p>
              <p className=" text-sm">Secretary</p>
            </TiltedCard>
          </div>
          {/* CARDS - Treasurer */}
          <div className="w-70">
            <TiltedCard rotation={-6} bgColor="bg-white">
              <div className="absolute -top-3 right-30">
                {" "}
                <Sticker rotation={0} bgColor="bg-stickytape-pink" />
              </div>
              <img
                src="/pics/team-bonding-sem12026.jpg"
                alt="president-pic"
                className="w-70 object-cover"
              />
              <p className="pt-2 font-semibold text-md">Emma</p>
              <p className=" text-sm">Treasurer</p>
            </TiltedCard>
          </div>
        </div>
      </div>

      {/* SECTION 2: GENERAL COMITTEE  */}
      {/* HEADING */}
      <div className="mb-10">
        <div className="p-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-pink px-6">
            <h3 className="font-extrabold uppercase text-2xl text-black">GENERAL COMMITTEE</h3>
          </div>
        </div>
        {/* SOCIAL MEDIA SECTION */}
        {/* TICKER */}
        <Ticker phrases={["SOCIAL MEDIA"]} bgColor="bg-brand-lime" textColor="text-black" />
      </div>
      {/* CARDS - SOCIAL MEDIA*/}
      {/* TODO: fix the layout so cards are centred and for it to easily be able to grow if more is added in future */}
      <div className="px-50 grid grid-cols-1 md:grid-cols-3 mb-20 gap-10">
        {/* CARDS - Social Media 1 */}
        <div className="w-70">
          <TiltedCard rotation={-5} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Tanisha</p>
            <p className=" text-sm">Social Media Coordinator </p>
          </TiltedCard>
        </div>
        {/* CARDS - Social Media 2 */}
        <div className="w-70">
          <TiltedCard rotation={5} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Audrey</p>
            <p className=" text-sm">Social Media Member</p>
          </TiltedCard>
        </div>
        {/* CARDS - Social Media 3 */}
        <div className="w-70">
          <TiltedCard rotation={-6} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Bao Bao</p>
            <p className=" text-sm">Social Media Member</p>
          </TiltedCard>
        </div>
      </div>

      {/* EVENTS MANAGEMENT SECTION */}
      {/* TICKER */}
      <div className="mb-10">
        <Ticker phrases={["EVENT MANAGEMENT"]} bgColor="bg-brand-lime" textColor="text-black" />
      </div>
      <div className="px-50 grid grid-cols-1 md:grid-cols-3 mb-20 gap-10">
        {/* CARDS - Events 1 */}
        <div className="w-70">
          <TiltedCard rotation={5} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Dhwani</p>
            <p className=" text-sm">Events Coordinator</p>
          </TiltedCard>
        </div>
        {/* CARDS - Events 2 */}
        <div className="w-70">
          <TiltedCard rotation={-5} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Bianca</p>
            <p className=" text-sm">Events Coordinator</p>
          </TiltedCard>
        </div>
        {/* CARDS - Events 3 */}
        <div className="w-70">
          <TiltedCard rotation={6} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Samarpita</p>
            <p className=" text-sm">Events Member</p>
          </TiltedCard>
        </div>
        {/* CARDS - Events 4 */}
        <div className="w-70">
          <TiltedCard rotation={-6} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Sanika</p>
            <p className=" text-sm">Events Member</p>
          </TiltedCard>
        </div>
        {/* CARDS - Events 5 */}
        <div className="w-70">
          <TiltedCard rotation={8} bgColor="bg-white">
            <div className="absolute -top-3 right-30">
              {" "}
              <Sticker rotation={0} bgColor="bg-stickytape-green" />
            </div>
            <img
              src="/pics/team-bonding-sem12026.jpg"
              alt="president-pic"
              className="w-70 object-cover"
            />
            <p className="pt-2 font-semibold text-md">Samanali</p>
            <p className=" text-sm">Events Member</p>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
