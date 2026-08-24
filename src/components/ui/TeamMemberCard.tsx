import TiltedCard from "./TiltedCard";
import Sticker from "./Sticker";
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  rotation?: number;
  stickerColor?: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  rotation: number;
  stickerColor?: string;
};

export default function TeamMemberCard({ member, rotation, stickerColor }: TeamMemberCardProps) {
  return (
    <div className="w-70">
      <TiltedCard rotation={rotation} bgColor="bg-white">
        <div className="absolute -top-3 right-30">
          <Sticker rotation={0} bgColor={stickerColor} />
        </div>
        <img
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          className="w-70 object-cover"
        />
        <p className="pt-2 font-semibold text-md">{member.name}</p>
        <p className="text-sm">{member.role}</p>
      </TiltedCard>
    </div>
  );
}
