// src/components/UI/Form/Button.jsx
import React from 'react';
import styles from '../../../styles/components/UI/form/Button.module.scss';

function Button({ onClick, children, icon, className }) {
  return (
    <button onClick={onClick} className={`${styles.Button} ${className}`}>
      {icon && <img src={icon} alt="" className={styles.authIcon} />}
      {children}
    </button>
  );
}

export default Button;
