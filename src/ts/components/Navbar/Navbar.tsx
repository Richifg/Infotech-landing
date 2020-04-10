import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { INavbarContent } from 'interfaces';

import View from './View';

interface INavbar extends INavbarContent, RouteComponentProps {}

const Navbar = ({ links, logoAlt, logoUrl, history }: INavbar): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // keep track of active link based on url hash
  useEffect(() => {
    const newIndex = links.findIndex((link) => `/${link.to}` === history.location.pathname);
    setActiveIndex(newIndex);
  }, [history.location.pathname, links]);

  return <View links={links} logoUrl={logoUrl} logoAlt={logoAlt} activeIndex={activeIndex} />;
};

export default withRouter(Navbar);
