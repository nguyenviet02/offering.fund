'use server';

import React from 'react';
import Image from 'next/image';

// Hero section component for the homepage
const Hero = () => {
  return (
    <section className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.png"
            alt="Gradient background 1"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex w-full items-center justify-center px-4 py-[100px] md:px-28 md:pb-[236px]">
        <div className="flex w-full flex-col items-center gap-12 md:w-[624px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-header-sm md:text-header-md lg:text-header-lg text-gradient leading-tight font-semibold">
              Invest Early, At The Best Price, Just Like A VC
            </h1>
            <p className="text-body-sm md:text-body-md lg:text-body-lg text-text-secondary font-medium">
              Otisea connects investors directly with premium syndicate deals
              through various investment channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
