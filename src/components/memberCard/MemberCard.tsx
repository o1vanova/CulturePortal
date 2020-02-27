import React from 'react';
import Card from 'react-bootstrap/Card';
import Member from '../../model/member';
import { Row, Col, Image } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-cib/github';
import telegramIcon from '@iconify/icons-cib/telegram';
import codewarsIcon from '@iconify/icons-cib/codewars';

interface MemberCardProps { 
  member: Member;
}

const MemberCard = ({ member }: MemberCardProps): JSX.Element => {  

  return (        
    <Card bg="light" text="dark" className="mt-3 mb-3 border-0 rounded-0">                
      <Row className="text-center">        
        <Col><Image src={member.avatar} fluid /></Col>          
      </Row>                            
      <Card.Body>        
        <Card.Title>{member.name}</Card.Title>          
        <Card.Text>{member.contribution}</Card.Text>                        
      </Card.Body>                        
      <Card.Footer>        
          <a href={member.github}><Icon className="mr-1" width="32" icon={githubIcon} /></a>                            
          <a href={member.telegram}><Icon className="mr-1" width="32" icon={telegramIcon} /></a>    
          { member.codewar != null ? 
            <a href={member.codewar}>
              <Icon className="mr-1" width="32" icon={codewarsIcon} />
            </a> 
          : null }                        
      </Card.Footer>
    </Card>          
  );
};

export default MemberCard;