import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TIconName } from 'interfaces/types';
import Icon from 'components/Icon';

const StyledButton = styled.button`
  cursor: pointer;
  margin: ${(p) => p.theme.iconButton.root.margin};
  padding: ${(p) => p.theme.iconButton.root.padding};
  border: ${(p) => p.theme.iconButton.root.border};
  border-radius: ${(p) => p.theme.iconButton.root.borderRadius};
  color: ${(p) => p.theme.iconButton.root.color};
  background-color: ${(p) => p.theme.iconButton.root.backgroundColor};
  position: relative;
  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${(p) => p.theme.iconButton.decoration.borderRadius};
    width: ${(p) => p.theme.iconButton.decoration.size};
    height: ${(p) => p.theme.iconButton.decoration.size};
    background-color: ${(p) => p.theme.iconButton.decoration.backgroundColor};
    transition: width 0.2s ease-out, height 0.2 ease-out;
  }
  &:hover::before {
    width: ${(p) => p.theme.iconButton.hover.decoration.size};
    height: ${(p) => p.theme.iconButton.hover.decoration.size};
    background-color: ${(p) => p.theme.iconButton.hover.decoration.backgroundColor};
  }
  &:active::before {
    width: ${(p) => p.theme.iconButton.active.decoration.size};
    height: ${(p) => p.theme.iconButton.active.decoration.size};
    background-color: ${(p) => p.theme.iconButton.active.decoration.backgroundColor};
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

interface IIconButton {
  name: TIconName;
  type?: 'button' | 'submit' | 'reset';
  onClick?(): void;
}

const IconButton = ({ name, type, onClick }: IIconButton): ReactElement => (
  <StyledButton onClick={onClick} type={type}>
    <Icon name={name} />
  </StyledButton>
);

IconButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default IconButton;
