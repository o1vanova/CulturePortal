import * as React from 'react';
<<<<<<< HEAD
import { Card,  Container } from 'react-bootstrap';
import BlockArchitectDay from '../../components/blockArchitectDay/BlockArchitectDay';

const MainPage = () => {
  const architect = {
    id: 1,    
    imageSrc: './images/arch.jpg', 
    name: 'Юрий Васильевич Шпит', 
    description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье. Юрий Шпит родился 9 ноября 1930 года в Запорожье. Юрий Шпит родился 9 ноября 1930 года в Запорожье.'
  }

  return (
    <Container>
      <BlockArchitectDay architect={architect}/>
=======
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../components/mainPage/mainPages.scss';
import AboutTheProject from '../../components/mainPage/AboutTheProject';
import AuthorOfDay from '../../components/mainPage/AuthorOfDay';

const MainPage = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <AboutTheProject />
        </Col>
        <Col>
          <AuthorOfDay />
        </Col>
      </Row>
>>>>>>> develop
    </Container>
  );
};

export default MainPage;
