import React from 'react';
import styled from 'styled-components';
import { INavbarContent } from 'interfaces';
import Navlink from 'components/Navlink';

interface INavbar extends INavbarContent {
  activeIndex: number;
}

const Nav = styled.nav`
  height: 120px;
  background-color: var(--clr-white);
  display: flex;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
`;

const Ul = styled.ul`
  width: 100%;
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
  width: 230px;
`;

const Navbar = ({ logoUrl, logoAlt, links, activeIndex }: INavbar): React.ReactElement => (
  <Nav>
    <Ul>
      <li>
        <Logo src={logoUrl} alt={logoAlt} />
      </li>
      {links.map((link, index) => (
        <li key={index}>
          <Navlink to={link.to} text={link.text} active={index === activeIndex} />
        </li>
      ))}
    </Ul>
  </Nav>
);

export default Navbar;
