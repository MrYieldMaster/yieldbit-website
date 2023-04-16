import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  // Replace the link with the actual URL of your private sale application
  const privateSaleURL = "https://your-private-sale-app-url.com";

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textBox}>
          <h1 className={styles.heroTitle}>YieldBit</h1>
          <p className={styles.heroSubtitle}>
            Revolutionizing the world with True Passive Income with BitCoin
          </p>
          <a href={privateSaleURL} className={styles.ctaButton}>
            <button className={styles.ctaButton}>Private Sale</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
