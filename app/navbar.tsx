'use client';
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>

      <div className={` ${isOpen ? styles.mobileVisible :styles.movilenotvisible }`}>
          <Link href="/" className={styles.homelink + " links"} >Home</Link>
          <Link href="/about" className={styles.aboutlink + " links"} >About Us</Link>
          <Link href="/how-to-play" className={styles.howtoplaylink + " links"} >How To Play</Link>
          <Link href="/faq" className={styles.faqlink + " links"} >FAQ</Link>
          <Link href="/contact" className={"contact-us-link" + " links" + styles.contactbtn} ><button>Contact</button></Link>
        </div>
      <div className={styles.NavBar}>
        <div className={styles.weblogo}>
          <div className="logo">
            <h3><Link href="/" className={styles.weblogotext} style={{color:"white"}}>Mahakal</Link></h3>
          </div>
        </div>

        {/* Web Links - shown on large screens */}
      <div className={styles.weblinks }>
          <Link href="/" className={styles.homelink + " links"} >Home</Link>
          <Link href="/about" className={styles.aboutlink + " links"} >About Us</Link>
          <Link href="/how-to-play" className={styles.howtoplaylink + " links"} >How To Play</Link>
          <Link href="/faq" className={styles.faqlink + " links"} >FAQ</Link>
          <Link href="/contact" className={"contact-us-link" + " links" + styles.contactbtn} ><button>Contact</button></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.menubar}>
          <button onClick={toggleMenu} className={styles.menuBtn}>
            ☰
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
