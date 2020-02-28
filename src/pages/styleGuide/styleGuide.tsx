import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/colors';
import Wrapper from '../../components/style/wrapper/Wrapper';


const StylePage = (): JSX.Element => {
  return (
    <Container className="page-styleGuide">
      <h2 className="mt-3 text-center">Our styleGuide</h2>        
      <Row>
        <Col>
          <Wrapper title="Button" codeExample='<></>'>
            <Colors />
          </Wrapper>            
        </Col>
      </Row>
    </Container>
  );
};

export default StylePage;