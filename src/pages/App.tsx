import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import routes from '../constants/routes';
import Header from '../components/header/Header';
import MainPage from './home/MainPage';
import AuthorBoardPage from './board/AuthorBoardPage';
import AuthorPage from './author/AuthorPage';

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
            <MainPage />
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
