import React from 'react';

import * as styles from './Footer.module.scss';
import logo from '@images/textLogo.svg';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.copyright}>
        Revku.dev ©️ 2022 | All rights reserved
      </p>
      <div className={styles.logowrapper}>
        <p className={styles.paragraph}>Powered by</p>
        <img src={logo} alt="Revku Logo" />
      </div>
    </div>
  );
};

export default Footer;
