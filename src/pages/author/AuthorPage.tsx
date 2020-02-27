import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BlockAuthorInfo from '../../components/author/blockAuthorInfo/BlockAuthorInfo';
import BlockAuthorLocation from '../../components/author/blockAuthorLocation/BlockAuthorLocation';
import StoreContext from '../../app/store';
import { useTranslation } from 'react-i18next';
import Gallery from '../../components/gallery/Gallery';
import { Container } from 'react-bootstrap';
import Author from '../../model/author';

import './AuthorPage.scss';

const getImage = (item: Author): string | null => {
  const items = item.images;
  if (!items || items.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * items.length);
  return items[index].url;
};

const AuthorPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { architectId } = useParams();
  const { architects } = useContext(StoreContext);

  const architect = architects.find(item => architectId == item.id.toString());
  if (!architect) {
    return <p>{t('content.notFound')}</p>;
  }

  const GalleryBlock = (): JSX.Element | null => {
    if (!architect || !architect.images) {
      return null;
    }
    return <Gallery images={architect.images} />;
  };

  const LocationBlock = (): JSX.Element | null => {
    if (!architect || !architect.places) {
      return null;
    }
    return <BlockAuthorLocation places={architect.places} />;
  };

  const backSrc = getImage(architect) || architect.imgSrc;

  return (
    <Container>
      <BlockAuthorInfo
        imgSrc={architect.imgSrc}
        backSrc={backSrc}
        authorName={architect.name}
        authorLive={architect.timeLife}
        authorDescr={architect.description}
      />
      <GalleryBlock />
      <LocationBlock />
    </Container>
  );
};

export default AuthorPage;
