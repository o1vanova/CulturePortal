import React, { Fragment } from 'react';
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
    <Fragment>
      <Header />
      <Container>
        <Switch>
          <Route path={routes.LANDING} exact>
            <MainPage />
          </Route>
          <Route path={routes.AUTHORS} exact>
            <AuthorBoardPage />
          </Route>
          <Route path={routes.AUTHOR} exact>
            <AuthorPage />
          </Route>
          <Route>
            <Redirect to={routes.LANDING} />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
