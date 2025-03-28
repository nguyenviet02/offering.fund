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
      <div className="hidden lg:block">
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
              className="bg-background-primary border-border-primary mt-2 w-[312px] rounded-lg border p-4 shadow-lg"
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
              className="bg-background-primary border-border-primary mt-2 w-[200px] rounded-lg border p-5 shadow-lg"
            >
              {connectors.map((connector) => (
                <MenuItem key={connector.uid}>
                  <Button
                    key={connector.uid}
                    onClick={() => {
                      connect({ connector });
                    }}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border border-transparent p-2 hover:bg-[#e0e8ff1a]"
                  >
                    <Image
                      unoptimized
                      src={
                        `/images/connectors/${connector.name?.toLowerCase()}.svg` ||
                        ''
                      }
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
      </div>
      <div className="w-full lg:hidden">
        {account.status === 'connected' ? (
          <WalletCard />
        ) : (
          <div className="flex w-full flex-col gap-2">
            <p className="text-text-primary font-bold">Connect Wallet</p>
            <div className="flex flex-wrap gap-2">
              {connectors.map((connector) => (
                <Button
                  key={connector.uid}
                  onClick={() => {
                    connect({ connector });
                  }}
                  type="button"
                  className="border-border-primary flex w-fit items-center gap-3 rounded-xl border px-4 py-2 hover:bg-[#e0e8ff1a]"
                >
                  <Image
                    unoptimized
                    src={
                      `/images/connectors/${connector.name?.toLowerCase()}.svg` ||
                      ''
                    }
                    alt="icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-text-primary font-bold">
                    {connector.name}
                  </p>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WalletButton;
