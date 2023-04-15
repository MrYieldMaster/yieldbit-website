import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logo}>YIELDBIT</h2>
        </div>

        <div className={styles.newsletter}>
          <h3>Subscribe to our Newsletter</h3>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Telegram: <a href="https://t.me/YieldBit" target="_blank" rel="noreferrer">
            YieldBit TG </a></p>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://twitter.com/your_handle" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://t.me/your_telegram_group" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="https://github.com/your_username" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* Add more social icons here */}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {(new Date()).getFullYear()} YieldBit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
