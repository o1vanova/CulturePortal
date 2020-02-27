import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutTheProject from '../../components/mainPage/aboutTheProject/AboutTheProject';
import ArchitectOfDay from '../../components/mainPage/blockArchitecOfDay/BlockArchitecOfDay';
import StoreContext from '../../app/store';

const MainPage = (): JSX.Element => {
  const { architects } = useContext(StoreContext);
  const randomArchitect = Math.floor(Math.random() * Math.floor(architects.length));

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <AboutTheProject />
        </Col>        
      </Row>
      <Row>
        <Col>
          <ArchitectOfDay architect={architects[randomArchitect]} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
