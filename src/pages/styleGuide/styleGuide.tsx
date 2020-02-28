import * as React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/colors';
// import { Buttons } from '../../components/style/buttons/colors';
// import { Checkboxs } from '../../components/style/checkbox/checkbox';
// import { Inputs } from '../../components/style/inputs/inputs';
import './StyleGuide.scss';

import Wrapper from '../../components/style/wrapper/Wrapper';


const StylePage = (): JSX.Element => {
  return (
    <Container className="page-styleGuide">
      <h2 className="mt-3 text-center">Our styleGuide</h2>
      <Row>
        <Col>
          <Wrapper title="Button" code="<></>">
            <Colors />
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default StylePage;
