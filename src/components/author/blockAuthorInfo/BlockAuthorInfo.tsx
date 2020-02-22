import React from 'react';
import { Row, Image } from 'react-bootstrap';

function BlockAuthorInfo(props: { imgSrc: React.ReactNode; authorName: React.ReactNode; authorLive: React.ReactNode; authorDescr: React.ReactNode; }) {
  return (
    <>
      <Row style={{ justifyContent: 'center' }}>
        <Image style={{ height: '200px' }} src={String(props.imgSrc)} rounded fluid />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h1>{props.authorName}</h1>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h2>{props.authorLive}</h2>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <h3>{props.authorDescr}</h3>
      </Row>
    </>
  );
}

export default BlockAuthorInfo;