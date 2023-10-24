import React, { useEffect, useState } from 'react';
import { GalleryDiv } from './GalleryPage.styled';
import { Searchbar } from 'components/Gallery/SearchBar/SearchBar';
import { fetchImages } from 'components/Gallery/GalleryApi/GalleryApi';
import { Loader } from 'components/Gallery/Loader/Loader';
import { Gallery } from 'components/Gallery/Gallery';
import { ImageModal } from 'components/Gallery/Modal/ImageModal';
import { Button } from 'components/Gallery/Button/Button';

const GalleryPage = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({
    image: '',
    alt: '',
  });
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getSearchedImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoadMore(page * 12 < data.totalHits);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchedImages();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image, alt) => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
    setDataModal({ image, alt });
  };
  return (
    <>
      <GalleryDiv>
        <Searchbar setQuery={handleSubmit} />
        <Gallery images={images} openModal={openModal} />
        {isLoading && <Loader />}
        {loadMore && <Button onClick={changePage} />}
        {isModalOpen && <ImageModal image={dataModal} onClose={openModal} />}
      </GalleryDiv>
    </>
  );
};

export default GalleryPage;
