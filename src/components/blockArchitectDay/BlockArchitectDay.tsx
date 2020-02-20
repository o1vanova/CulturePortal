import React, {Fragment, Component} from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlockArchitecDay = (props:any) => {
  return (
    <Fragment>      
      <Card bg="light" text="dark" className="m-3" >
        <Card.Header as="h5" className="text-center">
          Архитектор дня
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xl={3} lg={4} md={5}>              
              <Image 
                src={props.architect.imageSrc}                 
                thumbnail 
              />
            </Col>
            <Col xl={9} lg={8} md={7}>
              <Card.Title className="mt-2">
                {props.architect.name}
              </Card.Title>
              <Card.Text>{props.architect.description}</Card.Text>                        
              <Button variant="dark">
                <Link to={`/authors/${props.architect.id}`}>Перейти</Link>
              </Button>
            </Col>
          </Row>          
        </Card.Body>
      </Card>      
    </Fragment>
  );
};

export default BlockArchitecDay;