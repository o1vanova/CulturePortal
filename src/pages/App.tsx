
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Switch>
      <Route exact={true} path="/">
        <div>Main page</div>
      </Route>
      <Route exact={true} path="/authors">
        <div>Authors page</div>
      </Route>
      <Route exact={true} path="/author">
        <div>Author page</div>
      </Route>
    </Switch>
  );
};

export default App;
