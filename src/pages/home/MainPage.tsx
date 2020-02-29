import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './mainPages.scss';
import AboutTheProject from '../../components/mainPage/AboutTheProject';
import AuthorOfDay from '../../components/mainPage/AuthorOfDay';

const StyleGuide = (): JSX.Element => {
  return (
    <Container className="page-main">
      <Row>
        <Col>
          <AboutTheProject />
        </Col>
        <Col>
          <AuthorOfDay />
        </Col>
      </Row>
    </Container>
  );
};

export default StyleGuide;
