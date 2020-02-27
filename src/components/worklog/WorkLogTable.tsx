import React from 'react';

export const TaskModel = [
  {
    id: 1,
    student: 'Olga Ivanova',
    task: 'base structure of the project',
    time: '6 hours',
  },
  {
    id: 2,
    student: 'Olga Ivanova',
    task: 'translation',
    time: '2 hours',
  },
  {
    id: 3,
    student: 'Olga Ivanova',
    task: 'add gallery',
    time: '1 hours',
  },
  {
    id: 4,
    student: 'Katya Dubtsova',
    task: 'add main page components',
    time: '3 hours',
  },
  {
    id: 5,
    student: 'Katya Dubtsova',
    task: 'add styles to the main page',
    time: '1 hours',
  },
  {
    id: 6,
    student: 'Katya Dubtsova',
    task: 'add page and component WorkLog',
    time: '5 hours',
  },
  {
    id: 7,
    student: 'Ildar Garifullin',
    task: 'add cards for authors page',
    time: '5 hours',
  },
  {
    id: 8,
    student: 'Ildar Garifullin',
    task: 'add map for author page with style and marks',
    time: '10 hours',
  },
];

const WorkLogTable = () => {
  const studentsList = TaskModel.map(el => (
    <tr className="table-secondary" key={el.id}>
      <td>{el.student}</td>
      <td>{el.task}</td>
      <td>{el.time}</td>
    </tr>
  ));
  return (
    <table className="table table-hover">
      <thead>
        <tr style={{ background: '#b3b7bb' }}>
          <th scope="col">Student</th>
          <th scope="col">Task</th>
          <th scope="col">Total time</th>
        </tr>
      </thead>
      <tbody>{studentsList}</tbody>
    </table>
  );
};

export default WorkLogTable;
