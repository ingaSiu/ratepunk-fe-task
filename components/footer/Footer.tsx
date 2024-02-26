import Contact from './contact/Contact';
import Intro from './intro/Intro';
import Links from './links/Links';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Intro />
      <Links />
      <Contact />

      <p className={styles.copyrightMobile}>© 2021 Ratepunk. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
