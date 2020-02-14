
import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'constants/routes';

const App = () => {

  return (
    <Switch>
      <Route path={routes.LANDING} exact>
        <div>Main page</div>
      </Route>
      <Route path={routes.AUTHORS}>
        <div>Authors page</div>
      </Route>
      <Route>
        <Redirect to={routes.LANDING} />
      </Route>
    </Switch>
  );
};

export default App;
