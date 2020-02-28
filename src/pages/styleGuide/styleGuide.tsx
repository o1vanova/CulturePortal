import * as React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/colors';
import { Buttons } from '../../components/style/buttons/colors';
import { Checkboxs } from '../../components/style/checkbox/checkbox';
import { Inputs } from '../../components/style/inputs/inputs';
import './StyleGuide.scss';

const MainPage = (): JSX.Element => {
  const style = [Colors];
  return (
    <Container className="page-styleGuide">
      <Row>
        <Col sm={12}>
            <h2 className="mt-3 text-center">Our styleGuide</h2>
        </Col>
        <Col>
            <Colors />  
        </Col>
        <Col>
            <Buttons />  
        </Col>
        <Col>
            <CheckBoxs />  
        </Col>
        <Col>
            <Inputs />  
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;