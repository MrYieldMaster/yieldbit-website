import React, { useState } from 'react';
import styles from './InvestmentCalculator.module.css';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(0);
  const [duration, setDuration] = useState(0);
  const [earnings, setEarnings] = useState(0);

  const calculateEarnings = () => {
    // Replace this with your project's specific calculation logic
    const yearlyRate = 0.38; // Example: 38% yearly return
    const compoundedEarnings = investment * Math.pow(1 + yearlyRate, duration);
    setEarnings(compoundedEarnings - investment);
  };

  return (
    <section className={styles.investmentCalculator}>
      <h2 className={styles.calculatorTitle}>Investment Calculator</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="investment">Investment Amount:</label>
        <input
          type="number"
          id="investment"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="duration">Holding Duration (years):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button className={styles.calculateButton} onClick={calculateEarnings}>
        Calculate Earnings
      </button>
      <div className={styles.result}>
        <p>Potential Earnings: ${earnings.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
