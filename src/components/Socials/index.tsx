import styles from './socials.module.scss';

export default function Socials() {
  return (
    <div className={styles.socialsContainer}>
      <a className={styles.socialItem} href="https://acmurl.com/instagram" target="_blank">
        <img src="./instagram-logo.svg" alt="Instagram Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/discord" target="_blank">
        <img src="./discord-logo.svg" alt="Discord Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/facebook" target="_blank">
        <img src="./facebook-logo.svg" alt="Facebook Logo" className={styles.socialImage} />
      </a>
    </div>
  )
}