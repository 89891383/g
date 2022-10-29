import React from 'react';
import * as styles from './Socials.module.scss';

import { socials } from 'config/socials';
import SocialItem from 'components/atoms/SocialItem/SocialItem';

const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {socials.map((item) => {
        return <SocialItem data={item} />;
      })}
    </div>
  );
};

export default Socials;
