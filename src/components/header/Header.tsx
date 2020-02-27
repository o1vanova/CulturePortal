import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import routes from '../../constants/routes';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import lang from '../../constants/languages';

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const NavLink = (link: string, text: string): JSX.Element => (
    <LinkContainer to={link} exact>
      <Nav.Link eventKey={link}>{t(text)}</Nav.Link>
    </LinkContainer>
  );

  const NavDropDownItem = (lang: string): JSX.Element => (
    <NavDropdown.Item active={i18n.language === lang} onClick={(): void => changeLanguage(lang)}>
      {t(`menu.languages.${lang}`)}
    </NavDropdown.Item>
  );

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand>
        <img alt="logo" src="/images/brand.png" width="30" height="30" className="d-inline-block align-top" />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavLink(routes.LANDING, 'menu.main')}
          {NavLink(routes.ARCHITECTS, 'menu.architects')}
          {NavLink(routes.STYLE, 'menu.style')}
          {NavLink(routes.WORKLOG, 'menu.worklog')}
          {NavLink(routes.TEAM, 'menu.team')}
        </Nav>
        <Nav className="mr-2">
          <NavDropdown alignRight title={t(`menu.languages.${i18n.language}`)} id="basic-nav-dropdown">
            {NavDropDownItem(lang.RU)}
            {NavDropDownItem(lang.EN)}
            {NavDropDownItem(lang.BE)}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
