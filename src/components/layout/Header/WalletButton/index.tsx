'use client';

import {
  Button,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react';
import React from 'react';
import { useAccount, useConnect } from 'wagmi';
import Image from 'next/image';
import WalletCard from '../WalletCard';
const WalletButton = () => {
  const account = useAccount();
  const { connectors, connect } = useConnect();

  return (
    <>
      {account.status === 'connected' ? (
        <Menu>
          <MenuButton className="button-primary flex items-center gap-2">
            <div className="relative size-5">
              <Image src="/icons/wallet-line.svg" fill alt="Wallet" />
            </div>
            My Wallet
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-background-primary w-[312px] border border-border-primary rounded-lg shadow-lg mt-2 p-4"
          >
            <WalletCard />
          </MenuItems>
        </Menu>
      ) : (
        <Menu>
          <MenuButton className="button-primary flex items-center gap-2">
            <div className="relative size-5">
              <Image src="/icons/wallet-line.svg" fill alt="Wallet" />
            </div>
            Connect Wallet
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-background-primary p-5 w-[200px] border border-border-primary rounded-lg shadow-lg mt-2"
          >
            {connectors.map((connector) => (
              <MenuItem key={connector.uid}>
                <Button
                  key={connector.uid}
                  onClick={() => {
                    connect({ connector });
                  }}
                  type="button"
                  className="flex items-center gap-3 w-full hover:bg-[#e0e8ff1a] border border-transparent p-2 rounded-xl"
                >
                  <Image
                    unoptimized
                    src={connector?.icon || ''}
                    alt="icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-text-primary font-bold">
                    {connector.name}
                  </p>
                </Button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      )}
    </>
  );
};

export default WalletButton;
