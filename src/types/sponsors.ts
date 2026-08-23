export type SponsorTier = {
  id: string;
  tierName: string;
  price: string;
  benefits: string[];
  bgColor: string;
  displayOrder: number;
};

export type Sponsor = {
  id: string;
  companyName: string;
  logoUrl: string;
  website: string;
  tierId: string;
};
