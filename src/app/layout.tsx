import Footer from '@/sections/footer';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Navbar from '@/sections/navbar';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DiamondHacks',
  description: "ACM at UCSD's first hackathon in collaboration with TESC!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <Navbar />
        {children}
      </body>
      <footer className={dmSans.className}>
        <Footer />
      </footer>
    </html>
  );
}
