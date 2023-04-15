import React from "react";
import styles from "./Tokenomics.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faFire,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Tokenomics = () => {
  return (
    <section className={styles.tokenomicsSection}>
      <div className={styles.tokenomicsContent}>
        <h2 className={styles.sectionTitle}>Tokenomics</h2>
        <p className={styles.sectionSubtitle}>
          Discover the unique features of YieldBit's tokenomics that make it an
          attractive investment.
        </p>
        <div className={styles.tokenomicsGrid}>
          <div className={styles.tokenomicsItem}>
            <FontAwesomeIcon icon={faCoins} className={styles.icon} />
            <h3>5% Passive Income</h3>
            <p>
              Holders of YieldBit will receive a 5% passive income in Bitcoin,
              earned from transaction fees, with a minimum investment of $50
              USD.
            </p>
          </div>
          <div className={styles.tokenomicsItem}>
            <FontAwesomeIcon icon={faFire} className={styles.icon} />
            <h3>Deflationary Model</h3>
            <p>
              A percentage of every transaction will be burned, reducing the
              overall supply of YieldBit tokens and increasing their value over
              time.
            </p>
          </div>
          <div className={styles.tokenomicsItem}>
            <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
            <h3>Secure & Transparent</h3>
            <p>
              YieldBit is built on a decentralized and secure blockchain
              infrastructure, ensuring transparency and trust in the project.
            </p>
          </div>
          <div className={styles.tokenomicsItem}>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} />
            <h3>Community Driven</h3>
            <p>
              YieldBit puts the community first, with regular votes and input
              from token holders on future developments and improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

  