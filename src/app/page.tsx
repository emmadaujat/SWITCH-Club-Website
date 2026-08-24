import Image from "next/image";
import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import eventsData from "@/data/events.json";
import { UpcomingEvent } from "@/types/events";
import sponsorsData from "@/data/sponsors.json";
import { SponsorTier, Sponsor } from "@/types/sponsors";
import { TeamMember } from "@/components/ui/TeamMemberCard";
import Link from "next/link";
import SponsorGrid from "@/components/ui/SponsorGrid";

export default function Home() {
  const upcomingEvents = eventsData.upcoming as UpcomingEvent[];
  // feature the next upcoming event (first in the array)
  const featuredEvent = upcomingEvents[0];

  const sponsorRotations = [3, -2, 6, -6, 4, -4];

  const sponsors = sponsorsData.sponsors as Sponsor[];

  return (
    <div className=" bg-brand-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl mb-10 px-4 py-10 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TOP LEFT: text + buttons */}
        <div className=" items-center text-center flex flex-col">
          <h1 className=" text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:6px_black] [paint-order:stroke_fill]">
            SWITCH
          </h1>

          <div className="mt-6 rounded-lg border-2 border-black bg-white p-4 shadow-[4px_4px_0px_#000] relative max-w-sm md:max-w-none">
            {/* sticker hidden on mobile — relies on a fixed pixel offset that only makes sense on wide screens */}
            <div className="hidden md:block absolute -top-3 left-110 -translate-x-0">
              {" "}
              <Sticker rotation={15} bgColor="bg-stickytape-pink" size="w-25 h-6" />
            </div>

            <p className="font-medium text-sm md:text-13px text-brand-purple-dark">
              Society for women and gender diverse students in technology @ RMIT
            </p>
          </div>

          {/* green banner */}
          <div className="mt-6 flex flex-col items-center self-stretch">
            <div className="rounded-full border-2 border-black bg-brand-lime p-2">
              <p className="font-bold uppercase text-lg md:text-2xl text-black text-center">
                ✦ NEW MEMBERS WELCOME ✦
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 md:mt-30 flex flex-col sm:flex-row gap-6 relative w-full sm:w-auto">
            {/* STARS — decorative, positioned relative to desktop button spacing, hide on mobile */}
            <div className="hidden md:block absolute -top-12 right-86 text-brand-purple text-4xl">
              ★
            </div>
            <div className="hidden md:block absolute -top-2 right-92 text-brand-purple text-2xl">
              ★
            </div>

            <ChunkyButton variant="primary" trailingSymbol="★" href="/how-to-join">
              JOIN THE CLUB
            </ChunkyButton>
            <ChunkyButton variant="secondary" trailingSymbol="→" href="/events">
              SEE EVENTS
            </ChunkyButton>
          </div>
        </div>

        {/* TOP RIGHT */}
        <div>
          <div className="mx-auto md:ml-auto md:mr-0 w-fit rounded-lg border-2 border-black bg-brand-pink p-3">
            <p className="text-black text-lg md:text-xl font-bold"> Current Members: 350</p>
          </div>

          {/* MOBILE: simple stacked polaroids, no absolute positioning */}
          <div className="flex gap-6 overflow-x-auto px-6 py-6 md:hidden snap-x snap-mandatory">
            <div className="shrink-0 snap-center">
              <TiltedCard rotation={-4} bgColor="bg-white">
                <img
                  src="/pics/events/notion-workshop-sem12026.jpg"
                  alt="workshop vibes"
                  className="w-52 h-32 object-cover"
                />
                <p className="pt-2 font-semibold text-xs">workshop vibes 💻 ✨</p>
              </TiltedCard>
            </div>

            <div className="shrink-0 snap-center">
              <TiltedCard rotation={3} bgColor="bg-white">
                <img
                  src="/pics/events/team-bonding-sem12026.jpg"
                  alt="the switch crew"
                  className="w-52 h-32 object-cover"
                />
                <p className="pt-2 font-semibold text-xs">the switch crew ✨</p>
              </TiltedCard>
            </div>

            <div className="shrink-0 snap-center">
              <TiltedCard rotation={-3} bgColor="bg-white">
                <img
                  src="/pics/events/interuni-sem12026.jpg"
                  alt="Inter-Uni Industry Networking 2026"
                  className="w-52 h-32 object-cover"
                />
                <p className="pt-2 w-35 font-semibold text-xs break-words">
                  Inter-Uni Industry Networking 2026
                </p>
              </TiltedCard>
            </div>
          </div>

          {/* DESKTOP: layout */}
          {/* STARS */}
          <div className="hidden md:block relative h-[520px] mx-auto">
            <div className="absolute -top-2 right-162 -translate-x-1 -translate-y-3 text-brand-lime text-3xl">
              ★
            </div>
            <div className="absolute -top-0 right-150 -translate-y-10 text-brand-pink text-4xl">
              ★
            </div>
            <div className="absolute -top-0 right-155 -translate-x-1 text-brand-pink text-xl">
              ★
            </div>

            {/* TOP RIGHT: photo polaroid 1 */}
            <div className="absolute top-3 right-70 w-80">
              <TiltedCard rotation={-7} bgColor="bg-white">
                <div className="absolute -top-3 right-4 -translate-x-1">
                  {" "}
                  <Sticker rotation={1} bgColor="bg-stickytape-pink" />
                </div>
                <img
                  src="/pics/events/team-bonding-sem12026.jpg"
                  alt="the switch crew"
                  className="w-80 h-46 object-cover"
                />
                <p className="pt-2 font-semibold text-sm">the switch crew ✨</p>
              </TiltedCard>
            </div>

            {/* TOP RIGHT: photo polaroid 2 */}
            <div className="absolute top-18 left-80 w-80">
              <TiltedCard rotation={10} bgColor="bg-white">
                <div className="absolute -top-3 left-6 -translate-x-0">
                  {" "}
                  <Sticker rotation={1} bgColor="bg-stickytape-green" />
                </div>
                <img
                  src="/pics/events/notion-workshop-sem12026.jpg"
                  alt="workshop vibes"
                  className="w-80 h-46 object-cover"
                />
                <p className="pt-2 font-semibold text-sm">workshop vibes 💻</p>
              </TiltedCard>
            </div>

            {/* TOP RIGHT: photo polaroid 3 */}
            <div className="absolute bottom-0 right-63 w-80">
              <TiltedCard rotation={5} bgColor="bg-white">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {" "}
                  <Sticker rotation={1} bgColor="bg-stickytape-purple" />
                </div>
                <img
                  src="/pics/events/interuni-sem12026.jpg"
                  alt="Inter-Uni Industry Networking 2026"
                  className="w-80 h-46 object-cover"
                />
                <p className="pt-2 font-semibold text-sm">Inter-Uni Industry Networking 2026</p>
              </TiltedCard>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION: OUR MISSION */}
      <div className=" bg-brand-purple p-6 md:p-10">
        {/* Layout wrapper — width/centering stays here */}
        <div className="relative mx-auto max-w-xl">
          <TiltedCard rotation={2} bgColor="bg-brand-cream">
            <div className="hidden md:block absolute -top-2 left-5 -translate-x-1">
              {" "}
              <Sticker rotation={6} />
            </div>
            <div className="hidden md:block absolute -top-2 right-5 -translate-x-1">
              {" "}
              <Sticker rotation={-2} />
            </div>

            {/* OUR MISSION - Heading with stars*/}
            <div className="p-2 mt-5 flex rotate-4 relative">
              <div className="hidden md:block absolute -top-2 right-5 text-brand-lime text-4xl rotation-6">
                ★
              </div>
              <div className="hidden md:block absolute -top-6 right-15 text-brand-pink text-2xl rotation-6">
                ★
              </div>

              <div className="rounded-full border-2 border-black bg-brand-pink p-2">
                <p className="font-bold uppercase text-lg md:text-xl text-black">our mission</p>
              </div>
            </div>

            {/* OUR MISSION - BODY TEXT */}
            <p className="p-2 font-bold text-base md:text-lg text-black">
              “We're building a community where women and underrepresented people in tech can learn,
              connect, and thrive together.”
            </p>

            {/* BUTTONS */}
            <div className=" mt-6 justify-end flex">
              <ChunkyButton variant="other" trailingSymbol="→" href="/who-are-we">
                Read our story
              </ChunkyButton>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* BOTTOM SECTION: UPCOMING EVENT */}
      <div className=" bg-brand-purple-LIGHT p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          {featuredEvent ? (
            <TiltedCard rotation={1} bgColor="bg-brand-lime">
              <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2">
                {" "}
                <Sticker rotation={1} bgColor="bg-stickytape-pink" size="w-40 h-8" />
              </div>

              {/* Two-column split now lives INSIDE the card */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                {/* LEFT: heading + body + button, grouped together */}
                <div className="flex flex-col">
                  <div className="p-2 mt-5 flex rotate-4">
                    {/* UPCOMING EVENT - Heading */}
                    <div className="rounded-full border-2 border-black bg-white p-2 rotate-1 self-start ">
                      <p className="font-bold uppercase text-lg md:text-xl text-black">
                        upcoming event 🚨
                      </p>
                    </div>
                  </div>

                  {/* UPCOMING EVENT - BODY TEXT */}
                  <div className="p-2">
                    <p className="font-bold text-xl md:text-2xl ">{featuredEvent.name}</p>
                    <p>📅 {featuredEvent.date}</p>
                    <p> 📍 {featuredEvent.location} </p>
                    <p className="font-semibold mt-2 text-md">
                      Come have fun with us and meet new people!
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className=" p-2 justify-center flex">
                    <Link href={featuredEvent.ticketUrl} target="_blank" rel="noopener noreferrer">
                      <ChunkyButton variant="primary" trailingSymbol="→">
                        buy a ticket now
                      </ChunkyButton>
                    </Link>
                  </div>
                </div>

                {/* RIGHT: photo placeholder */}
                <div className="m-4 rounded-lg flex items-center justify-center">
                  <img
                    className="h-40 md:h-50 w-auto "
                    alt={featuredEvent.name}
                    src="/pics/events/welcome-night-sem12026.jpg"
                  />
                </div>
              </div>
            </TiltedCard>
          ) : (
            <p className="text-center">No upcoming events right now - check back soon!</p>
          )}
        </div>
      </div>
      {/* CURRENT SPONSORS */}
      <div className="px-4 py-10 md:px-0 bg-brand-purple">
        <div className="mb-10 flex flex-row justify-center ">
          <span className="text-brand-pink text-4xl mr-2">★</span>
          <div className="rounded-full border-2 border-black bg-brand-lime py-2 px-5">
            <h3 className="font-extrabold uppercase text-xl text-black">
              With thanks to our Sponsors
            </h3>
          </div>
          <span className="text-brand-pink text-4xl ml-2">★</span>
        </div>
        <SponsorGrid sponsors={sponsors} cardsPerRow={3} />
        <div className="flex justify-center mt-10">
          <ChunkyButton variant="other" trailingSymbol="→" href={"/sponsorships"}>
            Become a sponsor today
          </ChunkyButton>
        </div>
      </div>
    </div>
  );
}
