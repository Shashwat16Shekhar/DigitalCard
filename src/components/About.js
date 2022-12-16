import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
        Software developer with 5 years of experience in the application development process. Involved in the development of various stages of the life cycle of software development including design creation, coding and testing.
        Worked on Warehouse management open system(WMOS), point of sale(pos) and Demand Management web based application. Proficient in Java, Python, Spring, Spring boot, hibernates, React, Data structures and Algorithms.
      </p>
    </main>
  );
}