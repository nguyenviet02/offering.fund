'use client';

import {
  Button,
  Dialog,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import React, { useState } from 'react';
import WalletCard from '../WalletCard';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@/components/common';
import { useAccount } from 'wagmi';
import WalletButton from '../WalletButton';

interface MobileMenuButtonProps {
  navigation: {
    label: string;
    href: string;
  }[];
}

const MobileMenuButton = ({ navigation }: MobileMenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const account = useAccount();

  const toggleMenu = () => {
    console.log('☠️ ~ MobileMenuButton ~ isMenuOpen:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="lg:hidden relative flex items-center rounded-lg border border-border-primary p-2 z-[50]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      <Dialog open={isMenuOpen} onClose={setIsMenuOpen} className="lg:hidden">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-black/20" />
        </TransitionChild>

        <div className="fixed inset-0 z-[50] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-auto bg-background-primary px-6 pb-6 shadow-xl border-l border-border-primary">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-end border-b border-border-primary py-4">
                        <Button
                          className="lg:hidden relative flex items-center rounded-lg border border-border-primary p-2 z-[50]"
                          onClick={toggleMenu}
                          aria-label="Toggle menu"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="relative flex items-center gap-2 py-3 px-4 rounded-lg border border-border-primary w-full">
                        <div className="relative size-5">
                          <Image
                            src="/icons/search-line.svg"
                            alt="Search"
                            fill
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-full text-body-sm text-text-primary placeholder:text-text-placeholder border-none outline-none bg-transparent"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="h-10 w-full flex items-center py-2 px-3 rounded-lg group"
                          >
                            <span className="text-body-sm text-text-primary group-hover:text-text-brand-light">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Divider />
                      <div className="flex items-center justify-center">
                        {account?.status === 'connected' ? (
                          <WalletCard />
                        ) : (
                          <WalletButton />
                        )}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileMenuButton;
