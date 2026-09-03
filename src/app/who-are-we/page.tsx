import Image from "next/image";
import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import SectionBadge from "@/components/ui/SectionBadge";

export default function WhoWeArePage() {
  return (
    <div className=" bg-brand-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl mb-10 p-10 ">
        {/* TOP SECTION: PAGE TITLE */}
        <h2 className=" text-xl lg:text-2xl font-extrabold uppercase text-brand-purple">
          ABOUT SWITCH
        </h2>
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          WHO ARE WE...
        </h1>
        {/* TOP SECTION: OUR MISSION */}
        <div className="mt-15 mx-auto max-w-3xl">
          <TiltedCard rotation={1} bgColor="bg-brand-cream">
            <div className="absolute -top-2 left-5 -translate-x-1">
              <Sticker rotation={6} />
            </div>
            <div className="absolute -top-2 right-5 -translate-x-1">
              <Sticker rotation={-6} />
            </div>
            {/* OUR MISSION - HEADING + STARS */}
            <div className="p-2 mt-5 flex relative">
              {/* STARS */}
              <div className="absolute -top-0 right-5 text-brand-lime text-4xl rotation-6">★</div>
              <div className="absolute -top-4 right-15 text-brand-pink text-2xl rotation-6">★</div>
              {/* OUR MISSION - Heading */}
              <SectionBadge
                bgColor="bg-brand-pink"
                textSize="text-xl lg:text-2xl"
                rotation="rotate-4"
                as="h3"
              >
                SWITCH's mission
              </SectionBadge>
            </div>
            {/* OUR MISSION - BODY TEXT */}
            <p className="p-4 mb-10 font-semibold text-md lg:text-lg text-black">
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
          <SectionBadge bgColor="bg-brand-lime" textSize="text-xl lg:text-2xl" as="h3">
            ✦ OUR VALUES ✦{" "}
          </SectionBadge>
        </div>

        {/* OUR VALUES - CARDS */}
        <div className="mx-auto max-w-5xl py-4 px-10 grid grid-cols-2 lg:grid-cols-3 gap-10 ">
          <TiltedCard rotation={3} bgColor="bg-brand-cream">
            {/* CARD 1 - HEADING */}
            <div className="p-2 lg:p-4">
              <p className="mb-3 font-bold text-md lg:text-xl text-black">
                <span className="text-xl lg:text-2xl mr-1">💜</span> Inclusion
              </p>
              {/* CARD 1 - BODY TEXT */}
              <p className="text-sm lg:text-md text-black">
                Everyone belongs here, regardless of background or experience.{" "}
              </p>
            </div>
          </TiltedCard>

          <TiltedCard rotation={-3} bgColor="bg-brand-lime">
            {/* CARD 2 - HEADING */}
            <div className="p-2 lg:p-4">
              <p className="mb-3 font-bold text-md lg:text-xl text-black">
                <span className="text-xl lg:text-2xl mr-2"> 🏘️</span>Community
              </p>
              {/* CARD 2 - BODY TEXT */}
              <p className="text-sm lg:text-md text-black">
                We grow stronger by learning and supporting each other.{" "}
              </p>
            </div>
          </TiltedCard>

          <TiltedCard rotation={4} bgColor="bg-brand-pink">
            {/* CARD 3 - HEADING */}
            <div className="p-2 lg:p-4">
              <p className="mb-3 font-bold text-md lg:text-xl text-black">
                <span className="text-xl lg:text-2xl mr-1"> ⚡</span>Empowerment
              </p>
              {/* CARD 3 - BODY TEXT */}
              <p className="text-sm lg:text-md text-black">
                Building confidence and skills for careers in tech.{" "}
              </p>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* BOTTOM SECTION: OUR GOALS */}
      <div className="p-20">
        <div className="relative mx-auto max-w-2xl">
          <TiltedCard rotation={1} bgColor="bg-brand-purple">
            {/* BOTTOM SECTION: STICKY TAPE */}
            <div className="absolute -top-3 left-5 -translate-x-1">
              <Sticker rotation={2} bgColor="bg-stickytape-green" />
            </div>
            <div className="absolute -top-3 right-5 -translate-x-1">
              <Sticker rotation={-2} bgColor="bg-stickytape-green" />
            </div>

            {/* OUR GOALS - Heading with stars*/}
            <div className="p-2  flex relative mb-5 flex flex-col items-center">
              {/* OUR GOALS - stars*/}
              <div className="hidden absolute -top-0 left-55 text-brand-lime text-xl rotation-6">
                ★
              </div>
              <div className="hidden absolute -bottom-0 left-48 text-brand-lime text-4xl rotation-6">
                ★
              </div>

              {/* OUR GOALS - Heading */}
              <SectionBadge bgColor="bg-white" textSize="text-xl lg:text-2xl" as="h3">
                OUR GOALS{" "}
              </SectionBadge>
            </div>

            {/* OUR GOALS - BODY TEXT */}
            <div className=" px-2 lg:px-15 font-semibold text-white">
              <p className="text-md lg:text-xl">
                <span className="text-brand-pink text-xl lg:text-3xl mr-3 [-webkit-text-stroke:1px_black]">
                  ★
                </span>
                Continue to build a supportive community
              </p>
              <p className="text-md lg:text-xl">
                <span className="text-brand-pink text-xl lg:text-3xl mr-3 [-webkit-text-stroke:1px_black]">
                  ★
                </span>
                Fun social events, build friendships
              </p>
              <p className="text-md lg:text-xl">
                <span className="text-brand-pink text-xl lg:text-3xl mr-3 [-webkit-text-stroke:1px_black] ">
                  ★
                </span>
                Connect with industry professionals
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
