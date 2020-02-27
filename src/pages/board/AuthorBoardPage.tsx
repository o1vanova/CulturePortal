import React, { Fragment, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthorCard from '../../components/authorCard/AuthorCard';
import StoreContext from '../../app/store';

const AuthorBoardPage = (): JSX.Element => {
  const { architects } = useContext(StoreContext);

  return (
    <Fragment>
      <div>Search</div>
      <Container>
        <Row className="row-custom-align">
          {architects.map((x, i) => (
            <Col className="col-without-padding" key={i}>
              <AuthorCard author={x}></AuthorCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default AuthorBoardPage;
