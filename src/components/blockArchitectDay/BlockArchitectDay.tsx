import React, {Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Row, Col, Image } from 'react-bootstrap';

const BlockArchitecDay = (props:any) => {
  return (
    <Fragment>
      {/* <a href={'authors/' + props.author.id} className="Author-reference"></a> */}
      <Card bg="light" text="dark" className="m-3" >
        <Card.Header as="h5" className="text-center">Архитектор дня</Card.Header>
        <Card.Body>
          <Row>
            <Col md={3}>              
              <Image src={props.architect.imageSrc} thumbnail />
            </Col>
            <Col md={9}>
              <Card.Title>{props.architect.name}</Card.Title>
              <Card.Text>{props.architect.description}</Card.Text>          
              <Button variant="dark">Перейти</Button>
            </Col>
          </Row>          
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default BlockArchitecDay;