import Image from 'next/image';
import styles from './Intro.module.scss';

const Intro = () => (
  <div className={styles.introWrapper}>
    <Image src="/img/logo.svg" alt="Ratepunk logo" width={120} height={30} />
    <p className={styles.introText}>
      Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk
      extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re
      getting the best deal!
    </p>
    <p className={styles.copyrightDesktop}>© 2021 Ratepunk. All Rights Reserved.</p>
  </div>
);

export default Intro;
