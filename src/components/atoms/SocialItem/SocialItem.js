import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import * as styles from './SocialItem.module.scss';

const Socialdata = ({ data }) => {
  return (
    <>
      <motion.a
        whileHover={{ backgroundColor: data.hoverColor, scale: 1.1 }}
        className={styles.item}
        href={data.url}
        target="_blank"
        data-tip={data.name}
        data-for={data.name}
      >
        <img src={data.icon} alt={data.name} />
      </motion.a>
      <div key={data.name}>
        <ReactTooltip
          id={data.name}
          effect="solid"
          place="top"
          backgroundColor={data.hoverColor}
        />
      </div>
    </>
  );
};

export default Socialdata;
