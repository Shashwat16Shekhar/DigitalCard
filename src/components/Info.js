import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "./images/pic.jpeg";
import emailLogo from "./images/mail.png";
import linkendinLogo from "./images/linkedIn.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Shashwat Shekhar"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Shashwat Shekhar</h1>
        <p className={styles.title}>Full Stack Developer</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="mailto:shashwatshekharuta@gmail.com"
          >
            <img className={styles.icons} src={emailLogo} alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/shashwat-723bab95"
          >
            <img className={styles.icons} src={linkendinLogo} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}