import '@/styles/globals.scss';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import StoreContent from '@/components/storeContent/StoreContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ratepunk FE Task',
  description: 'Ratepunk landing page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <StoreContent />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

