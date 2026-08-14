import Image from "next/image";
import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";

export default function WhoWeArePage() {
  return (
    <div className=" bg-brand-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl mb-10 py-10 ">
        {/* TOP SECTION: PAGE TITLE */}
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">ABOUT SWITCH</h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:6px_black] [paint-order:stroke_fill]">
          WHO ARE WE...
        </h1>
        {/* TOP SECTION: OUR MISSION */}
        <div className="mt-20 mx-auto max-w-3xl">
          <TiltedCard rotation={1} bgColor="bg-brand-cream">
            <div className="absolute -top-2 left-5 -translate-x-1">
              {" "}
              <Sticker rotation={6} />
            </div>
            <div className="absolute -top-2 right-5 -translate-x-1">
              {" "}
              <Sticker rotation={-6} />
            </div>
            {/* OUR MISSION - HEADING + STARS */}
            <div className="p-2 mt-5 flex relative">
              {/* STARS */}
              <div className="absolute -top-0 right-5 text-brand-lime text-4xl rotation-6">★</div>
              <div className="absolute -top-4 right-15 text-brand-pink text-2xl rotation-6">★</div>
              {/* OUR MISSION - Heading */}
              <div className="rounded-full border-2 border-black bg-brand-pink rotate-4 p-2">
                <h3 className="font-bold uppercase text-2xl text-black">SWITCH's mission</h3>
              </div>
            </div>
            {/* OUR MISSION - BODY TEXT */}
            <p className="p-4 mb-10 font-bold text-lg text-black">
              “We're building a community where women and underrepresented people in tech can learn,
              connect, and thrive together.”
            </p>
          </TiltedCard>
        </div>
      </div>

      {/* MIDDLE SECTION: OUR VALUES */}
      <div className=" bg-brand-purple py-10">
        {/* OUR VALUES - HEADING */}
        <div className="mb-5 flex flex-col items-center">
          <div className="rounded-full border-2 border-black bg-brand-lime p-2">
            <h3 className="font-bold uppercase text-2xl text-black">✦ OUR VALUES ✦</h3>
          </div>
        </div>

        {/* OUR VALUES - CARDS */}
        <div className="mx-auto max-w-7xl py-4 grid grid-cols-3 gap-15 ">
          <TiltedCard rotation={3} bgColor="bg-brand-cream">
            {/* CARD 1 - HEADING */}
            <div className="p-4">
              <p className="mb-3 font-bold text-xl text-black">
                {" "}
                <span className="text-2xl mr-1">💜</span> Inclusion
              </p>
              {/* CARD 1 - BODY TEXT */}
              <p className="text-md text-black">
                Everyone belongs here, regardless of background or experience.{" "}
              </p>
            </div>
          </TiltedCard>

          <TiltedCard rotation={-3} bgColor="bg-brand-lime">
            {/* CARD 2 - HEADING */}
            <div className="p-4">
              <p className="mb-3 font-bold text-xl text-black">
                <span className="text-3xl mr-2"> 🏘️</span>Community
              </p>
              {/* CARD 2 - BODY TEXT */}
              <p className="text-md text-black">
                We grow stronger by learning and supporting each other.{" "}
              </p>
            </div>
          </TiltedCard>

          <TiltedCard rotation={4} bgColor="bg-brand-pink">
            {/* CARD 3 - HEADING */}
            <div className="p-4">
              <p className="mb-3 font-bold text-xl text-black">
                {" "}
                <span className="text-3xl mr-1"> ⚡</span>Empowerment
              </p>
              {/* CARD 3 - BODY TEXT */}
              <p className="text-md text-black">
                Building confidence and skills for careers in tech.{" "}
              </p>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* BOTTOM SECTION: OUR GOALS */}
      <div className=" bg-brand-light-purple p-20">
        <div className="relative mx-auto max-w-2xl">
          <TiltedCard rotation={1} bgColor="bg-brand-purple">
            {/* BOTTOM SECTION: STICKY TAPE */}
            <div className="absolute -top-3 left-5 -translate-x-1">
              {" "}
              <Sticker rotation={2} bgColor="bg-stickytape-green" />
            </div>
            <div className="absolute -top-3 right-5 -translate-x-1">
              {" "}
              <Sticker rotation={-2} bgColor="bg-stickytape-green" />
            </div>

            {/* OUR GOALS - Heading with stars*/}
            <div className="p-2  flex relative mb-5 flex flex-col items-center">
              {/* OUR GOALS - stars*/}
              <div className="absolute -top-0 left-55 text-brand-lime text-xl rotation-6">★</div>
              <div className="absolute -bottom-0 left-48 text-brand-lime text-4xl rotation-6">
                ★
              </div>

              {/* OUR GOALS - Heading */}
              <div className="rounded-full border-2 border-black bg-white p-2">
                <h3 className="font-bold uppercase text-2xl text-black">OUR GOALS</h3>
              </div>
            </div>

            {/* OUR GOALS - BODY TEXT */}
            <div className=" px-10 py-5 font-semibold text-xl text-white">
              <p>
                <span className="text-brand-pink text-3xl mr-3 [-webkit-text-stroke:1px_black]">
                  ★
                </span>
                Continue to build a supportive community{" "}
              </p>
              <p>
                <span className="text-brand-pink text-3xl mr-3 [-webkit-text-stroke:1px_black]">
                  ★
                </span>
                Fun social events, build friendships
              </p>
              <p>
                <span className="text-brand-pink text-3xl mr-3 [-webkit-text-stroke:1px_black] ">
                  ★
                </span>
                Continue to build a supportive community{" "}
              </p>
            </div>

            {/* BUTTONS */}
            <div className=" mt-6 justify-end flex">
              <ChunkyButton variant="other" trailingSymbol="→" href="/how-to-join">
                JOIN THE MOVEMENT
              </ChunkyButton>
            </div>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
