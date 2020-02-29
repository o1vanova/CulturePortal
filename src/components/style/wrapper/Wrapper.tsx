import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import baselineCode from '@iconify/icons-ic/baseline-code';
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
          <div className="wrapper-icon" onClick={handleShow}>
            <Icon width="40" icon={baselineCode} />
          </div>          
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
