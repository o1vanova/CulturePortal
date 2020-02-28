import * as React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './colors.scss';

export const Colors = (): JSX.Element => {
    return (
        <Jumbotron className="jumbotron">
          <h1>Colors</h1>
            <p>Hello</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
    );
  };