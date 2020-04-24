import React from 'react';
import { Table } from 'react-bootstrap';
import Work from '../../../model/work';
import { useTranslation } from 'react-i18next';

interface WorksProps {
  works: Work[];
}

function BlockWorkList(props: WorksProps): JSX.Element {
  const { t } = useTranslation();

  const mappedItems = props.works.map((val: Work) => {
    return {
      date: val.date,
      description: t(val.description),
    };
  });

  return (
    <>
      <Table className="table table-hover" striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>{t('content.works')}</th>
            <th>{t('content.date')}</th>
          </tr>
        </thead>
        <tbody>
          {mappedItems.map((val: { description: string; date: string }, i: string | number | undefined) => (
            <tr key={i}>
              <td>{val.description}</td>
              <td>{val.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default BlockWorkList;
