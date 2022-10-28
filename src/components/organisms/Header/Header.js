import React from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';

import * as styles from './Header.module.scss';
import { socials } from '@src/config/socials';

const Header = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Witaj na Revku.dev!</h1>
        <p className={styles.subtitle}>front-end developer & ui designer</p>

        <div className={styles.socials}>
          {socials.map((item) => {
            return (
              <>
                <motion.a
                  whileHover={{ backgroundColor: item.hoverColor, scale: 1.1 }}
                  className={styles.socialItem}
                  href={item.url}
                  target="_blank"
                  data-tip={item.name}
                  data-for={item.name}
                >
                  <img src={item.icon} alt={item.name} />
                </motion.a>
                <div key={item.name}>
                  <ReactTooltip
                    id={item.name}
                    effect="solid"
                    place="top"
                    backgroundColor={item.hoverColor}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
