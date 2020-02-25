import React, { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import './search.scss';
//import { InputGroup, FormControl } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';
//import lang from '../../constants/languages';


interface dataSearchArr {
  dataSearch(search: string): void
}

export const Search: React.FC<dataSearchArr> = props => {
  const [ search, setSearch ] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    props.dataSearch(event.target.value);
  }

  return (
    <div className="container">
        <DebounceInput
        className="inputSearch mr-3"
        id="dynamic-label-input"
        placeholder="Enter some text"
        minLength={2}
        debounceTimeout={300}
        value={search}
        onChange={changeHandler} />
        <span className="bar"></span>
        <label>Введите имя</label>
    </div>
  )

};

