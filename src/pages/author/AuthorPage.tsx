import React, { useContext, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlockAuthorInfo from '../../components/author/blockAuthorInfo/BlockAuthorInfo';
import BlockAuthorLocation from '../../components/author/blockAuthorLocation/BlockAuthorLocation';
import StoreContext from '../../app/store';
import { useTranslation } from 'react-i18next';
import Gallery from '../../components/gallery/Gallery';
import BlockAuthorVideo from '../../components/author/blockAuthorVideo/BlockAuthorVideo';
import { Row, Button } from 'react-bootstrap';
import BlockAuthorTimeline from '../../components/author/blockAuthorTimeline/BlockAuthorTimeline';
import BlockWorkList from '../../components/author/blockWorkList/BlockWorkList';

const AuthorPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { architectId } = useParams();
  const { architects } = useContext(StoreContext);

  const architect = architects.find(item => architectId == item.id.toString());
  if (!architect) {
    return <p>{t('content.notFound')}</p>;
  }

  const TimeLineBlock = (): JSX.Element | null => {
    if (!architect || !architect.timeLines) {
      return null;
    }
    return <BlockAuthorTimeline timeLines={architect.timeLines} />;
  };

  const WorksBlock = (): JSX.Element | null => {
    if (!architect || !architect.works) {
      return null;
    }
    return <BlockWorkList works={architect.works} />;
  };

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

  const [isShow, setIsShow] = useState(false);
  function handleClickVideo() {    
    setIsShow(true);
  }

  return (
    <Fragment>
      <Row className='mt-5'>
        <BlockAuthorInfo
          imgSrc={architect.imgSrc}
          authorName={architect.name}
          authorLive={architect.timeLife}
          authorDescr={architect.description}
        />
      </Row>

      <Row className='mt-5'>
        <TimeLineBlock  />
      </Row>

      <Row className='mt-5'>
        <WorksBlock  />
      </Row>

      <BlockAuthorVideo link={String(architect.video?.url).replace("watch?v=","embed/")} show={isShow} onHide={() => setIsShow(false)}/>
      <Row className="justify-content-center mt-5">
        <Button variant="secondary" onClick={handleClickVideo} size="lg">Смотреть видео</Button>
      </Row>
      
      <Row className='overflow-hidden mt-5'>
        <LocationBlock />
      </Row>

      <Row className='mt-5 mb-5'>
        <GalleryBlock />
      </Row>
    </Fragment>
  );
};

export default AuthorPage;
