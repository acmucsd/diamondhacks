import Socials from '@/components/socials';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
      <a className={styles.left} href="https://acmurl.com/" target="_blank">
        <Image src="/acm-logo.png" alt="ACM Logo" width={100} height={100} />

        <h1 className={styles.title}>
          <span className={styles.acm}>ACM</span> at UCSD x TESC
        </h1>
      </a>
      <Socials />
    </div>
  );
}
