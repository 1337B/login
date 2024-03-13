import React from 'react';
import styles from '../../styles/pages/Login.module.scss';

const LinkText = ({ href, text }) => (
  <div className="text-center">
    <a href={href} className="text-blue-600 hover:underline">
      {text}
    </a>
  </div>
);

export default LinkText;
