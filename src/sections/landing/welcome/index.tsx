import Image from 'next/image';
import styles from './style.module.scss';

const Welcome = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.welcome}>
        <div className={styles.welcomeMessage}>
          <h2>Welcome to DiamondHacks!</h2>
          <p>
            Our mission at DiamondHacks is to bring together hackers from diverse backgrounds to
            develop innovative solutions to real world problems. All experience levels are welcome.
          </p>
        </div>
        <div className={styles.diamondsContainer}>
          <div className={styles.diamond}>
            <Image src="/white-square-pink-border.svg" fill={true} alt="White Square" />
            <p className={styles.studentCount}>2000+</p>
            <p className={styles.diamondText}>students</p>
          </div>
          <div className={styles.diamond}>
            <Image src="/white-square-purple-border.svg" fill={true} alt="White Square" />
            <p className={styles.eventCount}>150+</p>
            <p className={styles.diamondText}>annual events</p>
          </div>
          <div className={styles.diamond}>
            <Image src="/white-square-green-border.svg" fill={true} alt="White Square" />
            <p className={styles.prizes}>$5,000</p>
            <p className={styles.diamondText}>in prizes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
