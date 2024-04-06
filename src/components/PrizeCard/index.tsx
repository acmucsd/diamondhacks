'use client';
import styles from './style.module.scss';
import RedDiamond from '@/public/graphics/red-diamond.png';
import BlueDiamond from '@/public/graphics/blue-diamond.png';
import GreenDiamond from '@/public/graphics/green-diamond.png';
import Image from 'next/image';

interface PrizeCardProps {
  variant?: 'first' | 'second' | 'third' | 'default';
  title: string;
  descriptions: string[];
  images: string[];
}

const PrizeCard = ({ title, descriptions, images, variant = 'default' }: PrizeCardProps) => {
  let src = undefined;
  switch (variant) {
    case 'first':
      src = BlueDiamond;
      break;
    case 'second':
      src = RedDiamond;
      break;
    case 'third':
      src = GreenDiamond;
      break;
  }
  return (
    <div className={styles.container}>
      {src !== undefined ? (
        <Image src={src} alt={`${variant} place`} className={styles.image} />
      ) : null}
      <div className={styles.card}>
        <div className={styles.header} data-variant={variant}>
          {title}
        </div>
        <div className={styles.body}>
          <div>
            {descriptions.map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className={styles.images}>
            {images.map(d => (
              <Image
                key={d}
                src={`/prizes/${d}`}
                alt={d}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
