import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GoCode } from "react-icons/go";
import './Wrapper.scss'

const Wrapper = (props: { title: string; code: string; children: React.ReactNode; }): JSX.Element => {
  return (
    <Fragment>
      <Row className="mt-1">
        <Col><h2>{props.title}</h2></Col>
        <Col className="text-right text-top">
          <GoCode className="wrapper-icon" size={40}/>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col>{props.children}</Col>
      </Row>
    </Fragment>      
  );
};

export default Wrapper;