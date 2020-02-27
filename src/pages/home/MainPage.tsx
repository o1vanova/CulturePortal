import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../components/mainPage/mainPages.scss';
import AboutTheProject from '../../components/mainPage/aboutTheProject/AboutTheProject';
import AuthorOfDay from '../../components/mainPage/AuthorOfDay';

const MainPage = (): JSX.Element => {
  return (
    <Container>
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

export default MainPage;
