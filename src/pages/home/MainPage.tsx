import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../components/mainPage/mainPages.scss';
import AboutTheProject from '../../components/mainPage/AboutTheProject';

const MainPage = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <AboutTheProject />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
