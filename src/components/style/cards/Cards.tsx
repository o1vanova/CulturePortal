import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './Cards.scss';

const Cards = (): JSX.Element => {
  return (
    <Row>
      <Col lg={4} md={6} sm={12} xs={12}>
        <Card className="cards mt-1 mb-1">        
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.              
            </Card.Text>
          </Card.Body>
          <Card.Footer className="cards-footer">Card Footer</Card.Footer>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
        <Card className="cards cards-hover mt-1 mb-1">
          <Card.Img variant="top" className="cards-hover__photo" src="/images/styleGuideImg.png"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.              
            </Card.Text>
            <div className="cards-hover__text-fade"></div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
        <Card className="cards mt-1 mb-1">        
          <Card.Header className="cards-header">Card Header</Card.Header>
          <Card.Img variant="top" src="/images/styleGuideImg.png"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.               
            </Card.Text>
          </Card.Body>          
        </Card>
      </Col>
    </Row>    
  );
};

export default Cards;
