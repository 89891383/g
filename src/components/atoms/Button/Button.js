import React from 'react';
import * as styles from './Button.module.scss';

const Button = ({ children, isSecondary, onClick }) => {
  return (
    <button
      className={`${styles.button} ${isSecondary ? styles.secondary : null}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
