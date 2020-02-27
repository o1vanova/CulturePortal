import React from 'react';
import Evaluation from '../../components/worklog/Evaluation';
import WorkLogTable from '../../components/worklog/WorkLogTable';

const WorkLog = () => {
  return (
    <div className="jumbotron-background">
      <h1 className="display-5">WorkLog</h1>
      <WorkLogTable />
      <section className="dislay-worklog">
        <h2>Difficulties </h2>
        <ul>
          <li>Main 1-3 difficulties for the team during implementation</li>
          <li>Main 1-3 difficulties for the team during implementation</li>
          <li>Main 1-3 difficulties for the team during implementation</li>
        </ul>
      </section>
      <section className="dislay-worklog">
        <h2>Self-evaluation</h2>
        <Evaluation />
      </section>
    </div>
  );
};

export default WorkLog;
