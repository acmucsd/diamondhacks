import styles from './style.module.scss';

const BackgroundGraphic = () => {
  return (
    <>
      <img
        src="/backgrounds/hero/left.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.left}`}
      />
      <img
        src="/backgrounds/hero/right.svg"
        alt="Landing Page Graphic"
        className={`${styles.backgroundImage} ${styles.right}`}
      />
    </>
  );
};

export default BackgroundGraphic;
