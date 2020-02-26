import React from 'react';
import { Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface BlockAuthorProps {
  imgSrc: string;
  authorName: string;
  authorLive: string;
  authorDescr: string;
}

function BlockAuthorInfo(props: BlockAuthorProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Row style={{ justifyContent: 'center' }}>
        <Image style={{ height: '200px' }} src={props.imgSrc} rounded fluid />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h1>{t(props.authorName)}</h1>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h2>{t(props.authorLive)}</h2>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h3>{t(props.authorDescr)}</h3>
      </Row>
    </>
  );
}

export default BlockAuthorInfo;
