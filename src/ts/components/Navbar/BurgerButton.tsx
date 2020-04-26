import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

import Icon from 'components/Icon';

const appear = keyframes`
  100% { opacity: 1; }
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
`;
const IconContainer = styled.span`
  opacity: 0;
  color: ${(p) => p.theme.colors.primary.base};
  animation: ${appear} 0.3s linear forwards;
`;
const Text = styled.span`
  display: none;
`;

interface IBurger {
  isOpen: boolean;
  onClick?(): void;
}

const BurgerButton = ({ isOpen, onClick }: IBurger): ReactElement => (
  <Button onClick={onClick}>
    <Text>{isOpen ? 'abrir' : 'cerrar'}</Text>
    {isOpen && (
      <IconContainer>
        <Icon name="x" key={1} />
      </IconContainer>
    )}
    {!isOpen && (
      <IconContainer>
        <Icon name="burger" key={2} />
      </IconContainer>
    )}
  </Button>
);

BurgerButton.defaultProps = {
  onClick: () => {},
};

export default BurgerButton;
