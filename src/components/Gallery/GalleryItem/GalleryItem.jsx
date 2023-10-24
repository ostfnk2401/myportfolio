import { Component } from 'react';
import { ImgGalleryImage, ImgGalleryItem } from './GalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;

    return (
      <ImgGalleryItem onClick={e => openModal(image.largeImageURL, image.tags)}>
        <ImgGalleryImage src={image.webformatURL} alt={image.tags} />
      </ImgGalleryItem>
    );
  }
}
