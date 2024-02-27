import styles from './Referral.module.scss';
import { useRef } from 'react';

const Referral = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const value = 'https://ratepunk.com/referral';

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <>
      <div className={styles.inputWithButton}>
        <input type="text" ref={inputRef} value={value} readOnly className={styles.inputDesktop} />
        <button onClick={handleCopy} className={styles.sideButton}>
          Copy
        </button>
      </div>

      <div className={styles.mobileInputWrapper}>
        <input type="text" ref={inputRef} value={value} readOnly className={styles.inputMobile} />
        <button onClick={handleCopy} className={styles.mobileButton}>
          Copy URL
        </button>
      </div>
    </>
  );
};

export default Referral;
