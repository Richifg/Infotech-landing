import React, { useState, useEffect, useContext, SyntheticEvent, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { INavbarContent } from 'interfaces';
import { throttleFunction } from 'shared/utlity';

import NavbarView from './NavbarView';

const Navbar = ({ links, logoAlt, logoUrl }: INavbarContent): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const updatedActiveIndex = (): void => {
    const newIndex = links.findIndex((link) => `#${link.to}` === window.location.hash);
    setActiveIndex(newIndex);
  };

  // update activeIndex on page load
  useEffect(() => {
    updatedActiveIndex();
  }, []);

  const theme = useContext(ThemeContext);

  // smooth scroll to selected section when clicking a navlink
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
    // in case throttled hash update missed the timeout window
    setTimeout(() => {
      window.history.replaceState(null, null, `#${id}`);
      updatedActiveIndex();
    }, 300);
  };

  // changes hash based on page scroll
  const updateHash = useCallback(() => {
    const pageMiddlePosition = window.pageYOffset + window.innerHeight / 2;
    for (let i = 0; i < links.length; i++) {
      const id = links[i].to;
      const element = document.getElementById(id);
      if (
        pageMiddlePosition > element.offsetTop &&
        pageMiddlePosition < element.offsetTop + element.clientHeight
      ) {
        window.history.replaceState(null, null, `#${id}`);
        updatedActiveIndex();
        break;
      }
    }
  }, [links]);

  // attach scroll check to window and remove it on unmount
  useEffect(() => {
    const throttledUpadateHash = throttleFunction(updateHash, 200);
    window.addEventListener('scroll', throttledUpadateHash);
    return () => window.removeEventListener('scroll', throttledUpadateHash);
  }, []);

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
