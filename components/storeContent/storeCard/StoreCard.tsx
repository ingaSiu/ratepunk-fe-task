import Image from 'next/image';
import Link from 'next/link';
import { gadugi } from '@/components/fonts';
import styles from './StoreCard.module.scss';

type CardProps = {
  storeLink: string;
  imageLink: string;
  text: string;
  storeName: string;
};

const StoreCard = ({ imageLink, text, storeName, storeLink }: CardProps) => (
  <Link href={storeLink} target="_blank" className={styles.cardWrapper}>
    <Image src={imageLink} alt="store" width={68} height={60} />
    <div className={styles.wrapper}>
      <p className={styles.text}>{text}</p>
      <h4 className={`${styles.storeTitle} ${gadugi.className}`}>{storeName}</h4>
    </div>
  </Link>
);

export default StoreCard;
