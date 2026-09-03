"use client";

import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import { useState } from "react";
import eventsData from "@/data/events.json";
import { ClubEvent } from "@/types/events";
import Link from "next/link";
import { getUpcomingEvents, getPreviousEvents } from "@/helpers/events";
import SectionBadge from "@/components/ui/SectionBadge";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "previous">("upcoming");

  const allEvents = eventsData.events as ClubEvent[];
  const upcomingEvents = getUpcomingEvents(allEvents);
  const previousEvents = getPreviousEvents(allEvents);

  return (
    <div className="bg-brand-purple-light pb-10">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-10">
        <h2 className=" text-l lg:text-2xl font-extrabold uppercase text-brand-purple">
          What we've been up to
        </h2>
        <h1 className="text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Events
        </h1>
        <p className="max-w-s lg:max-w-2xl text-center text-sm lg:text-md text-black">
          SWITCH runs a range of events, from socialising with peers to networking with industry
          professionals
        </p>
      </div>
      {/* TAB TOGGLE */}
      <div className="mb-2 flex flex-row justify-center gap-5 lg:gap-10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-full border-2 border-black py-2 px-5 font-extrabold uppercase text-xl lg:text-2xl text-black transition ${
            activeTab === "upcoming" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("previous")}
          className={`rounded-full border-2 border-black py-2 px-5 font-extrabold uppercase text-xl lg:text-2xl text-black transition ${
            activeTab === "previous" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Previous
        </button>
      </div>
      <div className="mx-auto max-w-7xl p-10 grid grid-cols-2 lg:grid-cols-3 gap-10">
        {activeTab === "upcoming"
          ? upcomingEvents.map((event) => (
              <TiltedCard key={event.id} rotation={event.rotation} bgColor={event.bgColor}>
                <div className="pl-4 pt-4 flex rotate-2">
                  <SectionBadge bgColor="bg-white" textSize="text-md lg:text-l" as="p">
                    {event.type}{" "}
                  </SectionBadge>
                </div>
                <div className="p-2 mb-2">
                  <p className="font-bold text-l lg:text-xl">{event.name}</p>
                </div>
                <div className="px-3">
                  <p className="font-normal text-sm lg:text-lg pt-1">📅 {event.displayDate}</p>
                  <p className="font-normal text-sm lg:text-lg pt-1">📍 {event.location}</p>
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
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-30 lg:h-50 object-cover"
                />
                <p className="pt-3 font-semibold text-sm lg:text-md">{event.name}</p>
                <p className="text-xs lg:text-sm">{event.displayDate}</p>
                <div className="m-3 justify-end flex">
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
