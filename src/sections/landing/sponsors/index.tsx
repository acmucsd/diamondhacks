import styles from './style.module.scss';
import { SPONSORS } from './sponsors';
import Link from 'next/link';

const Sponsors = () => {
  return (
    <div className={styles.pageContainer} id="sponsors">
      <h2>Sponsors</h2>
      <div className={styles.sponsors}>
        {SPONSORS.map(({ url, src }) => (
          <Link href={url} target="_blank" rel="noopener noreferrer" key={url}>
            <img src={`/sponsors/${src}`} alt={url} className={styles.sponsor} />
          </Link>
        ))}
      </div>
      <span>
        Interested in collaborating with us to make DiamondHacks happen? Reach out at{' '}
        <Link href="mailto:sponsor@acmucsd.org">sponsor@acmucsd.org</Link>!
      </span>
    </div>
  );
};

export default Sponsors;
