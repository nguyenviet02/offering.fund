import Image from 'next/image';
import toast from 'react-hot-toast';

interface VCCardProps {
  name: string;
  members: number;
  description: string;
  best_roi: string;
}

const VCCard = ({ name, members, description, best_roi }: VCCardProps) => {
  const handleJoin = () => {
    toast('Coming Soon!', {
      icon: '🚧',
      duration: 2000,
    });
  };

  return (
    <div className="bg-background-secondary border-border-primary flex w-full basis-[384px] flex-col gap-4 rounded-2xl border p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-xl bg-[#191C24]">
            <Image
              src="/images/vc.png"
              alt={name}
              width={48}
              height={48}
              className="h-full w-full object-cover"
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
              <span className="text-text-brand-light text-xs font-medium">
                Best ROI: {best_roi}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`bg-alpha-green flex items-center justify-center rounded-lg px-2 py-1`}
        >
          <span className="text-text-success text-sm font-semibold">New</span>
        </div>
      </div>
      <p className="text-text-secondary line-clamp-3 flex-1 text-sm font-medium">
        {description}
      </p>
      <button onClick={handleJoin} className="button-primary">
        Join Now
      </button>
    </div>
  );
};

export default VCCard;
