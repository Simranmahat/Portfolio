import React from "react";
import styles from "./About.module.css";
import cursor from "/assets/cursorIcon.png"
import image from "/assets/aboutImage.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={image}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites in React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning (NLP)</h3>
              <p>
                I have experience in developing NLP custom models.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};