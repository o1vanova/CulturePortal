import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './ModalCode.scss';

const ModalCode = (props: {
  show: boolean | undefined;
  onHide: (() => void) | undefined;
  codeExample: string;
}): JSX.Element => {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header>
        <Row>
          <Col>
            <MdClose onClick={props.onHide} className="modal-code-icon" size={24} />
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <pre className="modal-code-pre">{props.codeExample}</pre>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCode;
