import '@/styles/globals.scss';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import StoreContent from '@/components/storeContent/StoreContent';
import { noto_sans } from '@/components/fonts';

export const metadata: Metadata = {
  title: 'Ratepunk FE Task',
  description: 'Ratepunk landing page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <Header />
        {children}
        <StoreContent />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

