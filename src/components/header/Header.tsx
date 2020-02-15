import * as React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import routes from 'constants/routes';


const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to={routes.LANDING}>Главная</NavLink>
        <NavLink to={routes.AUTHORS}>Авторы</NavLink>
      </nav>
    </div>
  );
};


export default Header;
