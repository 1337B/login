import React from 'react';
import styles from '../../styles/components/UI/Logo.module.scss';

const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} className={styles.logo} />
);

export default Logo;
