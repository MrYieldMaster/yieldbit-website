import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.sectionSubtitle}>
        Have questions or suggestions? Feel free to reach out to our team on
        Telegram or Discord. We'd love to hear from you!
      </p>
      <div className={styles.contactCards}>
        <a
          href="https://t.me/YieldBit"
          target="_blank"
          rel="noreferrer"
          className={styles.contactCard}
        >
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
        </a>
        <a
          href="https://discord.gg/C7EpsyTP"
          target="_blank"
          rel="noreferrer"
          className={styles.contactCard}
        >
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
