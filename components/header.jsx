import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>The VC Experience</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
