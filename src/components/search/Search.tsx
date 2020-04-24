import React, { Fragment, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Col, Form } from 'react-bootstrap';
import CheckedSearch from '../../model/checkedSearch';
import './search.scss';
import { useTranslation } from 'react-i18next';

interface DataSearchArr {
  dataSearch(search: string, id: number): void;
}

export const Search: React.FC<DataSearchArr> = (props: DataSearchArr) => {
  const { t } = useTranslation();

  let styleInput = 'valid';
  const [disOn, setDisOn] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [length, setLength] = useState<number>(1);
  const [numberIdCheck, setNumberIdCheck] = useState<number>(0);
  const checkName = [t('search.name'), t('search.sity'), t('search.birthday')];
  const [check, setCheck] = useState<CheckedSearch[]>([
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
  ]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    props.dataSearch(event.target.value.toLowerCase(), numberIdCheck);
  };

  const changeLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(event.target.value, 10));
  };

  const toggleSearch = (id: number) => {
    setCheck(
      check.map(item => {
        if (item.id === id) {
          item.checked = true;
          setDisOn(false);
          setNumberIdCheck(id);
          setSearch('');
          props.dataSearch('', id);
        } else {
          item.checked = false;
        }
        return item;
      }),
    );
  };

  if (disOn) {
    styleInput = 'invalid';
  }
  return (
    <>
      <Col xs={12} sm={12} className="formCheck">
        <hr className="my-1" />
        <Form.Group controlId="formBasicCheckbox" className="row formGroup">
          {check.map((item, i) => (
            <Fragment key={item.id}>
              <Form.Check
                type="switch"
                id={`custom-switch-${i}`}
                label={checkName[i]}
                checked={item.checked}
                key={item.id}
                onChange={() => toggleSearch(item.id)}
              />
            </Fragment>
          ))}
        </Form.Group>
      </Col>
      <Col xs={12} sm={4} className="justify-content-center row">
        <label className="labelLength">
          {t('search.colSymbols')}: {length}
          <input
            className="custom-range"
            id="customRange"
            type="range"
            value={length}
            step={1}
            min={1}
            max={10}
            onChange={changeLength}
          />
        </label>
      </Col>
      <Col xs={12} sm={8} className="justify-content-center row">
        <DebounceInput
          className={`form-control is-${styleInput}`}
          placeholder={t('search.input')}
          id="validationTooltip01"
          minLength={length}
          debounceTimeout={300}
          value={search}
          onChange={changeHandler}
          disabled={disOn}
          required
        />
        <div className={`${styleInput}-feedback`}>Architect</div>
      </Col>
    </>
  );
};
