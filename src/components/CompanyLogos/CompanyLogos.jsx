import React from 'react';
import styles from './CompanyLogos.module.css';
import logo01 from '../..//assets/images/logo01.png';
import logo02 from '../..//assets/images/logo02.png';
import logo03 from '../..//assets/images/logo03.png';
import logo04 from '../..//assets/images/logo04.png';


const CompanyLogos = () => {
  return (
    <section className={styles.companyLogos}>
      <h2 className={styles.partnerShipTitle}>Partnerships</h2>
      <div className={styles.logos}>
        <img className={styles.companyLogo} src={logo01} alt="Company Logo 1" />
        <img className={styles.companyLogo} src={logo02} alt="Company Logo 2" />
        <img className={styles.companyLogo} src={logo03} alt="Company Logo 3" />
        <img className={styles.companyLogo} src={logo04} alt="Company Logo 4" />
      </div>
    </section>
  );
};

export default CompanyLogos;

