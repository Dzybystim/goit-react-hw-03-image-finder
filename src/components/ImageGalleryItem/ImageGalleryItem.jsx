import {ImageGalleryItemStyled, ImageGalleryItemImage} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags}) => {
    return <ImageGalleryItemStyled>
    <ImageGalleryItemImage  src={webformatURL} alt={tags} />
  </ImageGalleryItemStyled>
}