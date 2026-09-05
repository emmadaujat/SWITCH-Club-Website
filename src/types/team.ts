export type TeamMemberRecord = {
  id: string;
  name: string;
  roleTitle: string;
  committeeSection: "executive" | "social-media" | "events";
  photoUrl: string;
  displayOrder: number;
};
