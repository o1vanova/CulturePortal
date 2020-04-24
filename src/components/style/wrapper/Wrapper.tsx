import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GoCode } from 'react-icons/go';
import ModalCode from '../modalCode/ModalCode';
import './Wrapper.scss';

const Wrapper = (props: { title: string; codeExample: string; children: React.ReactNode }): JSX.Element => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <div className="wrapper mt-2 mb-2 pl-3 pr-3 pt-2 pb-2">
      <Row>
        <Col>
          <h2>{props.title}</h2>
        </Col>
        <Col className="text-right text-top">
          <GoCode onClick={handleShow} className="wrapper-icon" size={40} />
        </Col>
      </Row>
      <Row>
        <Col>{props.children}</Col>
      </Row>
      <ModalCode show={modalShow} onHide={handleClose} codeExample={props.codeExample} />
    </div>
  );
};

export default Wrapper;
