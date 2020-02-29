import React from 'react';
import data from './WorkLogData';
import { Table, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './WorkLog.scss';

const WorkLogTable = () => {
  const { t } = useTranslation();
  const headerList = data.HeadersTable.map(header => {
    return <th key={header}>{header}</th>;
  });
  return (
    <>
      <h1 className="worklog__title">{t('menu.worklog')}</h1>
      <Container className="worklog__wrapper">
        {data.WorkLogData.map(row => {
          return (
            <div key={row.id}>
              <h4>{`${row.name}`}</h4>
              <Table className="worklog__table">
                <thead>
                  <tr className="worklog__header">{headerList}</tr>
                </thead>
                <tbody>
                  {row.done.map(elem => {
                    return (
                      <tr className="worklog__rows" key={elem.id}>
                        <td>{`${elem.hours} h`}</td>
                        <td>{elem.feature}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default WorkLogTable;
