'use client';

import { Button, Dialog, DialogPanel } from '@headlessui/react';
import React, { useState } from 'react';
import WalletCard from '../WalletCard';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@/components/common';

interface MobileMenuButtonProps {
  navigation: {
    label: string;
    href: string;
  }[];
}

const MobileMenuButton = ({ navigation }: MobileMenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="lg:hidden flex items-center rounded-lg border border-border-primary p-2"
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
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background-primary px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l border-border-primary">
          <div className="flex items-center justify-end border-b border-border-primary py-4">
            <Button
              className="lg:hidden flex items-center rounded-lg border border-border-primary p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Close menu</span>
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
          <div className="mt-6 flex flex-col gap-6">
            <div className="relative flex items-center gap-2 py-3 px-4 rounded-lg border border-border-primary w-full">
              <div className="relative size-5">
                <Image src="/icons/search-line.svg" alt="Search" fill />
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
            <WalletCard />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default MobileMenuButton;
