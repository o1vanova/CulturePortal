import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './colors.scss';

export const Colors = (): JSX.Element => {
    return (
      <ButtonToolbar>
        <Button className="buttonClr" variant="secondary">Secondary</Button>
        <Button className="buttonClr" variant="info">Info</Button>
        <Button className="buttonClr" variant="primary">Primary</Button>
        <Button className="buttonClr" variant="light">Light</Button>
      </ButtonToolbar>
    );
  };
