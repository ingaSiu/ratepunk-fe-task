import { Caveat_Brush, Noto_Sans } from 'next/font/google';

import localFont from 'next/font/local';

export const noto_sans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const caveat_brush = Caveat_Brush({ subsets: ['latin'], weight: ['400'] });

export const gadugi = localFont({ src: '../public/fonts/gadugi.woff2' });
