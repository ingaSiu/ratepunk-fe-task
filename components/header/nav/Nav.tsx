import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="#" className={styles.coloredLink}>
      Chrome Extension
    </Link>
    <Link href="#">Price Comparison</Link>
    <Link href="#">Blog</Link>
  </nav>
);

export default Nav;
