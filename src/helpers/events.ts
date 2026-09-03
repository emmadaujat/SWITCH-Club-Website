import { ClubEvent } from "@/types/events";

export function getUpcomingEvents(events: ClubEvent[]): ClubEvent[] {
  const today = new Date();
  return events
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPreviousEvents(events: ClubEvent[]): ClubEvent[] {
  const today = new Date();
  return events
    .filter((event) => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
