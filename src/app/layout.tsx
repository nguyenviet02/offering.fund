import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WagmiProviders } from '@/provider/wagmiProvider';
import { Header } from '@/components/layout';
import { ToastContainer } from 'react-toastify';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Offering.fund',
  description: 'Invest Early, At The Best Price, Just Like A VC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background-primary text-text-primary`}
      >
        <WagmiProviders>
          <Header />
          {children}
        </WagmiProviders>
        <ToastContainer />
      </body>
    </html>
  );
}
