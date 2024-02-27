import Link from 'next/link';
import styles from './Links.module.scss';

const Links = () => (
  <div className={styles.linksWrapper}>
    <h3 className={styles.title}>Quick links</h3>
    <ul>
      <li>
        <Link href="#" className={`${styles.link} ${styles.highlightedLink}`}>
          Price Comparison
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Chrome Extension
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          How It Works
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Ratepunk Blog
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
);

export default Links;
