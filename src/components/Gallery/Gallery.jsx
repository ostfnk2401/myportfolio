import { ImgGallery } from './Gallery.styled';
import { ImageGalleryItem } from './GalleryItem';

export const Gallery = ({ images, openModal }) => {
  return (
    <>
      <ImgGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </ImgGallery>
    </>
  );
};
