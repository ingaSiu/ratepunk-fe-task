import Image from 'next/image';
import styles from './SuccessMessage.module.scss';

const SuccessMessage = () => (
  <div className={styles.successMessage}>
    <Image src="./icons/success.svg" alt="Success icon" width={20} height={20} />
    <div className={styles.text}>Your email is confirmed!</div>
  </div>
);

export default SuccessMessage;
