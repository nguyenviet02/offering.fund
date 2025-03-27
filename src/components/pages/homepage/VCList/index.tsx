'use client';

import { useState } from 'react';
import VCCard from './VCCard';
import { vclist } from '@/mock/vclist';

const VCList = () => {
  const mockVCs = vclist;
  const [displayCount, setDisplayCount] = useState(6);
  const hasMore = displayCount < mockVCs.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, mockVCs.length));
  };

  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-28 pb-[120px]">
      {/* Search bar - to be implemented */}
      <div className="w-full md:w-80">
        <div className="flex items-center gap-3 px-4 py-3 bg-background-primary border border-border-primary rounded-xl">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="#61667A"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 17.5L13.875 13.875"
              stroke="#61667A"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-text-primary text-sm font-medium placeholder:text-[#61667A] focus:outline-none"
          />
        </div>
      </div>

      {/* VC Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockVCs.slice(0, displayCount).map((vc) => (
          <VCCard key={vc.id} {...vc} />
        ))}
      </div>

      {/* Load More Section */}
      {hasMore && (
        <div className="flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-border-primary" />
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-background-primary border border-border-primary rounded-lg text-text-brand-main text-sm font-medium cursor-pointer"
          >
            Explore All
          </button>
          <div className="flex-1 h-[1px] bg-border-primary" />
        </div>
      )}
    </div>
  );
};

export default VCList;
