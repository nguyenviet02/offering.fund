'use client';

import React from 'react';
import Image from 'next/image';

type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
};

const InputField = ({ label, placeholder, required = false }: InputProps) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-body-sm font-semibold text-text-primary">
      {label}
      {required && '*'}
    </label>
    <div className="bg-background-primary border border-border-primary rounded-xl p-4 md:p-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-body-sm text-text-placeholder outline-none"
      />
    </div>
  </div>
);

const EarlyAccess = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:pl-[112px] pt-0 md:pt-4 lg:pt-8 pb-0 md:pb-14 lg:pb-[120px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-20">
        {/* Left content */}
        <div className="flex flex-col gap-8 w-full flex-1 lg:w-1/2 lg:max-w-[520px]">
          {/* Title section */}
          <div className="flex flex-col gap-2">
            <div className="inline-flex py-1 px-2 bg-background-brand-main/20 rounded-lg w-fit">
              <span className="text-body-xs font-semibold text-text-brand-light">
                Early Access
              </span>
            </div>
            <h2 className="text-gradient font-semibold text-body-xl md:text-body-xxl lg:text-header-sm">
              Pre-Register for Syndicates
            </h2>
            <p className="text-body-sm font-medium text-text-secondary">
              Early Otisea members receive exclusive benefits - join now to
              secure your privileges!
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3 w-full">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 p-2 rounded-2xl">
              <div className="size-12 shrink-0 flex items-center justify-center rounded-full bg-alpha-blue">
                <Image
                  src="/icons/contract.svg"
                  alt="Contract"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                  Onboarding Portfolio Into Otisea
                </h3>
                <p className="text-body-sm font-medium text-text-secondary">
                  Integrate your past & current deals into Otisea without cost
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 p-2 rounded-2xl">
              <div className="size-12 shrink-0 flex items-center justify-center rounded-full bg-alpha-red">
                <Image
                  src="/icons/user-star.svg"
                  alt="VIP"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                  Early Members Get Vip Treatment
                </h3>
                <p className="text-body-sm font-medium text-text-secondary">
                  Comprehensive support for all your needs, plus access to
                  exclusive feature experiments
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 p-2 rounded-2xl">
              <div className="size-12 shrink-0 flex items-center justify-center rounded-full bg-alpha-orange">
                <Image
                  src="/icons/planet.svg"
                  alt="Network"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                  Tap Into Our Extensive Network
                </h3>
                <p className="text-body-sm font-medium text-text-secondary">
                  Get exclusive deal referrals through our widely connection in
                  blockchain world
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 p-2 rounded-2xl">
              <div className="size-12 shrink-0 flex items-center justify-center rounded-full bg-alpha-violet">
                <Image
                  src="/icons/discount-percent.svg"
                  alt="Discount"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                  Discounts
                </h3>
                <p className="text-body-sm font-medium text-text-secondary">
                  Limited vouchers for early members only!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-[136px] lg:pt-0 relative flex justify-end items-center pr-0 lg:pr-[208px]">
          {/* Registration form */}
          <div className="w-full lg:w-[440px] relative">
            <div className="bg-background-secondary border border-border-primary rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-5">
              <form className="flex flex-col gap-4">
                <InputField
                  label="Syndicate"
                  placeholder="Enter your syndicate name"
                  required
                />

                <InputField
                  label="Email"
                  placeholder="example@email.com"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Telegram Account"
                    placeholder="@YourAccount"
                  />

                  <InputField label="Referred By" placeholder="@FriendHandle" />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3 px-6 bg-gradient-to-r from-[#2388FF] to-[#4A3AFF] text-white rounded-xl font-semibold text-body-md"
                >
                  Pre-Register Now
                </button>
              </form>
            </div>
          </div>
          <div className="absolute -top-[48px] lg:top-2 lg:-translate-y-1/2 -z-1 right-[53px] size-[400px] -rotate-20 lg:rotate-20">
            <Image src="/images/bot.png" fill alt="BOT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
