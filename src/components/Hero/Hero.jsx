import React from 'react';
import styles from "./Hero.module.css";
import hero from "/assets/profile.png"
import CV from "/CV.pdf"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I am Simran Mahat</h1>
            <p className={styles.description}>
                I am software developer passionate about Machine Learning and AI.
            </p>
            <div className={styles.buttoncontainer}>
            <a  href="mailto:simranmahat123@gmail.com" className={styles.contactBtn}>Contact me </a>

            <a href={CV} download={"Simran_Mahat_CV.pdf"}className={styles.contactBtn}>Download My CV</a>
            </div>
        </div>
        <img src={hero} alt="Hero Image of me"className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
                
            
    </section>
  )
}

export default Hero
