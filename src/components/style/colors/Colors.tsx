import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './colors.scss';

export const Colors = (): JSX.Element => {
  return (
    <Fragment>
      <Button className="buttonClr" variant="secondary">
        Secondary
      </Button>
      <Button className="buttonClr" variant="info">
        Info
      </Button>
      <Button className="buttonClr" variant="primary">
        Primary
      </Button>
      <Button className="buttonClr" variant="light">
        Light
      </Button>
    </Fragment>
  );
};
