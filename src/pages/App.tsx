import React, { Suspense, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import { Container } from 'react-bootstrap';
import routes from '../constants/routes';
import Header from '../components/header/Header';
import MainPage from '../pages/home/MainPage';
import AuthorBoardPage from '../pages/board/AuthorBoardPage';
import AuthorPage from '../pages/author/AuthorPage';
import TeamPage from '../pages/team/TeamPage';
import StoreContext from '../app/store';
import WorkLog from './worklog/WorkLog';
import Loader from '../components/loader/Loader';

import './App.scss';

const bounce = (val: number) => {
  return spring(val, {
    stiffnes: 330,
    damping: 22,
  });
};

const mapStyles = styles => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
};

const bounceTransition = {
  atEnter: { opacity: 0, scale: 1.2 },
  atLeave: { opacity: bounce(0), scale: bounce(0.8) },
  atActive: { opacity: bounce(1), scale: bounce(1) },
};

const App = (): JSX.Element => {
  const store = useContext(StoreContext);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <StoreContext.Provider value={store}>
        <Container>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            classNames="switch-wrapper"
          >
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
          </AnimatedSwitch>
        </Container>
      </StoreContext.Provider>
    </Suspense>
  );
};

export default App;
