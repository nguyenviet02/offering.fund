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
    <div className="bg-background-primary flex w-full flex-col gap-4 rounded-xl">
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
              className="relative h-4 w-4 cursor-pointer hover:opacity-80"
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
        <div className="flex flex-col items-end gap-1">
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
          className="text-text-secondary border-border-primary hover:bg-border-primary w-full cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
        >
          Setting
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={() => {}}
            className="text-text-secondary border-border-primary hover:bg-border-primary flex-1 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
          >
            Switch Chain
          </Button>
          <Button
            onClick={() => {
              disconnect();
            }}
            className="text-text-primary bg-background-error-main hover:bg-background-error-dark flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          >
            Disconnect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
