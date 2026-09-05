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
      <div className=" flex flex-col items-center p-6 lg:p-8">
        <h2 className=" text-md lg:text-2xl font-extrabold uppercase text-brand-purple">
          What we've been up to
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Events
        </h1>
        <p className="max-w-xs lg:max-w-3xl text-center text-xs lg:text-base text-black">
          SWITCH runs a range of events, from socialising with peers to networking with industry
          professionals
        </p>
      </div>
      {/* TAB TOGGLE */}
      <div className="mb-2 flex flex-row justify-center gap-5 lg:gap-10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-full border-2 border-black py-2 px-4 lg:px-6 font-extrabold uppercase text-lg lg:text-2xl text-black transition ${
            activeTab === "upcoming" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("previous")}
          className={`rounded-full border-2 border-black py-2 px-4 lg:px-6 font-extrabold uppercase text-lg lg:text-2xl text-black transition ${
            activeTab === "previous" ? "bg-brand-lime" : "bg-white"
          }`}
        >
          Previous
        </button>
      </div>
      <div className="mx-auto max-w-7xl p-5 lg:p-10 grid grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-12">
        {activeTab === "upcoming"
          ? upcomingEvents.map((event) => (
              <TiltedCard key={event.id} rotation={event.rotation} bgColor={event.bgColor}>
                <div className="pl-1 lg:pl-4 lg:mt-2 flex rotate-2">
                  <SectionBadge bgColor="bg-white" textSize="text-xs lg:text-lg" as="p">
                    {event.type}{" "}
                  </SectionBadge>
                </div>
                <div className="p-1 lg:m-2">
                  <p className="font-semibold text-[12px] lg:text-lg">{event.name}</p>
                  <p className=" text-[11px] lg:text-base pt-1">📅 {event.displayDate}</p>
                  <p className=" text-[11px] lg:text-base pt-1">📍 {event.location}</p>
                </div>
                {event.ticketUrl && (
                  <div className="mt-4 ml-2 justify-start flex">
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
                  className="w-full h-30 lg:h-60 object-cover"
                />
                <p className="pt-2 lg:pt-3 font-semibold text-[11px] lg:text-base">{event.name}</p>
                <p className="text-[10px] lg:text-sm">{event.displayDate}</p>
                <div className="mt-2 lg:mt-4 justify-end flex">
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
