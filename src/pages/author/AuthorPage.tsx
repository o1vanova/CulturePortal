import React, { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BlockAuthorInfo from '../../components/author/blockAuthorInfo/BlockAuthorInfo';
import BlockAuthorLocation from '../../components/author/blockAuthorLocation/BlockAuthorLocation';
import StoreContext from '../../app/store';
import { useTranslation } from 'react-i18next';
import Gallery from '../../components/gallery/Gallery';

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

  return (
    <Fragment>
      <BlockAuthorInfo
        imgSrc={architect.imgSrc}
        authorName={architect.name}
        authorLive={architect.timeLife}
        authorDescr={architect.description}
      />
      <GalleryBlock />
      <BlockAuthorLocation />
    </Fragment>
  );
};

export default AuthorPage;
