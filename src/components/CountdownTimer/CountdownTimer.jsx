import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(targetDate - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.countdownTitle}>YieldBit Launch</h2>
      <div className={styles.countdown}>
        <div className={styles.countdownSegment}>
          <span>{days}</span>
          <span>Days</span>
        </div>
        <div className={styles.countdownSegment}>
          <span>{hours}</span>
          <span>Hours</span>
        </div>
        <div className={styles.countdownSegment}>
          <span>{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className={styles.countdownSegment}>
          <span>{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

