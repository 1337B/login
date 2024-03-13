import React from 'react';
import styles from '../../../styles/components/UI/form/InputField.module.scss';

const InputField = ({ name, type, placeholder, required }) => (
  <input
    name={name}
    type={type}
    required={required}
    placeholder={placeholder}
    className={`${styles.inputField} w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
  />
);

export default InputField;
