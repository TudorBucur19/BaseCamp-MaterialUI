import React from 'react';
import  ImageGallery  from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const ImageCarousel = ({ images }) => {
    const multiplePhotos = images.length > 1;
    
    const items = images.map(image => ({
        original: image.url,
        thumbnail: image.url,
        originalHeight: '100%',
        originalWidth: '100%',
        thumbnailHeight: '50px',
    }));
    
    return ( 
        <ImageGallery 
        items={items} 
        showThumbnails={multiplePhotos} 
        showPlayButton={multiplePhotos} 
        showNav={false}
        />
     );
}
 
export default ImageCarousel;