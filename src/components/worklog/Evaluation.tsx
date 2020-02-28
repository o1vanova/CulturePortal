import React from 'react';
import { Evaluation, EvaluationTask } from '../../model/evaluation';
import { Container, Form } from 'react-bootstrap';

const evaluation: Evaluation[] = [
  {
    title: 'Min scope',
    tasks: [
      {
        title: "Main page + page with a list of authors + author's page (only pages with content without widgets)",
        score: 10,
        done: true,
      },
      {
        title: 'Page with team members + page with worklog',
        score: 10,
        done: true,
      },
      {
        title: 'Page with list of authors contains search widget',
        score: 10,
        done: true,
      },
      {
        title: 'Portal has two languages',
        score: 20,
        done: true,
      },
    ],
  },
  {
    title: 'Normal scope',
    tasks: [
      {
        title: 'Portal has page with styleguide',
        score: 20,
        done: true,
      },
      {
        title: 'Mobile version is okey',
        score: 10,
        done: true,
      },
      {
        title: ' Ipad/tablet version is okey',
        score: 10,
        done: true,
      },
      {
        title: "Author's page contains timeline",
        score: 10,
        done: true,
      },
      {
        title: "Author's page contains video overlay",
        score: 10,
        done: true,
      },
      {
        title: "Author's page contains photo gallery",
        score: 20,
        done: true,
      },
      {
        title: "Author's page contains map (geowidget)",
        score: 10,
        done: true,
      },
      {
        title: 'Design (typography, icons, colors, links + buttons + input are styled)',
        score: 20,
        done: true,
      },
      {
        title: 'Material-ui / bootstrap is used',
        score: 20,
        done: true,
      },
      {
        title: 'Portal has third language',
        score: 10,
        done: true,
      },
    ],
  },
  {
    title: 'Extra scope',
    tasks: [
      {
        title: 'Confidence of the project presentation',
        score: 10,
        done: false,
      },
      {
        title: 'Project is made using gatsbyjs',
        score: 10,
        done: false,
      },
      {
        title: 'Contentful / netlify cms is used for content management',
        score: 10,
        done: true,
      },
      {
        title: 'Animations / special effects like paralax',
        score: 20,
        done: true,
      },
      {
        title: 'Outstanding design',
        score: 20,
        done: true,
      },
      {
        title: 'Storybook/styleguidist/other react styleguide tool usage for the page with styles',
        score: 20,
        done: true,
      },
    ],
  },
  {
    title: 'Fines',
    tasks: [
      {
        title: 'if there are less than 5 commits from each active team member. Everyone should merge their own PRs',
        score: -50,
        done: false,
      },
      {
        title: 'up to -50 points for violations stage2-tasks-requirements',
        score: -50,
        done: false,
      },
      {
        title: 'if there is no worklog for team',
        score: -40,
        done: false,
      },
      {
        title: 'too primitive (ugly for 2020) design / UX',
        score: -40,
        done: false,
      },
    ],
  },
];

const getTask = (tasks: EvaluationTask[]) => {
  let score = 0;
  const element: JSX.Element[] = [];

  tasks.map((task: EvaluationTask, index: number) => {
    if (task.done) {
      score += task.score;
    }
    element.push(
      <Container key={index}>
        {
          <Form className="custom-control custom-checkbox">
            <Form.Check type="checkbox" label={task.title} className="checkBox" checked={task.done} readOnly />
          </Form>
        }
      </Container>,
    );
  });
  return {
    score,
    element,
  };
};

const Evaluation = () => {
  let score = 0;

  const sections = evaluation.map((section: Evaluation, index: number) => {
    const tasks = getTask(section.tasks);
    score += tasks.score;

    return (
      <Container key={index}>
        <h4>{section.title}</h4>
        {tasks.element}
      </Container>
    );
  });

  return (
    <Container>
      <h2>Self-evaluation</h2>
      {sections}
      <h2>Total score: {score}</h2>
    </Container>
  );
};

export default Evaluation;
