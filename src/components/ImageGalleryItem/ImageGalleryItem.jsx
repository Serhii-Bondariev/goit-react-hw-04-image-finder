import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, openModal }) => (
  <li
    className={css['ImageGalleryItem']}
    onClick={() => openModal(image.largeImageURL)}
  >
    <img
      className={css['ImageGalleryItem-image']}
      src={image.webformatURL}
      alt={image.id}
    />
  </li>
);

export default ImageGalleryItem;
