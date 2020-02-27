import React, { Fragment } from 'react';
import { Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './BlockAuthorInfo.scss';

interface BlockAuthorProps {
  imgSrc: string;
  backSrc: string;
  authorName: string;
  authorLive: string;
  authorDescr: string;
}

function BlockAuthorInfo(props: BlockAuthorProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Row className="card__header">
        <Image className="card__image--left" src={props.imgSrc} />
        <Image className="card__image--back" src={props.backSrc} fluid />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h1>{t(props.authorName)}</h1>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h2>{t(props.authorLive)}</h2>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <p>{t(props.authorDescr)}</p>
      </Row>
    </Fragment>
  );
}

export default BlockAuthorInfo;
