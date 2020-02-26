import React from 'react';
import { Table } from 'react-bootstrap';

function BlockWorkList(props: any) {
  return (
    <>
      <Table className="table table-hover" striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Объекты и деятельность</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {props.data.work.map((val: { title: any; date: React.ReactNode }, i: string | number | undefined) => (
            <tr key={i}>
              <td>{val.title}</td>
              <td>{val.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default BlockWorkList;
