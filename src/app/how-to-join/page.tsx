import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Link from "next/link";

export default function JoinTheClubPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-10 ">
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">
          <span className="text-brand-pink text-3xl mr-3">★</span>Become a member
          <span className="text-brand-pink text-3xl ml-3">★</span>
        </h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          How to Join
        </h1>
        <p>Join the community to help continue to empower Women+ in tech!</p>
      </div>

      <div className="mx-auto max-w-6xl py-4 grid grid-cols-3 gap-15 ">
        {/* ---------------- CARD 1 ---------------- */}
        <TiltedCard rotation={3} bgColor="bg-white">
          <div className="pl-4 pt-4 flex rotate-2">
            <h1 className="font-black uppercase text-5xl text-white [-webkit-text-stroke:2px_black]">
              01
            </h1>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl ">Sign up online via Rubric</h2>
            <p>Fill out our quick membership form, it only takes 2 minutes!</p>
          </div>
          {/* BUTTON */}
          {/* TODO: make all links open in seperate tab */}
          <div className=" m-5 justify-end flex">
            <ChunkyButton
              variant="primary"
              trailingSymbol="→"
              href={"https://campus.hellorubric.com/?s=10199"}
            >
              Join the club
            </ChunkyButton>
          </div>
        </TiltedCard>

        {/* ---------------- CARD 2 ---------------- */}
        <TiltedCard rotation={-3} bgColor="bg-brand-lime">
          <div className="pl-4 pt-4 flex rotate-2">
            <h1 className="font-black uppercase text-5xl text-brand-lime [-webkit-text-stroke:2px_black]">
              02
            </h1>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl ">Join our Discord</h2>
            <p>Get access to announcements, chats and event links</p>
          </div>
          {/* BUTTON */}
          {/* TODO: make all links open in seperate tab */}
          <div className=" m-5 justify-end flex">
            <ChunkyButton
              variant="primary"
              trailingSymbol="→"
              href="https://discord.com/invite/K3qDPGx9Xs"
            >
              Join discord
            </ChunkyButton>
          </div>
        </TiltedCard>

        {/* ---------------- CARD 3 ---------------- */}
        <TiltedCard rotation={4} bgColor="bg-brand-pink">
          <div className="pl-4 pt-4 flex rotate-2">
            {/*  Heading */}
            <h1 className="font-black uppercase text-5xl text-brand-pink [-webkit-text-stroke:2px_black]">
              03
            </h1>
          </div>
          {/* BODY TEXT */}
          <div className="p-4">
            <h2 className="font-bold text-xl ">Come to an event</h2>
            <p>Meet the team and community in person</p>
          </div>
          {/* BUTTON */}
          {/* TODO: make all links open in seperate tab */}

          <div className=" m-5 justify-end flex">
            <ChunkyButton variant="other" trailingSymbol="→" href="/how-to-join">
              Join the club
            </ChunkyButton>
          </div>
        </TiltedCard>
      </div>

      <div className=" flex flex-col items-center mt-10 p-10 ">
        <h3 className="font-bold text-2xl ">Having issues joining SWITCH?</h3>
        <Link href={"/contact-us"}>
          <button className="mt-5 bg-brand-pink text-black text-2xl hover:bg-white uppercase font-bold rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_#000] transition">
            CONTACT US →
          </button>
        </Link>
      </div>
    </div>
  );
}
