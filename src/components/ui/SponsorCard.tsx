import TiltedCard from "./TiltedCard";

type SponsorCardProps = {
  companyName: string;
  logoUrl: string;
  website?: string;
  rotation?: number;
};

export default function SponsorCard({
  companyName,
  logoUrl,
  website,
  rotation = 0,
}: SponsorCardProps) {
  const content = (
    <div>
      <TiltedCard rotation={rotation} bgColor="bg-white">
        <div className="w-25 sm:w-30 lg:w-35 lg:w- h-20 sm:h-25 lg:h-30 flex items-center justify-center">
          <img src={logoUrl} alt={companyName} className="max-w-full max-h-full object-contain" />
        </div>
        <p className="pt-1 md:pt-3 text-sm font-semibold md:text-base">{companyName}</p>
      </TiltedCard>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
