import React from 'react';
import * as styles from './SkillsItem.module.scss';

const SkillsItem = ({ imageUrl, name, level, background, text }) => {
  console.log(background);
  return (
    <div className={styles.wrapper} style={{ backgroundColor: background }}>
      <img src={imageUrl} alt={name} className={styles.icon} />
      <p style={{ color: text }} className={styles.label}>
        {name}
      </p>
    </div>
  );
};

export default SkillsItem;
