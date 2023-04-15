import React from "react";
import styles from "./Team.module.css";

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
              <img src="../../assets/images/member1.jpg" alt="Team member 1" className={styles.teamImage} />
              <h3>DevWizard</h3>
              <p>CEO & Co-founder</p>
            </div>
            <div className={styles.teamItem}>
              <img src="../../assets/images/member2.jpg" alt="Team member 2" className={styles.teamImage} />
              <h3>BigJohn</h3>
              <p>CTO & Co-founder</p>
            </div>
            {/* Add more team items for additional team members */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  