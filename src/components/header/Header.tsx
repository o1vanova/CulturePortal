import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import routes from 'constants/routes';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <LinkContainer to={routes.LANDING}>
        <Navbar.Brand>
          <img
            alt=""
            src="/images/brand.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={routes.LANDING}>
            <Nav.Link>Главная</Nav.Link>
          </LinkContainer>
          <LinkContainer to={routes.AUTHORS}>
            <Nav.Link>Авторы</Nav.Link>
          </LinkContainer>
          <LinkContainer to={routes.AUTHOR}>
            <Nav.Link>Автор</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="mr-2">
          <NavDropdown title="Выберите язык" id="basic-nav-dropdown">
            <NavDropdown.Item>Русский</NavDropdown.Item>
            <NavDropdown.Item>Английский</NavDropdown.Item>
            <NavDropdown.Item>Белорусский</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


