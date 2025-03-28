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
        className="border-border-primary relative z-[50] flex items-center rounded-lg border p-2 lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-text-primary h-6 w-6"
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
                  <div className="bg-background-primary border-border-primary flex h-full flex-col overflow-y-auto border-l px-6 pb-6 shadow-xl">
                    <div className="flex flex-col gap-6">
                      <div className="border-border-primary flex items-center justify-end border-b py-4">
                        <Button
                          className="border-border-primary relative z-[50] flex items-center rounded-lg border p-2 lg:hidden"
                          onClick={toggleMenu}
                          aria-label="Toggle menu"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-text-primary h-6 w-6"
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
                      <div className="border-border-primary relative flex w-full items-center gap-2 rounded-lg border px-4 py-3">
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
                          className="text-body-sm text-text-primary placeholder:text-text-placeholder w-full border-none bg-transparent outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group flex h-10 w-full items-center rounded-lg px-3 py-2"
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
