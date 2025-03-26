'use server';

import React from 'react';
import Image from 'next/image';

// Hero section component for the homepage
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
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
      <div className="relative flex justify-center items-center w-full px-4 md:px-28 py-[100px] md:pb-[236px]">
        <div className="flex flex-col items-center gap-12 w-full md:w-[624px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-header-sm md:text-header-md lg:text-header-lg font-semibold leading-tight text-gradient">
              Invest Early, At The Best Price, Just Like A VC
            </h1>
            <p className="text-body-sm md:text-body-md lg:text-body-lg font-medium text-text-secondary">
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
