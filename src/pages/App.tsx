
import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'constants/routes';
import AuthorBoard from 'pages/author/AuthorBoard';

const App = () => {

  return (
    <Switch>
      <Route path={routes.LANDING} exact>
        <div>Main page</div>
      </Route>
      <Route path={routes.AUTHORS}>
        <AuthorBoard />
      </Route>
      <Route>
        <Redirect to={routes.LANDING} />
      </Route>
    </Switch>
  );
};

export default App;
