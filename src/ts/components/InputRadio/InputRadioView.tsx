import React, { forwardRef, Ref } from 'react';
import { IOption } from 'interfaces';
import Typography from 'components/Typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Label = styled.label`
  display: flex;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 1em;
  }
`;
const Input = styled.input`
  display: none;
`;
const Radio = styled.button`
  width: ${(p) => p.theme.contactForm.radio.root.width};
  height: ${(p) => p.theme.contactForm.radio.root.height};
  border-radius: ${(p) => p.theme.contactForm.radio.root.borderRadius};
  border: ${(p) => p.theme.contactForm.radio.root.border};
  background-color: ${(p) => p.theme.contactForm.radio.root.backgroundColor};
  margin-right: ${(p) => p.theme.contactForm.radio.root.marginRight};
  outline: none !important;
  box-sizing: border-box;
  pointer-events: none;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    border-radius: inherit;
    transition: all 0.2s ease-out;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  label:hover > & {
    border-width: ${(p) => p.theme.contactForm.radio.hover.root.borderWidth};
    background-color: ${(p) => p.theme.contactForm.radio.hover.root.backgroundColor};
  }
  input:checked + & {
    border-color: ${(p) => p.theme.contactForm.radio.checked.root.borderColor};
    border-width: ${(p) => p.theme.contactForm.radio.checked.root.borderWidth};
    background-color: ${(p) => p.theme.contactForm.radio.checked.root.backgroundColor};
    &::after {
      width: ${(p) => p.theme.contactForm.radio.checked.after.width} !important;
      height: ${(p) => p.theme.contactForm.radio.checked.after.height} !important;
      background-color: ${(p) => p.theme.contactForm.radio.checked.after.backgroundColor};
    }
  }
  input:active + &,
  input:focus + & {
    border-color: ${(p) => p.theme.contactForm.radio.active.root.borderColor};
    border-width: ${(p) => p.theme.contactForm.radio.active.root.borderWidth};
    background-color: ${(p) => p.theme.contactForm.radio.active.root.backgroundColor};
    &::after {
      width: ${(p) => p.theme.contactForm.radio.active.after.width};
      height: ${(p) => p.theme.contactForm.radio.active.after.height};
      background-color: ${(p) => p.theme.contactForm.radio.active.after.backgroundColor};
    }
  }
`;

interface IRadioOption extends IOption {
  checked: boolean;
  id: string;
}

interface IInputRadioView {
  name: string;
  options: IRadioOption[];
}

const InputRadioView = forwardRef(function InputRadioView(
  props: IInputRadioView,
  ref: Ref<HTMLInputElement>,
) {
  const { name, options } = props;
  return (
    <Container>
      {options.map((option, index) => (
        <Label key={index} htmlFor={option.id}>
          <Input
            ref={ref}
            type="radio"
            name={name}
            value={option.value}
            id={option.id}
            defaultChecked={option.checked}
          />
          <Radio type="button" />
          <Typography type="body2" tag="span">
            {option.label}
          </Typography>
        </Label>
      ))}
    </Container>
  );
});

export default InputRadioView;
