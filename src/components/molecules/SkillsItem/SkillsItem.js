import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import * as styles from './SkillsItem.module.scss';

const SkillsItem = ({ imageUrl, name, level, background, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={styles.wrapper}
      data-tip={level}
      data-for={name}
      style={{ backgroundColor: background }}
    >
      <ReactTooltip id={name} effect="solid" place="top" />
      <img src={imageUrl} alt={name} className={styles.icon} />
      <p style={{ color: text }} className={styles.label}>
        {name}
      </p>
    </motion.div>
  );
};

export default SkillsItem;
