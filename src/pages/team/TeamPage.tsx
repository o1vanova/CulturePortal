import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MemberCard from '../../components/memberCard/MemberCard';
import StoreContext from '../../app/store';

const TeamPage = (): JSX.Element => {
  const { members } = useContext(StoreContext);

  return (
    <Container>      
      <Row>
        <Col>
          <h2 className="mt-3 text-center">The portal was made by a team of six developers</h2>
        </Col>
      </Row>                  
      <Row>
        {members.map( (m, i) => 
          <Col 
            key={i}
            xl={{ span: 4, offset: 0 }} 
            lg={{ span: 4, offset: 0 }} 
            md={{ span: 6, offset: 0 }} 
            sm={{ span: 10, offset: 1 }} 
            xs={{ span: 10, offset: 1 }}              
          > 
            <MemberCard key={i} member={m}/>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TeamPage;