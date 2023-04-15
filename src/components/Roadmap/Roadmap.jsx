import React from "react";
import styles from "./Roadmap.module.css";
import animations from "./RoadmapAnimations.module.css"; // Import the animations

const Roadmap = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapContent}>
        <h2 className={styles.sectionTitle}>Roadmap</h2>
        <p className={styles.sectionSubtitle}>
          Follow YieldBit's journey as we progress through our ambitious roadmap and achieve major milestones.
        </p>
        <div className={styles.timeline}>
          {/* Add milestones as individual timeline items */}
          {renderTimelineItem("Q1 2023", [
            { text: "YieldBit Token Contract Launch", completed: false },
            { text: "Initial Marketing Campaign", completed: false },
            { text: "Website Launch", completed: true },
          ])}
          {renderTimelineItem("Q2 2023", [
            { text: "YieldBit Exchange Listings", completed: false },
            { text: "Partnerships & Integrations", completed: false },
            { text: "Community Expansion", completed: false },
          ])}
          {renderTimelineItem("Q3 2023", [
            { text: "YieldBit Mobile App Release", completed: false },
            { text: "Yield Farming Platform Launch", completed: false },
            { text: "NFT Marketplace Integration", completed: false },
          ])}
          {renderTimelineItem("Q4 2023", [
            { text: "YieldBit Staking Launch", completed: false },
            { text: "Cross-Chain Bridge Implementation", completed: false },
            { text: "Governance System Introduction", completed: false },
          ])}
          {renderTimelineItem("Q1 2024", [
            { text: "YieldBit Ecosystem Expansion", completed: false },
            { text: "New Tokenized Assets", completed: false },
            { text: "Decentralized Finance (DeFi) Solutions", completed: false },
          ])}
        </div>
      </div>
    </section>
  );
};

const renderTimelineItem = (title, milestones) => (
  <div className={`${styles.timelineItem} ${animations.fadeInUp}`}>
    <h3>{title}</h3>
    <ul>
      {milestones.map((milestone, index) => (
        <li key={index} className={`${milestone.completed ? styles.completedItem : ''} ${styles.goalItem}`}>
          {milestone.text}
        </li>
      ))}
    </ul>
  </div>
);

export default Roadmap;
