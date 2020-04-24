import React from 'react';
import Evaluation from '../../components/worklog/Evaluation';
import WorkLogTable from '../../components/worklog/WorkLogTable';
import { Container } from 'react-bootstrap';

const WorkLog = () => {
  return (
    <>
      <WorkLogTable />
      <Container>
        <h2>Difficulties</h2>
        <ul>
          <li>Main difficulty for the team during implementation was making the merge code.</li>
        </ul>
      </Container>
      <Evaluation />
    </>
  );
};

export default WorkLog;
