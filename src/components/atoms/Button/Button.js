import React from 'react';
import * as styles from './Button.module.scss';

const Button = ({ isSubmit, children, isSecondary }) => {
  return (
    <>
      {isSubmit ? (
        <button
          className={`${styles.button} ${
            isSecondary ? styles.secondary : null
          }`}
          type="submit"
        >
          {children}
        </button>
      ) : (
        <button
          className={`${styles.button} ${
            isSecondary ? styles.secondary : null
          }`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
