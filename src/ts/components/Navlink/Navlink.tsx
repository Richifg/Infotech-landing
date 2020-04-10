import React from 'react';
import styled from 'styled-components';
import { ILinkContent } from 'interfaces';
import Typography from 'components/Typography';

interface INavlink extends ILinkContent {
  active: boolean;
}

const Link = styled.a`
  text-decoration: none;
  position: relative;
  color: ${(p) => p.theme.navlink.root.color};
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: ${(p) => p.theme.navlink.activeBar.bottom};
    left: ${(p) => p.theme.navlink.activeBar.left};
    height: ${(p) => p.theme.navlink.activeBar.height};
    background-color: ${(p) => p.theme.navlink.activeBar.backgroundColor};
    width: 0%;
    transition: width 0.2s ease-out;
  }

  &.active::after {
    width: ${(p) => p.theme.navlink.activeBar.width};
  }
`;

const Navlink = ({ to, text, active }: INavlink): React.ReactElement => (
  <Link className={active && 'active'} href={`#${to}`}>
    <Typography tag="span" type="body1">
      {text}
    </Typography>
  </Link>
);

export default Navlink;
