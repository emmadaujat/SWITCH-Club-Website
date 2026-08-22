import Image from "next/image";
import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";

export default function Home() {
  return (
    <div className=" bg-brand-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl mb-10 py-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TOP LEFT: text + buttons */}
        <div className=" items-center text-center flex flex-col">
          <h1 className=" text-6xl md:text-8xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:6px_black] [paint-order:stroke_fill]">
            SWITCH
          </h1>

          <div className="mt-6 rounded-lg border-2 border-black bg-white p-4 shadow-[4px_4px_0px_#000] relative">
            <div className="absolute -top-3 left-125 -translate-x-0">
              {" "}
              <Sticker rotation={15} bgColor="bg-stickytape-pink" size="w-25 h-6" />
            </div>

            <p className="font-medium text-13px text-brand-purple-dark">
              Society for women and gender diverse students in technology @ RMIT
            </p>
          </div>

          {/* green banner */}
          <div className="mt-6 flex flex-col items-center self-stretch">
            <div className="rounded-full border-2 border-black bg-brand-lime p-2">
              <p className="font-bold uppercase text-2xl text-black">✦ NEW MEMBERS WELCOME ✦</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-30 flex gap-6 relative">
            {/* Navigation */}
            {/* STARS */}
            <div className="absolute -top-12 right-86 text-brand-purple text-4xl">★</div>
            <div className="absolute -top-2 right-92 text-brand-purple text-2xl">★</div>

            {/* TODO: make all links open in seperate tab */}
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
          <div className="ml-auto w-fit rounded-lg border-2 border-black bg-brand-pink p-3">
            <p className="text-black text-xl font-bold"> Current Members: 350</p>
          </div>

          {/* STARS */}
          <div className="relative h-[520px] mx-auto ">
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
                  src="/pics/team-bonding-sem12026.jpg"
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
                  src="/pics/notion-workshop-sem12026.jpg"
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
                  src="/pics/interuni-sem12026.jpg"
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
      <div className=" bg-brand-purple p-10">
        {/* Layout wrapper — width/centering stays here */}
        <div className="relative mx-auto max-w-xl">
          <TiltedCard rotation={2} bgColor="bg-brand-cream">
            <div className="absolute -top-2 left-5 -translate-x-1">
              {" "}
              <Sticker rotation={6} />
            </div>
            <div className="absolute -top-2 right-5 -translate-x-1">
              {" "}
              <Sticker rotation={-6} />
            </div>

            {/* OUR MISSION - Heading with stars*/}
            <div className="p-2 mt-5 flex rotate-4 relative">
              <div className="absolute -top-2 right-5 text-brand-lime text-4xl rotation-6">★</div>
              <div className="absolute -top-6 right-15 text-brand-pink text-2xl rotation-6">★</div>

              <div className="rounded-full border-2 border-black bg-brand-pink p-2">
                <p className="font-bold uppercase text-xl text-black">our mission</p>
              </div>
            </div>

            {/* OUR MISSION - BODY TEXT */}
            <p className="p-2 font-bold text-lg text-black">
              “We're building a community where women and underrepresented people in tech can learn,
              connect, and thrive together.”
            </p>

            {/* BUTTONS */}
            {/* TODO: make all links open in seperate tab */}
            <div className=" mt-6 justify-end flex">
              <ChunkyButton variant="other" trailingSymbol="→" href="/who-are-we">
                Read our story
              </ChunkyButton>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* BOTTOM SECTION: UPCOMING EVENT */}
      <div className=" bg-brand-purple-LIGHT p-10">
        <div className="mx-auto max-w-4xl">
          <TiltedCard rotation={2} bgColor="bg-brand-lime">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              {" "}
              <Sticker rotation={1} bgColor="bg-stickytape-pink" size="w-40 h-8" />
            </div>

            {/* Two-column split now lives INSIDE the card */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              {/* LEFT: heading + body + button, grouped together */}
              <div className="flex flex-col">
                <div className="p-2 mt-5 flex rotate-4">
                  {/* UPCOMING EVENT - Heading */}
                  <div className="rounded-full border-2 border-black bg-white p-2 rotate-2 self-start ">
                    <p className="font-bold uppercase text-xl text-black">upcoming event 🚨</p>
                  </div>
                </div>

                {/* UPCOMING EVENT - BODY TEXT */}
                <div className="p-2">
                  <p className="font-bold text-2xl ">Welcome Night with Fire+</p>
                  <p>📅 30th July 2026</p>
                  <p> 📍 Carlton Club Hotel </p>
                  <p className="font-semibold mt-2 text-md">
                    Come have fun with us as we welcome semester 2
                  </p>
                </div>

                {/* BUTTON */}
                {/* TODO: make all links open in seperate tab */}

                <div className=" p-4 justify-start flex">
                  <ChunkyButton
                    variant="primary"
                    trailingSymbol="→"
                    href="https://campus.hellorubric.com/?s=10199"
                  >
                    buy a ticket now
                  </ChunkyButton>
                </div>
              </div>

              {/* RIGHT: photo placeholder */}
              <div className="m-4 rounded-lg flex items-center justify-center">
                <img
                  className="h-70 w-auto "
                  alt="switch-team-welcome-night-sem1-2026"
                  src="/pics/welcome-night-sem1-2026.JPG"
                />
              </div>
            </div>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
