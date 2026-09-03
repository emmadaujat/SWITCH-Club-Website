"use client";

import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import { useState } from "react";
import eventsData from "@/data/events.json";
import { ClubEvent } from "@/types/events";
import Link from "next/link";
import { getUpcomingEvents, getPreviousEvents } from "@/helpers/events";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "previous">("upcoming");

  const allEvents = eventsData.events as ClubEvent[];
  const upcomingEvents = getUpcomingEvents(allEvents);
  const previousEvents = getPreviousEvents(allEvents);

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
        <p>
          SWITCH runs a range of events, from socialising with peers to networking with industry
          professionals{" "}
        </p>
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
                  <p>📅 {event.displayDate}</p>
                  <p>📍 {event.location}</p>
                </div>
                {event.ticketUrl && (
                  <div className="m-5 justify-start flex">
                    <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                      <ChunkyButton variant="primary" trailingSymbol="→">
                        RSVP Now!
                      </ChunkyButton>
                    </Link>
                  </div>
                )}
              </TiltedCard>
            ))
          : previousEvents.map((event) => (
              <TiltedCard key={event.id} rotation={event.rotation} bgColor={event.bgColor}>
                <img src={event.image} alt={event.name} className="w-full h-60 object-cover" />
                <p className="pt-2 font-semibold text-md">{event.name}</p>
                <p className="text-sm">{event.displayDate}</p>
                <div className="m-5 justify-end flex">
                  {/* TODO: link events to instagram posts/ linkedin posts */}
                  <ChunkyButton variant="other" trailingSymbol="→" href="/how-to-join">
                    View recap
                  </ChunkyButton>
                </div>
              </TiltedCard>
            ))}
      </div>
    </div>
  );
}
