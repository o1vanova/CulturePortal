import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MemberCard from '../../components/memberCard/MemberCard';

const TeamPage = () => {
  const team = [
    { imageSrc: "./images/arch.jpg", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2", "task3", "task4", "task5", "task6" ] },
    { imageSrc: "./images/brand.png", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2", "task3" ] },
    { imageSrc: "./images/arch.jpg", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2", "task3", "task4" ] },
    { imageSrc: "./images/brand.png", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2", "task3", "task4", "task5" ] },
    { imageSrc: "./images/arch.jpg", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2" ] },
    { imageSrc: "./images/arch.jpg", name: "Firs name Last name", linkGithub: "https://github.com/DmitryAstapenko", completedTasks: [ "task1", "task2", "task3", "task4", "task5" ] },
  ];
  return (
    <Container>
      <Row>      
        {team.map( (member, index) => 
          <Col xl={4} lg={4} md={6} sm={12} xs={12} key={index}> 
            <MemberCard               
              imageSrc={member.imageSrc}
              name={member.name}
              linkGithub={member.linkGithub}
              completedTasks={member.completedTasks}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TeamPage;