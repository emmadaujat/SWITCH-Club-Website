import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Link from "next/link";

export default function JoinTheClubPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-7 ">
        <h2 className=" text-lg lg:text-2xl font-extrabold uppercase text-brand-purple">
          <span className="text-brand-pink text-xl lg:text-2xl mr-3">★</span>Become a member
          <span className="text-brand-pink text-xl lg:text-2xl ml-3">★</span>
        </h2>
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          How to Join
        </h1>
        <p className="max-w-xs lg:max-w-3xl text-center text-xs lg:text-base text-black">
          Join the community to help continue to empower Women+ in tech!
        </p>
      </div>

      <div className="mx-auto max-w-5xl py-2 lg:py-4 px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* ---------------- CARD 1 ---------------- */}
        <TiltedCard rotation={3} bgColor="bg-white">
          <div className="pt-2 lg:pt-4 flex rotate-2">
            <h1 className="mb-1 lg:mb-3 font-black uppercase text-3xl lg:text-5xl text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black]">
              01
            </h1>
          </div>
          <h2 className="font-bold text-sm lg:text-xl ">Sign up online via Rubric</h2>
          <p className="mt-1 font-normal text-xs lg:text-md">
            Fill out our quick membership form, it only takes 2 minutes!
          </p>
          {/* BUTTON */}
          <div className=" mt-4 justify-end flex">
            <Link
              href="https://campus.hellorubric.com/?s=10199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChunkyButton variant="primary" trailingSymbol="→">
                Join the club
              </ChunkyButton>
            </Link>
          </div>
        </TiltedCard>

        {/* ---------------- CARD 2 ---------------- */}
        <TiltedCard rotation={-3} bgColor="bg-brand-lime">
          <div className="pt-2 lg:pt-4 flex rotate-2">
            <h1 className="mb-1 lg:mb-3 font-black uppercase text-brand-lime text-3xl lg:text-5xl [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black]">
              02
            </h1>
          </div>
          <h2 className="font-bold text-sm lg:text-xl ">Follow us on Instagram</h2>
          <p className="mt-1 text-xs lg:text-md">
            See what SWITCH have been up to and whats happening up soon!
          </p>
          {/* BUTTON */}
          <div className=" mt-3 justify-end flex">
            <Link
              href="https://www.instagram.com/rmitswitch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChunkyButton variant="primary" trailingSymbol="→">
                Follow us
              </ChunkyButton>
            </Link>
          </div>
        </TiltedCard>

        {/* ---------------- CARD 3 ---------------- */}
        <TiltedCard rotation={4} bgColor="bg-brand-pink">
          <div className=" pt-2 lg:pt-4 flex rotate-2">
            {/*  Heading */}
            <h1 className="mb-1 lg:mb-3 font-black uppercase text-brand-pink text-3xl lg:text-5xl [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black]">
              03
            </h1>
          </div>
          {/* BODY TEXT */}
          <h2 className="font-bold text-sm lg:text-xl ">Come to an event</h2>
          <p className="mt-1 font-normal text-xs lg:text-md">
            Meet the team and community in person
          </p>
          {/* BUTTON */}
          <div className=" mt-3 justify-end flex">
            <Link
              href="https://campus.hellorubric.com/?s=10199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChunkyButton variant="other" trailingSymbol="→">
                See Events
              </ChunkyButton>
            </Link>
          </div>
        </TiltedCard>
      </div>

      <div className=" flex flex-col items-center mt-4 p-8 ">
        <h3 className="font-bold text-lg lg:text-2xl ">Having issues joining SWITCH?</h3>
        <Link href={"/contact-us"}>
          <button className="mt-3 bg-brand-pink text-black text-base lg:text-2xl hover:bg-white uppercase font-bold rounded-lg border-2 border-black p-3 shadow-[4px_4px_0px_#000] transition">
            CONTACT US →
          </button>
        </Link>
      </div>
    </div>
  );
}
