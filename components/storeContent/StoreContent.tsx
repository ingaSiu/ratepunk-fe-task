import { AiFillStar } from 'react-icons/ai';
import StoreCard from './storeCard/StoreCard';
import styles from './StoreContent.module.scss';

const StoreContent = () => {
  const starRow = new Array(5).fill(undefined).map((_, index) => <AiFillStar key={index} />);

  return (
    <div className={styles.storeWrapper}>
      <StoreCard
        storeLink="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklk
      hgcbomfdck?utm_source=ratepunk"
        imageLink="/img/chrome.svg"
        text="available in the"
        storeName="chrome web store"
      />
      <StoreCard
        storeLink="https://apps.apple.com/app/ratepunk/id1607823726"
        imageLink="/img/apple.svg"
        text="available in the"
        storeName="apple web store"
      />

      <div className={styles.reviewsWrapper}>
        <div className={styles.starsRow}>{starRow}</div>
        <p>Chrome store reviews</p>
      </div>
    </div>
  );
};

export default StoreContent;
