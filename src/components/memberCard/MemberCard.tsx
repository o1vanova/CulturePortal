import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col, Image } from 'react-bootstrap';

interface MemberCardProps {  
  imageSrc: string,
  name: string,
  linkGithub: string,
  completedTasks: string
}

const MemberCard = ({ imageSrc, name, linkGithub, completedTasks }: MemberCardProps): JSX.Element => {
  const { t } = useTranslation();  

  return (        
    <Card bg="light" text="dark" className="mt-3 mb-3 border-0 rounded-0">                
      <Row className="text-center">
        <Col><Image src={imageSrc} fluid /></Col>          
      </Row>                            
      <Card.Body>        
        <Card.Title>{name}</Card.Title>          
        <Card.Text>{t('teamPage.memberCard.text')}</Card.Text>
        <Card.Text>{completedTasks}</Card.Text>        
        <Button size="sm" variant="dark" href={linkGithub}><b>GitHub</b></Button>                
      </Card.Body>                        
    </Card>          
  );
};

export default MemberCard;