import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';

const StyledButton = styled.button`
  cursor: pointer;
  padding: ${(p) => p.theme.button.root.padding};
  border: ${(p) => p.theme.button.root.border};
  border-radius: ${(p) => p.theme.button.root.borderRadius};
  color: ${(p) => p.theme.button.root.color};
  background-color: ${(p) => p.theme.button.root.backgroundColor};
  margin: ${(p) => p.theme.button.root.margin};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(p) => p.theme.button.hover.backgroundColor};
  }
  &:active {
    background-color: ${(p) => p.theme.button.active.backgroundColor};
    outline: none;
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    padding: ${(p) => p.theme.button.mobile.root.padding};
  }
`;

const Button = (props: any): ReactElement => (
  <StyledButton {...props}>
    <Typography tag="span" type="button" color="white">
      {props.children}
    </Typography>
  </StyledButton>
);

export default Button;
