import React from 'react'
import styles from "./Contact.module.css"
import email from "/assets/emailIcon.png"
import linkedin from "/assets/linkedinIcon.png"
import github from "/assets/githubIcon.png"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to Reach</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={email} alt="Email.icon" />
            <a href="mailto:simranmahat123@gmail.com">simranmahat123@gmail.com</a>
            </li>
            <li className={styles.link}><img src={linkedin} alt="linkedin.icon" />
            <a href="https://www.linkedin.com/in/simranmahat/">linkedin.com/in/simranmahat/</a>
            </li>
            <li className={styles.link}><img src={github} alt="github.icon"/>
            <a href="https://github.com/Simranmahat">github.com/Simranmahat/</a>
            </li>

        </ul>
    </footer>
  )
}

export default Contact
