import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = (): JSX.Element => {
  return (
    <Container className="page-styleGuide">
      <Row>
        <Col>
            <h2 className="mt-3 text-center">Our styleGuide</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;