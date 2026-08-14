import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";

export default function EventsPage() {
  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-10 ">
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">
          What we've been up to
        </h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Events
        </h1>
        <p>Placeholder intro line about the committee and what they do.</p>
      </div>

      <div className="mb-10 flex flex-row justify-center gap-10">
        <div className="rounded-full border-2 border-black bg-brand-lime py-2 px-5">
          <h3 className="font-extrabold uppercase text-2xl text-black">Upcoming</h3>
        </div>
        <div className="rounded-full border-2 border-black bg-white py-2 px-5">
          <h3 className="font-extrabold uppercase text-2xl text-black">Previous</h3>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-4 grid grid-cols-3 gap-15 ">
        {/* ---------------- EVENT CARD 1 ---------------- */}
        <TiltedCard rotation={3} bgColor="bg-brand-lime">
          <div className="pl-4 pt-4 flex rotate-2">
            {/*  Heading */}
            <div className="rounded-full border-2 border-black bg-white p-2 rotate-2 self-start ">
              <p className="font-bold uppercase text-l text-black">Event type</p>
            </div>
          </div>
          {/* BODY TEXT */}
          <div className="p-4">
            <p className="font-bold text-2xl ">Event Name</p>
            <p>📅 date goes here</p>
            <p> 📍 Location Goes Here </p>
          </div>
          {/* BUTTON */}
          <div className=" m-5 justify-start flex">
            <ChunkyButton variant="primary" trailingSymbol="→" href="/how-to-join">
              RSVP Now!
            </ChunkyButton>
          </div>
        </TiltedCard>

        {/* ---------------- EVENT CARD 2 ---------------- */}
        <TiltedCard rotation={-3} bgColor="bg-brand-pink">
          <div className="pl-4 pt-4 flex rotate-2">
            {/*  Heading */}
            <div className="rounded-full border-2 border-black bg-white p-2 rotate-0 self-start ">
              <p className="font-bold uppercase text-l text-black">Event type</p>
            </div>
          </div>
          {/* BODY TEXT */}
          <div className="p-4">
            <p className="font-bold text-2xl ">Event Name</p>
            <p>📅 date goes here</p>
            <p> 📍 Location Goes Here </p>
          </div>
          {/* BUTTON */}
          <div className=" m-5 justify-start flex">
            <ChunkyButton variant="primary" trailingSymbol="→" href="/how-to-join">
              RSVP Now!
            </ChunkyButton>
          </div>
        </TiltedCard>

        {/* ---------------- EVENT CARD 3 ---------------- */}
        <TiltedCard rotation={4} bgColor="bg-brand-cream">
          <div className="pl-4 pt-4 flex rotate-2">
            {/*  Heading */}
            <div className="rounded-full border-2 border-black bg-white p-2 rotate-0 self-start ">
              <p className="font-bold uppercase text-l text-black">Event type</p>
            </div>
          </div>
          {/* BODY TEXT */}
          <div className="p-4">
            <p className="font-bold text-2xl ">Event Name</p>
            <p>📅 date goes here</p>
            <p> 📍 Location Goes Here </p>
          </div>
          {/* BUTTON */}
          <div className=" m-5 justify-start flex">
            <ChunkyButton variant="primary" trailingSymbol="→" href="/how-to-join">
              RSVP Now!
            </ChunkyButton>
          </div>
        </TiltedCard>
      </div>
    </div>
  );
}
