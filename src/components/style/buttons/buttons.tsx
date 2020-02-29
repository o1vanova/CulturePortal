import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './Buttons.scss';

export const Buttons = (): JSX.Element => {
    return (
      <Fragment>
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </Fragment>
    );
  };
