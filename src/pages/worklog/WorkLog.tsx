import React from 'react';
import Container from 'react-bootstrap/Container';
import Evaluation from '../../components/worklog/Evaluation';

const WorkLog = () => {
  return (
    <Container>
      <section>
        <h2>Difficulties </h2>
        <ul>
          <li>Main 1-3 difficulties for the team during implementation</li>
          <li>Main 1-3 difficulties for the team during implementation</li>
          <li>Main 1-3 difficulties for the team during implementation</li>
        </ul>
      </section>
      <section>
        <h2>Self-evaluation</h2>
        <Evaluation />
      </section>
    </Container>
  );
};

export default WorkLog;
