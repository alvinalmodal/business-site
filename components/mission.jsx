import React from "react";
import styles from "../styles/Mission.module.css";

const Mission = () => {
  return (
    <React.Fragment>
      <section id="mission" className={styles.mission}>
        <article className={styles["mission-content"]}>
          <h2>The VC Experience</h2>
          <h4>
            Our fund is committed to the furthering entrepreneurs in the
            mobility sector.
          </h4>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Mission;
