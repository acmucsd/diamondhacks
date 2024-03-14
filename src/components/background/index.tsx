import styles from './style.module.scss';

const BackgroundGraphic = () => {
  return (
    <>
      <img
        src="/backgrounds/hero/left.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.left} ${styles.desktop}`}
      />
      <img
        src="/backgrounds/hero/right.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.right} ${styles.desktop}`}
      />
      <img
        src="/backgrounds/hero/left-mobile.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.left} ${styles.mobile}`}
      />
      <img
        src="/backgrounds/hero/right-mobile.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.right} ${styles.mobile}`}
      />
    </>
  );
};

export default BackgroundGraphic;
