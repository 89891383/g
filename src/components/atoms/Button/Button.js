import React from 'react';
import * as styles from './Button.module.scss';

const Button = ({ isSubmit, children, isSecondary, onClick }) => {
  return (
    <>
      {isSubmit ? (
        <button
          className={`${styles.button} ${
            isSecondary ? styles.secondary : null
          }`}
          type="submit"
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className={`${styles.button} ${
            isSecondary ? styles.secondary : null
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
