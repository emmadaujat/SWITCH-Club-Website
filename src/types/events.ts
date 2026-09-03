export type ClubEvent = {
  id: string;
  name: string;
  date: string; // ISO, e.g. "2026-10-22" — used to compute upcoming/previous
  displayDate: string; // e.g. "22 Oct 2026" — what actually shows on the card
  bgColor: string;
  rotation: number;
  type?: string;
  location?: string;
  ticketUrl?: string;
  image?: string;
};
