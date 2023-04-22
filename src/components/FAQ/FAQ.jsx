import React, {useState} from "react";
import styles from "./FAQ.module.css";

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
  
    const toggleQuestion = (index) => {
      if (activeQuestion === index) {
        setActiveQuestion(null);
      } else {
        setActiveQuestion(index);
      }
    };
  
    const questions = [
      {
        question: 'What is YieldBit?',
        answer: 'YieldBit is a revolutionary token that allows investors to earn passive income in Bitcoin while also benefiting from a robust, secure, and growing ecosystem. Our platform aims to provide a seamless experience for users, with a focus on transparency and continuous development.'
      },
      {
        question: 'How does the passive income work?',
        answer: 'By holding YieldBit tokens (with a minimum investment of $50 USD), investors receive 5% passive income in Bitcoin. This income is automatically distributed to their wallets, ensuring a seamless and hassle-free experience. The more tokens you hold, the more passive income you can generate!'
      },
      { 
        question: 'How do I buy YieldBit?',
        answer: 'YieldBit is available for purchase on PancakeSwap. You can find the contract address on our website.'
      },
      {
        question: 'How do I earn passive income?',
        answer: 'Simply hold YieldBit tokens in your wallet and you will receive 5% passive income in Bitcoin. This income is automatically distributed to your wallet, ensuring a seamless and hassle-free experience. The more tokens you hold, the more passive income you can generate!'
      },
      {
        question: 'How do I withdraw my passive income?',
        answer: 'Your passive income is automatically distributed to your wallet. You can withdraw your passive income at any time.'
      },
      { 
        question: 'How do I sell YieldBit?',
        answer: 'YieldBit is available for sale on PancakeSwap. You can find the contract address on our website.'
      },


    ];
    
  
    return (
      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.accordion}>
            {questions.map((item, index) => (
              <div className={`${styles.accordionItem} ${activeQuestion === index ? styles.active : ''}`} key={index}>
                <div className={styles.question} onClick={() => toggleQuestion(index)}>
                  {item.question}
                </div>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq;
  