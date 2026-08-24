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
        <div className="w-35 h-30 flex items-center justify-center">
          <img src={logoUrl} alt={companyName} className="max-w-full max-h-full object-contain" />
        </div>
        <p className="pt-2 font-semibold text-md">{companyName}</p>
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
