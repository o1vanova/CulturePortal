import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import routes from '../constants/routes';
import Header from '../components/header/Header';
import MainPage from '../pages/home/MainPage';
import AuthorBoardPage from '../pages/board/AuthorBoardPage';
import AuthorPage from '../pages/author/AuthorPage';
import TeamPage from '../pages/team/TeamPage';

import './App.scss';

const App = (): JSX.Element => {
  return (
    <Suspense fallback="loading...">
      <Header />
      <Container>
        <Switch>
          <Route path={routes.LANDING} exact>
            <MainPage />
          </Route>
          <Route path={routes.ARCHITECTS} exact>
            <AuthorBoardPage />
          </Route>
          <Route path={routes.ARCHITECT} exact>
            <AuthorPage />
          </Route>
          <Route path={routes.STYLE} exact>
            <MainPage />
          </Route>
          <Route path={routes.WORKLOG} exact>
            <MainPage />
          </Route>
          <Route path={routes.TEAM} exact>
            <TeamPage />
          </Route>
          <Route>
            <Redirect to={routes.LANDING} />
          </Route>
        </Switch>
      </Container>
    </Suspense>
  );
};

export default App;
