import Image from 'next/image';

interface VCCardProps {
  name: string;
  members: number;
  deals: number;
  description: string;
}

const VCCard = ({ name, members, deals, description }: VCCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full basis-[384px] bg-background-secondary border border-border-primary rounded-2xl">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#191C24]">
            <Image
              src="/images/vc.png"
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-text-primary text-base font-semibold">
              {name}
            </h3>
            <div className="flex flex-col gap-0">
              <span className="text-text-secondary text-xs font-medium">
                {members} members
              </span>
              <span className="text-text-brand-main text-xs font-medium">
                {deals} deals
              </span>
            </div>
          </div>
        </div>
        <div
          className={`px-2 py-1 rounded-lg bg-[rgba(36,198,130,0.2)] text-text-success flex items-center justify-center`}
        >
          <span className="text-sm font-semibold">New</span>
        </div>
      </div>
      <p className="text-text-secondary text-sm font-medium flex-1 line-clamp-3">
        {description}
      </p>
      <button className="button-primary">Join Now</button>
    </div>
  );
};

export default VCCard;
