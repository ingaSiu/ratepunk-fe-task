import Image from 'next/image';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.contactWrapper}>
    <h3>Contact</h3>
    <div className={styles.emailWrapper}>
      <Image src="/icons/email-footer.svg" alt="" width={16} height={16} />
      <p>hi@ratepunk.com</p>
    </div>

    <h3>Social</h3>
    <div className={styles.wrapper}>
      <Image src="/icons/instagram.svg" alt="Link to Instagram" width={32} height={32} />
      <Image src="/icons/facebook.svg" alt="Link to Facebook" width={32} height={32} />
      <Image src="/icons/linkedin.svg" alt="Link to LinkedIn" width={32} height={32} />
      <Image src="/icons/twitter.svg" alt="Link to Twitter" width={32} height={32} />
      <Image src="/icons/tiktok.svg" alt="Link to TikTok" width={32} height={32} />
    </div>
  </div>
);

export default Contact;
