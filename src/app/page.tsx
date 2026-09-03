import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import eventsData from "@/data/events.json";
import { ClubEvent } from "@/types/events";
import sponsorsData from "@/data/sponsors.json";
import { Sponsor } from "@/types/sponsors";
import Link from "next/link";
import SponsorGrid from "@/components/ui/SponsorGrid";
import { getUpcomingEvents } from "@/helpers/events";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Home() {
  const allEvents = eventsData.events as ClubEvent[];
  const upcomingEvents = getUpcomingEvents(allEvents);
  const featuredEvent = upcomingEvents[0];

  const sponsors = sponsorsData.sponsors as Sponsor[];

  return (
    <div className=" bg-brand-purple-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl mb-10 px-4 py-10 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TOP LEFT: text + buttons */}
        <div className=" items-center text-center flex flex-col">
          <h1 className=" text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
            SWITCH
          </h1>

          <div className="mt-4 rounded-lg border-2 border-black bg-white p-2 md:p-3 lg:p-4 shadow-[4px_4px_0px_#000] relative max-w-sm md:max-w-none">
            <div className=" md:block absolute -top-2 left-80 sm:left-100 md:left-110 -translate-x-0">
              <Sticker rotation={15} bgColor="bg-stickytape-pink" size="w-13 h-4 lg:w-25 lg:h-6" />
            </div>

            <p className="font-medium text-xs md:text-sm lg:text-md text-brand-purple-dark">
              Society for women and gender diverse students in technology @ RMIT
            </p>
          </div>

          {/* green banner */}
          <div className="mt-4 flex flex-col items-center self-stretch">
            <div className="rounded-full border-2 border-black bg-brand-lime p-2">
              <p className="font-bold uppercase text-md md:text-lg lg:text-2xl text-black text-center">
                ✦ NEW MEMBERS WELCOME ✦
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 md:mt-20 lg:mt-30 md:mt-30 flex flex-col sm:flex-row gap-4 lg:gap-6 relative w-full sm:w-auto">
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
          <div className="mx-auto md:ml-auto md:mr-0 w-fit rounded-lg border-2 border-black bg-brand-pink p-2">
            <p className="text-black text-md md:text-lg lg:text-xl font-bold">
              {" "}
              Current Members: 350
            </p>
          </div>

          {/* MOBILE */}
          <div className="flex gap-6 overflow-x-auto px-6 py-10 md:hidden snap-x snap-mandatory">
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
      <div className=" bg-brand-purple p-15 md:p-10">
        {/* Layout wrapper */}
        <div className="relative mx-auto max-w-xl">
          <TiltedCard rotation={2} bgColor="bg-brand-cream">
            <div className=" md:block absolute -top-2 left-5 -translate-x-1">
              {" "}
              <Sticker rotation={6} />
            </div>
            <div className=" md:block absolute -top-2 right-5 -translate-x-1">
              {" "}
              <Sticker rotation={-2} />
            </div>

            {/* OUR MISSION - Heading with stars*/}
            <div className="p-2 mt-4 flex rotate-4 relative">
              <div className=" md:block absolute -top-2 right-5 text-brand-lime text-4xl rotation-6">
                ★
              </div>
              <div className=" md:block absolute -top-6 right-15 text-brand-pink text-2xl rotation-6">
                ★
              </div>
              <SectionBadge bgColor="bg-brand-pink" textSize="text-md md:text-lg lg:text-xl">
                our mission
              </SectionBadge>
            </div>

            {/* OUR MISSION - BODY TEXT */}
            <p className="p-2 font-semibold text-xs md:text-md lg:text-lg text-black">
              “We're building a community where women and underrepresented people in tech can learn,
              connect, and thrive together.”
            </p>

            {/* BUTTONS */}
            <div className=" mt-4 justify-end flex">
              <ChunkyButton variant="other" trailingSymbol="→" href="/who-are-we">
                Read our story
              </ChunkyButton>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* BOTTOM SECTION: UPCOMING EVENT */}
      <div className=" bg-brand-purple-LIGHT p-8 lg:p-10">
        <div className="mx-auto max-w-4xl">
          {featuredEvent ? (
            <TiltedCard rotation={1} bgColor="bg-brand-lime">
              <div className=" md:block absolute -top-4 left-1/2 -translate-x-1/2">
                {" "}
                <Sticker rotation={1} bgColor="bg-stickytape-pink" size="w-40 h-8" />
              </div>

              {/* Two-column split */}
              {/* LEFT: heading + body + button, grouped together */}
              <div className="flex flex-col">
                <div className="p-1 md:p-4 mt-2 flex rotate-4">
                  {/* UPCOMING EVENT - Heading */}
                  <SectionBadge
                    bgColor="bg-white"
                    rotation="rotate-1"
                    textSize="text-xs md:text-lg lg:text-xl"
                    as="p"
                  >
                    upcoming event 🚨
                  </SectionBadge>
                </div>{" "}
                <div className="mb-5 lg:mb-5 mx-2 mt-2 lg:m-4 lg:mt-2 rounded-lg flex">
                  {" "}
                  {/* LEFT: photo placeholder */}
                  <img
                    className="h-20 md:h-50 lg:h-60 mr-2 lg:mr-5"
                    alt={featuredEvent.name}
                    src="/pics/events/welcome-night-sem12026.jpg"
                  />
                  {/* UPCOMING EVENT - BODY TEXT */}
                  <div className="p-2">
                    <p className="pb-2 font-bold text-sm md:text-md lg:text-lg ">
                      {featuredEvent.name}
                    </p>
                    <p className="pb-1 text-xs md:text-sm lg:text-md">
                      📅 {featuredEvent.displayDate}
                    </p>
                    <p className="pb-1 text-xs md:text-sm lg:text-md">
                      {" "}
                      📍 {featuredEvent.location}{" "}
                    </p>
                    <p className="font-semibold mt-4 text-xs md:text-md lg:text-lg">
                      Come have fun with us and meet new people!
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                {featuredEvent.ticketUrl && (
                  <div className="md:px-2 lg:px-4 justify-center lg:justify-end flex">
                    <Link href={featuredEvent.ticketUrl} target="_blank" rel="noopener noreferrer">
                      <ChunkyButton variant="primary" trailingSymbol="→">
                        buy a ticket now
                      </ChunkyButton>
                    </Link>
                  </div>
                )}
              </div>
            </TiltedCard>
          ) : (
            <p className="text-center">No upcoming events right now - check back soon!</p>
          )}
        </div>
      </div>
      {/* CURRENT SPONSORS */}
      <div className="px-4 py-10 md:px-0 bg-brand-purple">
        <div className="mb-5 flex flex-row justify-center ">
          <span className="text-brand-pink text-2xl lg:text-4xl mr-1">★</span>
          <SectionBadge
            bgColor="bg-brand-lime"
            textSize="text-xs md:text-md lg:text-lg"
            fontWeight="font-extrabold"
            padding="py-2 px-4"
            as="h3"
          >
            With thanks to our Sponsors{" "}
          </SectionBadge>
          <span className="text-brand-pink text-2xl lg:text-4xl ml-1">★</span>
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
