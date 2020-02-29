import { WorklogModel } from '../../model/worklog';

const WorkLogData: WorklogModel[] = [
  {
    id: 1,
    name: 'o1vanova (Total: 23h)',
    done: [
      {
        id: 1,
        hours: 6,
        feature: 'base structure of the project',
      },
      {
        id: 2,
        hours: 2,
        feature: 'translation',
      },
      {
        id: 3,
        hours: 1,
        feature: 'fix styles of the main page to display on tablets and mobile phones',
      },
      {
        id: 4,
        hours: 1,
        feature: 'add gallery',
      },
      {
        id: 5,
        hours: 10,
        feature: 'implement store with hooks, put content in json',
      },
      {
        id: 6,
        hours: 2,
        feature: 'add animations, special effects',
      },
      {
        id: 7,
        hours: 1,
        feature: 'fix bug: redirect on the author page took for a few seconds',
      },
    ],
  },
  {
    id: 2,
    name: 'katunya (Total: 9h)',
    done: [
      {
        id: 1,
        hours: 3,
        feature: 'add main page components',
      },
      {
        id: 2,
        hours: 1,
        feature: 'add styles to the main page',
      },
      {
        id: 3,
        hours: 3,
        feature: 'add page and component WorkLog',
      },
      {
        id: 4,
        hours: 2,
        feature: 'fix style of the worklog page',
      },
    ],
  },
  {
    id: 3,
    name: 'ildar (Total: 15h)',
    done: [
      {
        id: 1,
        hours: 5,
        feature: 'add cards for authors page',
      },
      {
        id: 2,
        hours: 10,
        feature: 'add map for author page with style and marks',
      },
    ],
  },
  {
    id: 4,
    name: 'IlyaIvanchikov (Total: 16h)',
    done: [
      {
        id: 1,
        hours: 4,
        feature: 'add header component',
      },
      {
        id: 2,
        hours: 10,
        feature: 'add search component',
      },
      {
        id: 3,
        hours: 2,
        feature: 'add styleGuide page 1/2',
      },
    ],
  },
  {
    id: 5,
    name: 'stiff-github (Total: 17h)',
    done: [
      {
        id: 1,
        hours: 2,
        feature: 'create BlockAuthorInfo and add its on AuthorPage',
      },
      {
        id: 2,
        hours: 6,
        feature: 'add component BlockAuthorTimeline',
      },
      {
        id: 3,
        hours: 3,
        feature: 'add component for Architector work list',
      },
      {
        id: 4,
        hours: 4,
        feature: 'add component modal window for video author',
      },
      {
        id: 5,
        hours: 2,
        feature: 'add all components on AuthorPage',
      },
    ],
  },
  {
    id: 6,
    name: 'DmitryAstapenko (Total: 17h)',
    done: [
      {
        id: 1,
        hours: 2,
        feature: 'add block architect of the day',
      },
      {
        id: 2,
        hours: 4,
        feature: 'add member card component   ',
      },
      {
        id: 3,
        hours: 6,
        feature: 'add page with team',
      },
      {
        id: 4,
        hours: 1,
        feature: 'fix styles of the team page',
      },
      {
        id: 5,
        hours: 4,
        feature: 'add styleGuide page 1/2',
      },
    ],
  },
];

const HeadersTable = ['Spend time', 'Features'];

export default { WorkLogData, HeadersTable };
