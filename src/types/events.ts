export type UpcomingEvent = {
  id: string;
  type: string;
  name: string;
  date: string;
  location: string;
  bgColor: string;
  rotation: number;
  ticketUrl: string;
};

export type PreviousEvent = {
  id: string;
  name: string;
  date: string;
  image: string;
  bgColor: string;
  rotation: number;
};
