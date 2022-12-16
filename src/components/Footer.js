import React from "react";
import styles from "./Footer.module.css";
import twitterLogo from "./images/twitter.png";
import githubLogo from "./images/gitHub.png";
import instaLogo from "./images/insta.jpg"
import fbLogo from "./images/fb.png"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/Shashwat16Shekhar"
        >
          <img
            src={githubLogo}
            alt="Click to open Shashwat's GitHub"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://twitter.com/12a2f3088fc0448"
        >
          <img
            src={twitterLogo}
            alt="Click to open Shashwat's Twitter"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://instagram.com/shekhar_shashwat?igshid=YmMyMTA2M2Y="
        >
          <img
            src={instaLogo}
            alt="Click to open Shashwat's Insta"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://www.facebook.com/shashwat.shekhar.9?mibextid=ZbWKwL"
        >
          <img
            src={fbLogo}
            alt="Click to open Nikhil's facebook"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}