import { GalleryBox, ImgGallery } from './Gallery.styled';
import { ImageGalleryItem } from './GalleryItem/GalleryItem';

export const Gallery = ({ images, openModal }) => {
  return (
    <>
      <GalleryBox>
        <ImgGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={openModal}
            />
          ))}
        </ImgGallery>
      </GalleryBox>
    </>
  );
};
