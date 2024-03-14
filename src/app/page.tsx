'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import Hero from './sections/landing/hero';
import Welcome from './sections/landing/welcome';
import Tracks from './sections/landing/tracks';

export default function Home() {
  const dummy = () => {};

  return (
    <main className={styles.main}>
      <Hero />
      <Welcome />
      <Tracks />
    </main>
  );
}
