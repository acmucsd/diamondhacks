'use client';

import styles from './page.module.scss';
import Hero from '@/sections/landing/hero';
import Welcome from '@/sections/landing/welcome';
import Tracks from '@/sections/landing/tracks';
import Sponsors from '@/sections/landing/sponsors';
import Schedule from '@/sections/landing/schedule';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Welcome />
      <Tracks />
      <Schedule />
      <Sponsors />
    </main>
  );
}
