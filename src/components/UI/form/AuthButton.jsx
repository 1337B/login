// src/components/UI/Form/AuthButton.jsx
import React from 'react';
import styles from '../../../styles/components/UI/form/AuthButton.module.scss';

function AuthButton({ onClick, children, icon }) {
  return (
    <button onClick={onClick} className={styles.authButton}>
      {icon && <img src={icon} alt="" className={styles.authIcon} />}
      {children}
    </button>
  );
}

export default AuthButton;
