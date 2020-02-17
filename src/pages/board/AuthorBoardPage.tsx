import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthorCard from '../../components/authorCard/AuthorCard';

const AuthorBoardPage = () => {
  return (
    <Fragment>
      <div>Search</div>
      <Container>
        <Row className="row-custom-align">
          <div className="col-wrapper">
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
            <Col className="col-without-padding"><AuthorCard></AuthorCard></Col>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AuthorBoardPage;