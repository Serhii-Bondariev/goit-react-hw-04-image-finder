import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick, disabled }) => (
  <button
    type="button"
    className={css['Button']}
    onClick={onClick}
    disabled={disabled}
  >
    Load more
  </button>
);

export default Button;
