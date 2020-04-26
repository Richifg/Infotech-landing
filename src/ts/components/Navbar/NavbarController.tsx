import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { INavbarContent } from 'interfaces';

import NavbarView from './NavbarView';

interface INavbar extends INavbarContent, RouteComponentProps {}

const Navbar = ({ links, logoAlt, logoUrl, history }: INavbar): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  // keep track of active link based on url hash
  useEffect(() => {
    const newIndex = links.findIndex((link) => `/${link.to}` === history.location.pathname);
    setActiveIndex(newIndex);
  }, [history.location.pathname, links]);

  return (
    <NavbarView
      links={links}
      logoUrl={logoUrl}
      logoAlt={logoAlt}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onToggle={() => setIsOpen(!isOpen)}
      activeIndex={activeIndex}
    />
  );
};

export default withRouter(Navbar);
