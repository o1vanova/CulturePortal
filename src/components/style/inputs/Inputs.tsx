import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

export const Inputs = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

    return (
      <>
        <DebounceInput
          className="form-control is-valid"
          placeholder="Enter please information"
          id="validationTooltip01"
          debounceTimeout={300}
          minLength={1}
          value={search}
          onChange={changeHandler}
          required
        />
        <div className="valid-feedback mb-2">
          Input
        </div>
        <DebounceInput
          className="form-control is-invalid"
          placeholder="Enter please information"
          id="validationTooltip01"
          debounceTimeout={300}
          minLength={1}
          value={search}
          onChange={changeHandler}
          required
        />
        <div className="invalid-feedback">
          Input
        </div>
      </>
    );
  };
