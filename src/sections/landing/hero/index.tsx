import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';
import Arrow from '@/public/arrow.svg';
import BackgroundGraphic from '@/components/background';

const Hero = () => {
  return (
    <div className={styles.container}>
      <BackgroundGraphic />
      <div className={styles.cta}>
        <div>
          <h1>DiamondHacks</h1>
          <p>April 6-7, 2024 | UC San Diego</p>
        </div>
        <div className={styles.buttonsContainer}>
          <Link
            className={styles.applyNow}
            href="https://acmurl.com/diamondhacks-preregister"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply now
            <Image src={Arrow} alt="Apply now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
