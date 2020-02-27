import React, { Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import routes from '../constants/routes';
import Header from '../components/header/Header';
import MainPage from '../pages/home/MainPage';
import AuthorBoardPage from '../pages/board/AuthorBoardPage';
import AuthorPage from '../pages/author/AuthorPage';
import TeamPage from '../pages/team/TeamPage';
import StoreContext from '../app/store';
import WorkLog from './worklog/WorkLog';

import './App.scss';

const App = (): JSX.Element => {
  const store = useContext(StoreContext);

  return (
    <Suspense fallback="loading...">
      <Header />
      <StoreContext.Provider value={store}>
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
            <WorkLog />
            </Route>
            <Route path={routes.TEAM} exact>
              <TeamPage />
            </Route>
            <Route>
              <Redirect to={routes.LANDING} />
            </Route>
          </Switch>
        </Container>
      </StoreContext.Provider>
    </Suspense>
  );
};

export default App;
