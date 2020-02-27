import ImageGallery from 'react-image-gallery';
import React from 'react';
import Media from '../../model/media';
import { useTranslation } from 'react-i18next';

import 'react-image-gallery/styles/scss/image-gallery.scss';

interface GalleryProps {
  images: Media[];
}

const Gallery = (props: GalleryProps): JSX.Element => {
  const { t } = useTranslation();

  const mappedImages = props.images.map((img: Media) => {
    return {
      original: img.url,
      thumbnail: img.url,
      description: t(img.title),
    };
  });
  return <ImageGallery items={mappedImages} lazyLoad={true} thumbnailPosition="right" showPlayButton={false} />;
};

export default Gallery;
