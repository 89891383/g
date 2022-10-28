import React from 'react';
import * as styles from './FormField.module.scss';

const FormField = ({
  label,
  value,
  setValue,
  isArea,
  name = label,
  placeholder = label,
  type = 'text',
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      {isArea ? (
        <textarea
          name={name}
          id={name}
          required
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          rows="8"
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        <input
          name={name}
          id={name}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        />
      )}
    </div>
  );
};

export default FormField;
