'use server';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for navigation items
type NavItem = {
  label: string;
  href: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

// Navigation data
const navigationData: NavSection[] = [
  {
    title: 'About',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'For Investors',
    items: [{ label: 'Join Investment Groups', href: '/investment-groups' }],
  },
  {
    title: 'Investment Group Tools',
    items: [
      { label: 'Fund Pooling', href: '/tools/fund-pooling' },
      { label: 'Vesting', href: '/tools/vesting' },
      { label: 'Admin Portal', href: '/tools/admin' },
    ],
  },
];

// Social media links
const socialLinks = [
  {
    icon: '/icons/discord-fill.svg',
    href: 'https://discord.gg/otisea',
    label: 'Discord',
  },
  {
    icon: '/icons/telegram-fill.svg',
    href: 'https://t.me/otisea',
    label: 'Telegram',
  },
  {
    icon: '/icons/twitter-x-fill.svg',
    href: 'https://twitter.com/otisea',
    label: 'Twitter',
  },
];

const Footer = () => {
  return (
    <footer className="bg-background-secondary w-full">
      <div className="container mx-auto px-4 md:px-28 py-12 md:py-16 flex flex-col gap-12 md:gap-16">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Logo */}
          <Link href="/" className="h-full">
            <div className="flex h-8">
              {/* Logo SVGs */}
              <div className="relative w-[212px] h-[56px]">
                <Image src="/icons/logo.svg" alt="Logo" fill />
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:flex gap-8 md:gap-16">
            {navigationData.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-text-secondary text-sm font-medium">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-text-primary hover:text-text-secondary transition-colors text-sm font-medium `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-8 md:items-center">
          {/* Copyright and legal links */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-text-primary text-sm font-medium">
            <span>© 2025 Otisea. All Rights Reserved.</span>
            <Link
              href="/privacy"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-text-secondary transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* Social media links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 relative hover:opacity-80 transition-opacity"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  fill
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
