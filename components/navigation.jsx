import React from "react";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <a href="#mission-statement" className>
          Mission Statement
        </a>
        <a href="#portfolio">Portfolio</a>
        <a href="#investment-team">Investment Team</a>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
