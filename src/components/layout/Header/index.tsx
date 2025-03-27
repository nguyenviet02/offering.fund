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
    <header className="w-full bg-background-primary border-b border-border-primary sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center w-[121px] h-8 relative">
            <Link href="/" className="flex items-center size-full relative">
              <Image src="/icons/logo.svg" alt="Offering.fund" fill />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation?.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="h-10 w-fit min-w-[95px] flex justify-center items-center py-2 px-3 rounded-lg  hover:bg-alpha-blue group"
                >
                  <span className="text-body-sm text-text-primary group-hover:text-text-brand-light">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative flex items-center gap-2 py-2 px-3 rounded-lg border border-border-primary w-[320px]">
            <div className="relative size-5">
              <Image src="/icons/search-line.svg" alt="Search" fill />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full text-body-sm text-text-primary placeholder:text-text-placeholder border-none outline-none bg-transparent"
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
