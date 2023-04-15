import React from 'react';
import styles from './ProjectInfo.module.css';
import logo from '../..//assets/images/TextLogo.png'

const ProjectInfo = () => {
  return (
    <section className={styles.projectInfo}>
      <img src={logo} alt="YieldBit Logo" className={styles.logo} />
      <p>
        YieldBit is a revolutionary blockchain project that aims to provide passive income through Bitcoin holdings. By investing in our token, users can enjoy a 5% passive income in Bitcoin with a minimum investment of $50 USD. Our project is backed by a team of experienced developers and blockchain experts, ensuring a secure and profitable experience for our investors.
      </p>
      <p>
        The YieldBit token is built on a solid foundation of advanced blockchain technology, allowing for seamless integration with other cryptocurrency platforms and wallets. Our smart contracts ensure that token holders receive their Bitcoin dividends automatically and efficiently, without the need for manual intervention or third-party intermediaries.
      </p>
      <p>
        Our mission is to democratize access to passive income through Bitcoin, enabling people from all walks of life to benefit from the potential growth of this digital asset. We understand that the traditional financial system is not designed to cater to the needs of everyone, and that's why we've developed YieldBit as a decentralized solution for wealth generation.
      </p>
      <p>
        In addition to the passive income potential, YieldBit also offers a range of other benefits, such as a robust referral program, liquidity provision rewards, and exclusive access to upcoming projects within our ecosystem. These additional features further enhance the value proposition of our token, making it a compelling choice for investors and users alike.
      </p>
      <p>
        As part of our commitment to transparency and security, we have undergone extensive audits and security assessments by leading blockchain security firms. This ensures that our platform is free from vulnerabilities and that our users can have full confidence in the integrity of our project.
      </p>
      <p>
        We believe in the power of community and actively encourage our users to get involved in the growth and development of YieldBit. Our dedicated support team is always on hand to provide assistance and answer any questions, and we regularly host events and promotions to engage and reward our loyal user base.
       </p>
      <p>
        The future of finance is decentralized, and YieldBit is at the forefront of this movement. Join us as we embark on this exciting journey and unlock the full potential of passive income through Bitcoin.
       </p>
      <p>
        With a strong focus on innovation and user experience, we're constantly working to improve our platform and develop new features that cater to the evolving needs of the cryptocurrency market. By staying ahead of the curve and maintaining a commitment to excellence, we aim to make YieldBit the ultimate destination for passive income generation in the world of digital assets.
       </p>
     </section>
);
};

export default ProjectInfo;