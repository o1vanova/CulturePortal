import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './Buttons.scss';

export const Buttons = (): JSX.Element => {
    return (
      <ButtonToolbar>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
      </ButtonToolbar>
    );
  };
