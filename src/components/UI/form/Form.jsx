import React from 'react';

const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    {children}
  </form>
);

export default Form;
