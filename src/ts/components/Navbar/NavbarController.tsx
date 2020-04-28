import React, { useState, useEffect, useContext, SyntheticEvent } from 'react';
import { ThemeContext } from 'styled-components';
import { INavbarContent } from 'interfaces';

import NavbarView from './NavbarView';

const Navbar = ({ links, logoAlt, logoUrl }: INavbarContent): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const updatedActiveIndex = (): void => {
    const newIndex = links.findIndex((link) => `#${link.to}` === window.location.hash);
    setActiveIndex(newIndex);
  };

  // keep track of active link based on url hash
  useEffect(() => {
    updatedActiveIndex();
  });

  const theme = useContext(ThemeContext);

  const scrollTo = (id: string) => (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    const isSmall = window.innerWidth < parseInt(theme.breakpoint);
    const offset = isSmall ? theme.navbar.mobile.root.height : theme.navbar.root.height;
    const element = document.getElementById(id);
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop - parseInt(offset),
    });
    window.history.replaceState(null, null, `#${id}`);
    updatedActiveIndex();
  };

  return (
    <NavbarView
      links={links}
      logoUrl={logoUrl}
      logoAlt={logoAlt}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onToggle={() => setIsOpen(!isOpen)}
      onLinkClick={scrollTo}
      activeIndex={activeIndex}
    />
  );
};

export default Navbar;
