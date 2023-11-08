import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import css from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=39585624-363ad1b9d988237f1da4f5c58&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      setImages(prevImages => [...prevImages, ...data.hits]);
      setIsLoading(false);
    };

    fetchData();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = imageUrl => {
    setLargeImageUrl(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setLargeImageUrl('');
    setShowModal(false);
  };

  return (
    <div className={css[['App']]}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} openModal={handleOpenModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal imageUrl={largeImageUrl} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;

// ref;
