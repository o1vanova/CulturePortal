import React, { useState } from 'react';
//import { InputGroup, FormControl } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';
//import lang from '../../constants/languages';


interface dataSearcharr {
  dataSearch(search: string): void
}

export const Search: React.FC<dataSearcharr> = props => {
  const [ search, setSearch ] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    props.dataSearch(event.target.value);
  }

  return (
    <input
        type="text" 
        value={search}
        onChange={changeHandler}
    />
  )

};

