import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import BackgroundGraphic from './components/BackgroundGraphic';

const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'DiamondHacks',
  description: "ACM at UCSD's first hackathon!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <BackgroundGraphic />
        {children}
      </body>
    </html>
  );
}
