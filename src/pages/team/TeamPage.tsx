import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MemberCard from '../../components/memberCard/MemberCard';

const TeamPage = (): JSX.Element => {
  const { t } = useTranslation();  
  const team = ['olga', 'ildar', 'alex', 'ilya', 'dmitry', 'katya'];

  return (
    <Container>      
      <Row>
        <Col>
          <h2 className="mt-3 text-center">{t('teamPage.title')}</h2>
        </Col>
      </Row>            
      <Row>          
        {team.map( (member, index) => 
          <Col 
            key={index}
            xl={{ span: 4, offset: 0 }} 
            lg={{ span: 4, offset: 0 }} 
            md={{ span: 6, offset: 0 }} 
            sm={{ span: 10, offset: 1 }} 
            xs={{ span: 10, offset: 1 }}              
          > 
            <MemberCard               
              imageSrc={t(`teamPage.members.${member}.imageSrc`)}
              name={t(`teamPage.members.${member}.name`)}
              linkGithub={t(`teamPage.members.${member}.linkGithub`)}
              completedTasks={t(`teamPage.members.${member}.completedTasks`)}  
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TeamPage;