import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WagmiProviders } from '@/provider/wagmiProvider';
import { Header, Footer } from '@/components/layout';
import { Toaster } from 'react-hot-toast';

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
        className={`${inter.className} bg-background-primary text-text-primary antialiased`}
      >
        <WagmiProviders>
          <Header />
          {children}
          <Footer />
        </WagmiProviders>
        <Toaster
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
