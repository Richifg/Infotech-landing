import React from 'react';
import styled from 'styled-components';
import { INavbarContent } from 'interfaces';

import Navlink from 'components/Navbar/Navlink';
import BurgerButton from 'components/Navbar/BurgerButton';

const Nav = styled.nav`
  width: 100vw;
  height: ${(p) => p.theme.navbar.root.height};
  background-color: ${(p) => p.theme.navbar.root.backgroundColor};
  padding: ${(p) => p.theme.navbar.root.padding};

  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3;
  top: 0;

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    height: ${(p) => p.theme.navbar.mobile.root.height};
    background-color: ${(p) => p.theme.navbar.mobile.root.backgroundColor};
    padding: ${(p) => p.theme.navbar.mobile.root.padding};
  }
`;

const Ul = styled.ul<Pick<INavbar, 'isOpen'>>`
  padding: ${(p) => p.theme.navbar.menu.padding};
  background-color: ${(p) => p.theme.navbar.menu.backgroundColor};
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  height: 100%;
  & li {
    margin: 0 1em;
  }
  & li:first-child {
    margin-right: auto;
  }

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    padding: ${(p) => p.theme.navbar.mobile.menu.padding};
    background-color: ${(p) => p.theme.navbar.mobile.menu.backgroundColor};
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    & li:first-child {
      margin-right: 0;
    }
    position: fixed;
    top: ${(p) => p.theme.navbar.mobile.root.height};
    right: 0;
    transition: transform 0.35s ease-out;
    transform: translateX(${(p) => (p.isOpen ? '0%' : '100%')});
  }
`;
const LogoContainer = styled.li``;

const NavLinkContainer = styled.li<Pick<INavbar, 'isOpen'>>`
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    transition: transform 0.35s ease-out 0.2s;
    transform: translateX(${(p) => (p.isOpen ? '0%' : '200px')});
  }
`;

const Logo = styled.img`
  max-width: ${(p) => p.theme.navbar.logo.maxWidth};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-width: ${(p) => p.theme.navbar.mobile.logo.maxWidth};
    display: none;
  }
`;

const LogoMobile = styled.img`
  display: none;
  max-width: ${(p) => p.theme.navbar.logo.maxWidth};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-width: ${(p) => p.theme.navbar.mobile.logo.maxWidth};
    display: inline;
  }
`;

const BurgerContainer = styled.div`
  margin-left: auto;
  display: none;
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    display: initial;
  }
`;

interface INavbar extends INavbarContent {
  activeIndex: number;
  isOpen: boolean;
  onClose(): void;
  onToggle(): void;
  onLinkClick(id: string): void;
}

const Navbar = ({
  logoUrl,
  logoAlt,
  links,
  activeIndex,
  isOpen,
  onClose,
  onToggle,
  onLinkClick,
}: INavbar): React.ReactElement => (
  <Nav>
    <LogoMobile src={logoUrl} alt={logoAlt} />
    <Ul isOpen={isOpen}>
      <LogoContainer>
        <a href="/" onClick={onClose}>
          <Logo src={logoUrl} alt={logoAlt} />
        </a>
      </LogoContainer>
      {links.map((link, index) => (
        <NavLinkContainer key={index} isOpen={isOpen}>
          <Navlink
            to={link.to}
            text={link.text}
            active={index === activeIndex}
            onClick={onLinkClick}
          />
        </NavLinkContainer>
      ))}
    </Ul>
    <BurgerContainer>
      <BurgerButton onClick={onToggle} isOpen={isOpen} />
    </BurgerContainer>
  </Nav>
);

export default Navbar;
