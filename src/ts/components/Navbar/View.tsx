import React from 'react';
import styled from 'styled-components';
import { INavbarContent } from 'interfaces';

import Navlink from 'components/Navlink';
import ContentContainer from 'components/ContentContainer';

interface INavbar extends INavbarContent {
  activeIndex: number;
}

const Nav = styled.nav`
  width: 100vw;
  height: ${(p) => p.theme.navbar.root.height};
  background-color: ${(p) => p.theme.navbar.root.backgroundColor};
  opacity: ${(p) => p.theme.navbar.root.opacity};
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  padding: 0;
  & li {
    margin: 0 1em;
  }
  & li:first-child {
    margin-right: auto;
  }
`;

const Logo = styled.img`
  max-width: ${(p) => p.theme.navlogo.root.maxWidth};
`;

const Navbar = ({ logoUrl, logoAlt, links, activeIndex }: INavbar): React.ReactElement => (
  <Nav>
    <ContentContainer>
      <Ul>
        <li>
          <a href="/">
            <Logo src={logoUrl} alt={logoAlt} />
          </a>
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <Navlink to={link.to} text={link.text} active={index === activeIndex} />
          </li>
        ))}
      </Ul>
    </ContentContainer>
  </Nav>
);

export default Navbar;
