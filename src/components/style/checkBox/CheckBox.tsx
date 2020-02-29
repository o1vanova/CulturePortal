import React from 'react';
import { Form } from 'react-bootstrap';
import './CheckBox.scss';

export const CheckBoxs = (): JSX.Element => {
    return (
      <Form>
        <Form.Check
          custom
          inline
          label="1"
          type="checkbox"
          id="custom-inline-checkbox-1"
        />
        <Form.Check
          custom
          inline
          label="2"
          type="radio"
          id="custom-inline-radio-2"
        />
        <Form.Check
          className="check"
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
      </Form>
    );
  };
