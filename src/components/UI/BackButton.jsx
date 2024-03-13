import React from 'react';
import backButton from '../../styles/components/UI/BackButton.module.scss';
import button from '../../styles/components/UI/form/Button.module.scss';
import Button from '../UI/form/Button'

const BackButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} className={`${button.button} ${backButton.BackButton} `}>
      {children}
    </Button>
  );
};

export default BackButton;
