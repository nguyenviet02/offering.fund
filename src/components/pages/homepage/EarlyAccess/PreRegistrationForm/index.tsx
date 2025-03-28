import { InputField } from '@/components/common';
import { Button } from '@headlessui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define form schema with Zod
const formSchema = z.object({
  syndicate: z.string().min(2, 'Syndicate name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  telegramAccount: z.string().optional(),
  referredBy: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PreRegistrationForm = () => {
  const appId =
    'AKfycbxLuXFVZYxjksxpoA3rAMOjPyigD6q2zCuARfEyBx_yukz_247cxo2X37Vp0Faj0_Cu';
  const scriptUrl = `https://script.google.com/macros/s/${appId}/exec`;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    toast.loading('Submitting...');

    await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `Syndicate=${data.syndicate}&Email=${data.email}&TelegramAccount=${data.telegramAccount}&ReferredBy=${data.referredBy}`,
    })
      .then(() => {
        toast.dismiss();
        toast.success('Successfully submitted! Thanks for your interest!');
        reset();
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-background-secondary border-border-primary relative w-full rounded-2xl border p-4 md:rounded-3xl md:p-5 lg:w-[440px] lg:p-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Syndicate"
          placeholder="Enter your syndicate name"
          required
          error={errors.syndicate?.message}
          {...register('syndicate')}
        />

        <InputField
          label="Email"
          placeholder="example@email.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            label="Telegram Account"
            placeholder="@YourAccount"
            error={errors.telegramAccount?.message}
            {...register('telegramAccount')}
          />

          <InputField
            label="Referred By"
            placeholder="@FriendHandle"
            error={errors.referredBy?.message}
            {...register('referredBy')}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="button-primary mt-2 cursor-pointer rounded-xl px-6 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Pre-Register Now'}
        </Button>
      </form>
    </div>
  );
};

export default PreRegistrationForm;
