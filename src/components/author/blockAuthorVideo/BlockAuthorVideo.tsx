import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function BlockAuthorVideo(props) {
  const link = props.link;

  function handleCloseModal() {
    props.onHide();
  }

  return (
    <Modal onHide={handleCloseModal} show={props.show} centered>
      <Modal.Header closeButton className="p-0"></Modal.Header>
      <Modal.Body className="p-0">
        <iframe
          width="100%"
          height="315"
          src={link}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

BlockAuthorVideo.propTypes = {
  link: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default BlockAuthorVideo;
