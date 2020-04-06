import React from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';

const StyledButton = styled.button`
  cursor: pointer;
  padding: var(--btn-padding);
  border: var(--btn-border);
  border-radius: var(--btn-border-radius);
  color: var(--btn-fnt-clr);
  background-color: var(--btn-bck-clr);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--btn-bck-clr-hover);
  }
  &:active {
    background-color: var(--btn-bck-clr-click);
  }
`;

const Button = (props: any): React.ReactElement => (
  <StyledButton {...props}>
    <Typography tag="span" type="button" color="white">
      {props.children}
    </Typography>
  </StyledButton>
);

export default Button;
