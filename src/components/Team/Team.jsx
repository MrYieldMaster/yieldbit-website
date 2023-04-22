import React from "react";
import styles from "./Team.module.css";
import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";
import member4 from "../../assets/images/member4.png";

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContent}>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <p className={styles.sectionSubtitle}>
          Meet the dedicated and experienced team behind YieldBit, working tirelessly to revolutionize the world with True Passive Income.
        </p>
        <div className={styles.teamGrid}>
          {/* Add team members as individual team items */}
          <div className={styles.teamItem}>
            <img src={member1} alt="Team member 1" className={styles.teamImage} />
            <h3>DevWizard</h3>
            <p>CEO & Co-founder</p>
          </div>
          <div className={styles.teamItem}>
            <img src={member2} alt="Team member 2" className={styles.teamImage} />
            <h3>MoonDev</h3>
            <p>CTO & Co-founder</p>
          </div>
          <div className={styles.teamItem}>
            <img src={member3} alt="Team member 3" className={styles.teamImage} />
            <h3>C.Gen</h3>
            <p>Marketer</p>
          </div>
          <div className={styles.teamItem}>
            <img src={member4} alt="Team member 4" className={styles.teamImage} />
            <h3>BlockChain Dev</h3>
            <p>Block Dev</p>
          </div>
          {/* Add more team items for additional team members */}
        </div>
      </div>
    </section>
  );
};

export default Team;
