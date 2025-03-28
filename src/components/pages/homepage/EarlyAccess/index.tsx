'use client';

import React from 'react';
import Image from 'next/image';
import PreRegistrationForm from './PreRegistrationForm';
const EarlyAccess = () => {
  return (
    <section className="relative container mx-auto w-full overflow-hidden px-4 pt-0 pb-0 md:px-[80px] md:pt-4 md:pb-14 lg:pt-8 lg:pb-[120px] xl:pr-[208px] xl:pl-[112px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        {/* Left content */}
        <div className="flex w-full flex-1 flex-col gap-8 lg:w-1/2 lg:max-w-[520px]">
          {/* Title section */}
          <div className="flex flex-col gap-2">
            <div className="bg-alpha-orange-info flex w-fit items-center justify-center rounded-lg px-2 py-[6px]">
              <span className="text-body-xs leading-[20px] font-semibold text-[#FF6A00]">
                Early Access
              </span>
            </div>
            <h2 className="text-gradient text-body-xl md:text-body-xxl lg:text-header-sm font-semibold">
              Pre-Register for Syndicates
            </h2>
            <p className="text-body-sm text-text-secondary font-medium">
              Early Offering.fund members receive exclusive benefits - join now
              to secure your privileges!
            </p>
          </div>

          {/* Features */}
          <div className="flex w-full flex-col gap-3">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 rounded-2xl p-2">
              <div className="bg-alpha-red flex size-12 shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/icons/contract.svg"
                  alt="Contract"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg text-text-primary font-semibold">
                  Onboarding Portfolio Into Offering.fund
                </h3>
                <p className="text-body-sm text-text-secondary font-medium">
                  Integrate your past & current deals into Offering.fund without
                  cost
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 rounded-2xl p-2">
              <div className="bg-alpha-orange-info flex size-12 shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/icons/user-star.svg"
                  alt="VIP"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg text-text-primary font-semibold">
                  Early Members Get Vip Treatment
                </h3>
                <p className="text-body-sm text-text-secondary font-medium">
                  Comprehensive support for all your needs, plus access to
                  exclusive feature experiments
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 rounded-2xl p-2">
              <div className="bg-alpha-green flex size-12 shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/icons/planet.svg"
                  alt="Network"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg text-text-primary font-semibold">
                  Tap Into Our Extensive Network
                </h3>
                <p className="text-body-sm text-text-secondary font-medium">
                  Get exclusive deal referrals through our widely connection in
                  blockchain world
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 rounded-2xl p-2">
              <div className="bg-alpha-violet flex size-12 shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/icons/discount-percent.svg"
                  alt="Discount"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg text-text-primary font-semibold">
                  Discounts
                </h3>
                <p className="text-body-sm text-text-secondary font-medium">
                  Limited vouchers for early members only!
                </p>
              </div>
            </div>
          </div>
        </div>

        <PreRegistrationForm />
      </div>
    </section>
  );
};

export default EarlyAccess;
