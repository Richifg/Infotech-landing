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

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: var(--clr-secondary);
  }
`;

const Navlink = ({ to, text, active }: INavlink): React.ReactElement => (
  <Link className={active && 'active'} href={`#${to}`}>
    <Typography tag="span" type="body-1">
      {text}
    </Typography>
  </Link>
);

export default Navlink;
