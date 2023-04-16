import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../..//assets/images/logo05.png"


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="YieldBit Logo" className={styles.logoImage} />
              Growth
            </Link>
          </div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/tokenomics">Tokenomics</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <button className={styles.connectWalletBtn}>Telegram</button>
      </nav>
    );
  };
  
  export default Navbar;