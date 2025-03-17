import React from "react";

import styles from "./ProjectCard.module.css";


export const ProjectCard = ({
  project: { title, imageSrc,skills,Github },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={Github} className={styles.link}>
          Github
        </a>
      </div>
    </div>
  );
};