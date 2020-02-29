import React from 'react';
import { Table } from 'react-bootstrap';

export const Tables = (): JSX.Element => {

    const mappedItems = [
    {
      description: 1,
      date: 1991
    },
    {
      description: 2,
      date: 1992
    },
    {
      description: 3,
      date: 1993
    },
    {
      description: 4,
      date: 1994
    },
    {
      description: 5,
      date: 1995
    },
  ];

    return (
      <>
      <Table className="table table-hover" striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {mappedItems.map((val: { description: number; date: number }, i: string | number | undefined) => (
            <tr key={i}>
              <td>{val.description}</td>
              <td>{val.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
    );
  };
