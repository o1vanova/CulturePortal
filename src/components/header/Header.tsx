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

  const NavLink = ({ children, ...props }: any): JSX.Element => (
    <LinkContainer {...props}>
      <Nav.Link active={false}>{children}</Nav.Link>
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
          <NavLink to={routes.LANDING}>{t('menu.main')}</NavLink>
          <NavLink to={routes.ARCHITECTS}>{t('menu.architects')}</NavLink>
          <NavLink to={routes.STYLE}>{t('menu.style')}</NavLink>
          <NavLink to={routes.WORKLOG}>{t('menu.worklog')}</NavLink>
          <NavLink to={routes.TEAM}>{t('menu.team')}</NavLink>
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
