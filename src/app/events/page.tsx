"use client";

import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Sticker from "@/components/ui/Sticker";
import { useState } from "react";

type UpcomingEvent = {
  id: string;
  type: string;
  name: string;
  date: string;
  location: string;
  bgColor: string;
  rotation: number;
};

type PreviousEvent = {
  id: string;
  name: string;
  date: string;
  bgColor: string;
  rotation: number;
  image?: string;
};

// TODO: Get data
const upcomingEvents: UpcomingEvent[] = [
  {
    id: "1",
    type: "Event type",
    name: "Event Name",
    date: "date goes here",
    location: "Location Goes Here",
    bgColor: "bg-brand-lime",
    rotation: 3,
  },
  {
    id: "2",
    type: "Event type",
    name: "Event Name",
    date: "date goes here",
    location: "Location Goes Here",
    bgColor: "bg-brand-pink",
    rotation: -3,
  },
  {
    id: "3",
    type: "Event type",
    name: "Event Name",
    date: "date goes here",
    location: "Location Goes Here",
    bgColor: "bg-brand-cream",
    rotation: 4,
  },
];

const previousEvents: PreviousEvent[] = [
  {
    id: "4",
    name: "Event Name",
    date: "date goes here",
    image: "/pics/some-past-event.jpg",
    bgColor: "bg-white",
    rotation: 3,
  },
  {
    id: "5",
    name: "Event Name",
    date: "date goes here",
    image: "/pics/some-past-event2.jpg",
    bgColor: "bg-white",
    rotation: -3,
  },
  {
    id: "6",
    name: "Event Name",
    date: "date goes here",
    image: "/pics/some-past-event3.jpg",
    bgColor: "bg-white",
    rotation: 4,
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "previous">("upcoming");
  const events = activeTab === "upcoming" ? upcomingEvents : previousEvents;

  return (
    <div className="bg-brand-purple-light pb-10">
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
      {/* TAB TOGGLE */}
      <div className="mb-10 flex flex-row justify-center gap-10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-full border-2 border-black py-2 px-5 font-extrabold uppercase text-2xl text-black transition ${
            activeTab === "upcoming" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("previous")}
          className={`rounded-full border-2 border-black py-2 px-5 font-extrabold uppercase text-2xl text-black transition ${
            activeTab === "previous" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Previous
        </button>
      </div>
      <div className="mx-auto max-w-7xl py-4 grid grid-cols-3 gap-15">
        {activeTab === "upcoming"
          ? upcomingEvents.map((event) => (
              <TiltedCard key={event.id} rotation={event.rotation} bgColor={event.bgColor}>
                <div className="pl-4 pt-4 flex rotate-2">
                  <div className="rounded-full border-2 border-black bg-white p-2 rotate-2 self-start">
                    <p className="font-bold uppercase text-l text-black">{event.type}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-2xl">{event.name}</p>
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>
                <div className="m-5 justify-start flex">
                  {/* TODO: make all links open in seperate tab */}
                  <ChunkyButton variant="primary" trailingSymbol="→" href="/how-to-join">
                    RSVP Now!
                  </ChunkyButton>
                </div>
              </TiltedCard>
            ))
          : previousEvents.map((event) => (
              <TiltedCard key={event.id} rotation={event.rotation} bgColor={event.bgColor}>
                <img src={event.image} alt={event.name} className="w-full object-cover" />
                <p className="pt-2 font-semibold text-md">{event.name}</p>
                <p className="text-sm">{event.date}</p>
                <div className="m-5 justify-end flex">
                  {/* TODO: link events to instagram posts/ linkedin posts */}
                  {/* TODO: make all links open in seperate tab */}
                  <ChunkyButton variant="other" trailingSymbol="→" href="/how-to-join">
                    View recap
                  </ChunkyButton>
                </div>
              </TiltedCard>
            ))}
      </div>{" "}
    </div>
  );
}
