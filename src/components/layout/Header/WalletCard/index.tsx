import React from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { Button } from '@headlessui/react';
import { useAccount, useDisconnect } from 'wagmi';
import { formatAddress } from '@/utils';

const WalletCard = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(account.address || '');
    toast.success('Address copied to clipboard');
  };

  return (
    <div className="bg-background-primary rounded-xl flex flex-col gap-4 w-full">
      {/* First Row */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-text-secondary text-xs font-medium">
            Address
          </span>
          <div className="flex items-center gap-1">
            <span className="text-text-brand-light text-sm font-semibold">
              {formatAddress(account.address || '')}
            </span>
            <Button
              onClick={handleCopyAddress}
              className="relative w-4 h-4 hover:opacity-80 cursor-pointer"
            >
              <Image
                src="/icons/file-copy-line.svg"
                alt="Copy"
                fill
                className="text-text-primary"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-text-secondary text-xs font-medium">
            Provider
          </span>
          <span className="text-text-primary text-sm font-semibold">
            {account?.connector?.name}
          </span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-text-secondary text-xs font-medium">
            Network
          </span>
          <span className="text-text-primary text-sm font-semibold">
            {account?.chain?.name}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {}}
          className="w-full py-2 px-4 text-sm font-semibold text-text-secondary border border-border-primary rounded-lg hover:bg-border-primary transition-colors cursor-pointer"
        >
          Setting
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={() => {}}
            className="flex-1 py-2 px-4 text-sm font-semibold text-text-secondary border border-border-primary rounded-lg hover:bg-border-primary transition-colors cursor-pointer"
          >
            Switch Chain
          </Button>
          <Button
            onClick={() => {
              disconnect();
            }}
            className="flex-1 py-2 px-4 text-sm font-semibold text-text-primary bg-background-error-main rounded-lg hover:bg-background-error-dark transition-colors cursor-pointer"
          >
            Disconnect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
