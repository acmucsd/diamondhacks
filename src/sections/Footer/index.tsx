import Socials from '@/components/Socials';
import styles from './footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/acm-logo.png" alt="ACM Logo" width={100} height={100} />

        <h1 className={styles.title}>
          <span className={styles.acm}>ACM</span> at UCSD
        </h1>
      </div>

      <Socials />
    </div>
  );
}
