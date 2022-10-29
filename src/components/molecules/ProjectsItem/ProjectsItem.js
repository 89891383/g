import React from 'react';
import * as styles from './ProjectsItem.module.scss';

const ProjectsItem = ({
  title,
  description,
  image,
  livePreview,
  sourceCode,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={livePreview} target="_blank" className={styles.button}>
          Odwiedź stronę
        </a>
        <a
          href={sourceCode}
          target="_blank"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Kod źródłowy
        </a>
      </div>
      <div>
        <img className={styles.image} src={image} alt={`${title} screenshot`} />
      </div>
    </div>
  );
};

export default ProjectsItem;
