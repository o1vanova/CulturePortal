import React, {Fragment, Component} from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface MemberCardProps {  
  imageSrc: string,
  name: string,
  linkGithub: string,
  completedTasks: string[]
}

const MemberCard = ({
  imageSrc, 
  name,
  linkGithub,
  completedTasks
}: MemberCardProps) => {
  return (
    <Fragment>            
      <Card bg="light" text="dark" className="mt-4" >                
        <Row className="text-center">
          <Col>
            <Image src={imageSrc} thumbnail />
          </Col>          
        </Row>                
        <Card.Body>        
          <Card.Title>{name}</Card.Title>          
          <Card.Text>Сompleted tasks:</Card.Text>
          {completedTasks.map( (task, index) => 
            <Card.Text key={index}>{task}</Card.Text>
          )}
        </Card.Body>                  
        <Card.Footer>          
          <Button size="sm" variant="dark" href={linkGithub}><b>GitHub</b></Button>          
        </Card.Footer>        
      </Card>      
    </Fragment>
  );
};

export default MemberCard;