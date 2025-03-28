'use server';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletButton from './WalletButton';
import MobileMenuButton from './MobileMenuButton';

const Header = () => {
  const navigation = [
    {
      label: 'Syndicate',
      href: '/syndicate',
    },
    {
      label: 'My Assets',
      href: '/my-assets',
    },
  ];
  return (
    <header className="bg-background-primary border-border-primary sticky top-0 z-50 w-full border-b">
      {/* Desktop Header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-[112px] lg:py-4">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="relative flex h-8 w-[121px] items-center">
            <Link href="/" className="relative flex size-full items-center">
              <Image src="/icons/logo.svg" alt="Offering.fund" fill />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navigation?.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:bg-alpha-orange-info group flex h-10 w-fit min-w-[95px] items-center justify-center rounded-lg px-3 py-2"
                >
                  <span className="text-body-sm text-text-primary font-semibold group-hover:text-[#ED8942]">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center space-x-2 lg:flex">
          <div className="border-border-primary relative flex w-[320px] items-center gap-2 rounded-lg border px-3 py-2">
            <div className="relative size-5">
              <Image src="/icons/search-line.svg" alt="Search" fill />
            </div>
            <input
              type="text"
              placeholder="Search by syndicates"
              className="text-body-sm text-text-primary placeholder:text-text-placeholder w-full border-none bg-transparent outline-none"
            />
          </div>
          <Link href="#" className="button-secondary">
            Run An Investment Group
          </Link>
          <WalletButton />
        </div>

        <MobileMenuButton navigation={navigation} />
      </div>
    </header>
  );
};

export default Header;
