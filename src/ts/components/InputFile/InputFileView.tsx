import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import { TAsyncState } from 'interfaces/types';

const Container = styled.label`
  cursor: pointer;
  position: relative;
  width: ${(p) => p.theme.contactForm.input.root.width};
  margin-bottom: ${(p) => p.theme.contactForm.input.root.marginBottom};
  border: none;
  border-radius: ${(p) => p.theme.contactForm.input.root.borderRadius};
  background-color: ${(p) => p.theme.contactForm.input.root.backgroundColor};
  height: calc(${(p) => p.theme.contactForm.input.root.fontSize} * ${(p) => p.theme.contactForm.input.root.lineHeight} + 2 * ${(p) => p.theme.contactForm.input.root.paddingY});

  &:hover > *:last-child {
    font-size: 1.1em;
  }
  &:active,
  &:focus {
    outline: 2px solid ${(p) => p.theme.contactForm.input.root.outlineColor};
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 100%;
  cursor: pointer;
`;
const TextContainer = styled.span<Pick<IInputFileView, 'state'>>`
  position: absolute;
  left: ${(p) => p.theme.contactForm.input.root.paddingX};
  top: 50%;
  transform: translateY(-50%);
  color: ${(p) => {
    if (p.state === 'INIT') return p.theme.colors.black.lighter;
    else return p.theme.colors.black.base;
  }};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 85%;
`;
const IconContainer = styled.span<Pick<IInputFileView, 'state'>>`
  position: absolute;
  right: ${(p) => p.theme.contactForm.input.root.paddingX};
  top: 50%;
  transform: translateY(-50%);
  transition: font-size 0.2s;
  color: ${(p) => {
    if (p.state === 'INIT') return p.theme.colors.black.base;
    if (p.state === 'SUCCESS') return p.theme.colors.success.base;
    if (p.state === 'ERROR') return p.theme.colors.alert.base;
  }};
`;

interface IInputFileView {
  type: string;
  name: string;
  text: string;
  state: TAsyncState;
  onChange(): void;
}

const InputFileView = ({ type, name, text, state, onChange }: IInputFileView): ReactElement => (
  <Container tabIndex={0}>
    <Input type={type} name={name} onChange={onChange} tabIndex={-1} />
    <TextContainer state={state}>
      <Typography type="body2" tag="span">
        {text}
      </Typography>
    </TextContainer>
    <IconContainer state={state}>
      {state === 'INIT' && <Icon name="upload" />}
      {state === 'LOADING' && <Loader size="small" />}
      {state === 'SUCCESS' && <Icon name="check" />}
      {state === 'ERROR' && <Icon name="alert" />}
    </IconContainer>
  </Container>
);

export default InputFileView;
