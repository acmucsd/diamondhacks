import PrizeCard from '@/components/PrizeCard';
import styles from './page.module.scss';
import { PRIZES, TOP_PRIZES } from './prizes';

export default function Prizes() {
  return (
    <main>
      <div className={styles.container}>
        <h2>Prizes</h2>
        <div className={styles.topThree}>
          {TOP_PRIZES.map(prize => (
            <PrizeCard
              variant={prize.variant}
              title={prize.title}
              descriptions={prize.descriptions}
              images={prize.images}
              key={prize.title}
            />
          ))}
        </div>
        <div className={styles.prizes}>
          {PRIZES.map(prize => (
            <PrizeCard
              title={prize.title}
              descriptions={prize.descriptions}
              images={prize.images}
              key={prize.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
