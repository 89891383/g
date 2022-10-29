import React from 'react';

import * as styles from './Header.module.scss';
import Socials from 'components/molecules/Socials/Socials';

const Header = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Witaj na Revku.dev!</h1>
        <p className={styles.subtitle}>front-end developer & ui designer</p>

        <Socials />
      </div>
    </div>
  );
};

export default Header;
