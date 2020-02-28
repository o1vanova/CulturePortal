import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/Colors';
import { Buttons } from '../../components/style/buttons/Buttons';
import { CheckBoxs } from '../../components/style/checkBox/CheckBox';
import { Typography } from '../../components/style/typography/Typography';
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
            <Buttons />
          </Wrapper>
        </Col>
        <Col>
          <Wrapper title="CheckBox" code="<></>">
            <CheckBoxs />
          </Wrapper>
        </Col>
        <Col>
          <Wrapper title="Color" code="<></>">
            <Colors />
          </Wrapper>
        </Col>
        <Col>
          <Wrapper title="Button" code="<></>">
            <Typography />
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default StylePage;
