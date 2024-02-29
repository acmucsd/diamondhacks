import styles from './page.module.scss';
import Image from 'next/image';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Footer />
    </main>
  );
}
