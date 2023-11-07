import React from 'react';
import css from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => (
  <div className={css['Overlay']} onClick={onClose}>
    <div className={css['Modal']}>
      <img src={imageUrl} alt="Large" />
    </div>
  </div>
);

export default Modal;
