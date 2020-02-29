import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import baselineClear from '@iconify/icons-ic/baseline-clear';
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
            <div onClick={props.onHide} className="modal-code-icon">
              <Icon width="32" icon={baselineClear} />
            </div>              
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
