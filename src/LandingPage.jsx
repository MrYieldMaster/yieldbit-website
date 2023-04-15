import React, { useState } from 'react';
import Countdown from '../src/components/CountdownTimer/CountdownTimer';
import styles from './LandingPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


const LandingPage = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <div className={styles.landingContainer}>
      <div className={styles.timerContainer}>
        <Countdown targetDate={new Date('2023-05-01T00:00:00')} />
      </div>
      <form onSubmit={handleSubmit} className={styles.emailInputContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.emailInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <a
         href="https://t.me/YieldBit"
         target="_blank"
         rel="noreferrer"
         className={styles.telegramButton}
        >
        <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
        <span style={{ marginLeft: '0.5rem' }}>Join us on Telegram</span>
        </a>

      </form>
    </div>
  );
};

export default LandingPage;
