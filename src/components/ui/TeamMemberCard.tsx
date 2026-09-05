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
    <div className="w-30 md:w-40 lg:w-60">
      <TiltedCard rotation={rotation} bgColor="bg-white">
        <div className="absolute -top-2 right-17 sm:right-23 lg:right-30">
          <Sticker
            rotation={0}
            bgColor={stickerColor}
            size="w-10 md:w-18 lg:w-20 h-3 sm:h-4 lg:h-5"
          />
        </div>
        <img
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          className="w-full h-30 sm:h-38 lg:h-46 object-cover"
        />
        <p className="pt-2 font-semibold text-xs lg:text-md">{member.name}</p>
        <p className="text-xs ">{member.role}</p>
      </TiltedCard>
    </div>
  );
}
