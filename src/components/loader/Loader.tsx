import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = (): JSX.Element => (
  <Spinner animation="grow" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loader;
