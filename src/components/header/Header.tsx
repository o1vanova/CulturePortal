import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import routes from 'constants/routes';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand href={routes.LANDING}>
      <img
        alt=""
        src="/images/brand.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={routes.LANDING}>Главная</Nav.Link>
          <Nav.Link href={routes.AUTHORS}>Авторы</Nav.Link>
          <Nav.Link href={routes.AUTHOR}>Автор</Nav.Link>
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

