import Image from 'next/image';
import MobileMenu from './mobileNav/MobileNav';
import Nav from './nav/Nav';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src="/img/logo.svg" alt="Ratepunk logo on header" width={120} height={30} />
        <MobileMenu />
        <Nav />
      </div>
    </div>
  </header>
);
export default Header;
