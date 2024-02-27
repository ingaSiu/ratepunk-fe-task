'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileNav.module.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    menuRef.current?.classList.toggle(styles.active);
  };
  return (
    <>
      <div ref={menuRef} className={styles.menu}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#">Chrome Extension</Link>
          </li>
          <li>
            <Link href="#">Price Comparison</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className={styles.wrapper}>
        {isOpen ? (
          <Image src="/icons/close.svg" alt="close mobile menu" width={19} height={16} />
        ) : (
          <Image src="/icons/menu.svg" alt="open mobile menu" width={19} height={16} />
        )}
      </div>
    </>
  );
};

export default MobileMenu;
