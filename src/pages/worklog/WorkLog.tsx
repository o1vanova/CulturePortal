import React from 'react';
import Evaluation from '../../components/worklog/Evaluation';
import WorkLogTable from '../../components/worklog/WorkLogTable';

const WorkLog = () => {
  return (
    <>
      <WorkLogTable />
      <h2>Difficulties </h2>
      <ul>
        <li>Main 1-3 difficulties for the team during implementation</li>
        <li>Main 1-3 difficulties for the team during implementation</li>
        <li>Main 1-3 difficulties for the team during implementation</li>
      </ul>
      <Evaluation />
    </>
  );
};

export default WorkLog;
