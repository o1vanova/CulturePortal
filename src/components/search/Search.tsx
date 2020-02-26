import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Col, Form } from 'react-bootstrap';
import CheckedSearch from '../../model/checkedSearch';
import './search.scss';
//import { InputGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
//import lang from '../../constants/languages';


interface dataSearchArr {
  dataSearch(search: string, titlePlaceHolder: string): void
}

export const Search: React.FC<dataSearchArr> = props => {
  const { t } = useTranslation();
  
  const styleInput = ['inputSearch'];
  const [ disOn, setDisOn ] = useState<boolean>(true);
  const [ search, setSearch ] = useState<string>('');
  const [ length, setLength ] = useState<number>(0);
  const [ titlePlaceHolder, setTitlePlaceHolder ] = useState<string>('');
  const [ check, setCheck ] = useState<CheckedSearch[]>([
    {
      id: 1,
      title: "Имя",
      checked: false
    },
    {
      id: 2,
      title: "Город",
      checked: false
    },
    {
      id: 3,
      title: "День рождения",
      checked: false
    },
  ]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    props.dataSearch(event.target.value, titlePlaceHolder);
  }

  const changeLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(event.target.value, 10));
  }

  const toggleSearch = (id: number) => {
    setCheck(check.map(item => {
      if (item.id === id) {
        item.checked = true;
        setDisOn(false);
        setTitlePlaceHolder(`Введите ${item.title}`);
        setSearch('');
        props.dataSearch('', titlePlaceHolder);
      }
      else {
        item.checked = false
      }
      return item;
    }))
  };

  if (disOn) {
    styleInput.push('completed');
  }
  return (
      <>
      <Col xs={12} sm={12} className="formCheck">
        <Form.Group controlId="formBasicCheckbox" className="row">
          {check.map((item, i) => (
            <Form.Check
              type="checkbox"
              className="checkBox"
              label={item.title}
              checked={item.checked}
              key={i}
              onChange={ () => toggleSearch(item.id)}

            />
          ))}
        </Form.Group>
      </Col>
        <Col xs={12} sm={4} className="justify-content-center row">
        <label className="labelLength">
              Количество символов для поиска:
              <input
                className="inputLength"
                type="range"
                value={length}
                step={1}
                min={0}
                max={10}
                onChange={changeLength} />
              {length}
          </label>
        </Col>
        <Col xs={12} sm={8} className="justify-content-center row">
          <DebounceInput
              className={styleInput.join(' ')}
              id="dynamic-label-input"
              placeholder={titlePlaceHolder}
              minLength={length}
              debounceTimeout={300}
              value={search}
              onChange={changeHandler}
              disabled={disOn}
            />
        </Col>
        </>
  )
};

