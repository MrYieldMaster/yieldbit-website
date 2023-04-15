import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textBox}>
          <h1 className={styles.heroTitle}>Bitcoin</h1>
          <p className={styles.heroSubtitle}>
            Revolutionizing the world with True Passive Income with YieldBit
          </p>
          <button className={styles.ctaButton}>Private Sale</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;