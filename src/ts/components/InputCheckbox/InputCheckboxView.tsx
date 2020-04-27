import React, { forwardRef, Ref } from 'react';
import { IOption } from 'interfaces';
import Typography from 'components/Typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Label = styled.label`
  display: flex;
  cursor: pointer;
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    flex: 0 1 50%;
    text-align: left;
  }
`;
const Input = styled.input`
  display: none;
`;
const Checkbox = styled.span`
  width: ${(p) => p.theme.contactForm.checkbox.root.width};
  height: ${(p) => p.theme.contactForm.checkbox.root.height};
  border-radius: ${(p) => p.theme.contactForm.checkbox.root.borderRadius};
  border: ${(p) => p.theme.contactForm.checkbox.root.border};
  background-color: ${(p) => p.theme.contactForm.checkbox.root.backgroundColor};
  margin-right: ${(p) => p.theme.contactForm.checkbox.root.marginRight};
  margin-bottom: ${(p) => p.theme.contactForm.checkbox.root.marginBottom};
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  padding: 8px;

  &::after,
  &::before {
    content: '';
    display: block;
    transition: all 0.1s ease-out;
    position: absolute;
    background-color: ${(p) => p.theme.contactForm.checkbox.checkmark.backgroundColor};
    --size: ${(p) => p.theme.contactForm.checkbox.checkmark.size};
    height: calc(var(--size) * 0.25);
    border-radius: var(--size);
  }

  &::after {
    width: var(--size);
    transform: rotate(-44deg) translate(-17%, -63%);
  }
  &::before {
    width: calc(var(--size) * 0.5);
    transform: rotate(-134deg) translate(29%, -148%);
  }

  label:hover > & {
    border-width: ${(p) => p.theme.contactForm.checkbox.hover.root.borderWidth};
    background-color: ${(p) => p.theme.contactForm.checkbox.hover.root.backgroundColor};
  }
  input:checked + & {
    border-color: ${(p) => p.theme.contactForm.checkbox.checked.root.borderColor};
    border-width: ${(p) => p.theme.contactForm.checkbox.checked.root.borderWidth};
    background-color: ${(p) => p.theme.contactForm.checkbox.checked.root.backgroundColor};
    &::after,
    &::before {
      --size: ${(p) => p.theme.contactForm.checkbox.checked.checkmark.size};
      background-color: ${(p) => p.theme.contactForm.checkbox.checked.checkmark.backgroundColor};
    }
  }
  input:active + &,
  input:focus + & {
    border-color: ${(p) => p.theme.contactForm.checkbox.active.root.borderColor};
    border-width: ${(p) => p.theme.contactForm.checkbox.active.root.borderWidth};
    padding: 7px;
    background-color: ${(p) => p.theme.contactForm.checkbox.active.root.backgroundColor};
    &::after,
    &::before {
      --size: ${(p) => p.theme.contactForm.checkbox.active.checkmark.size};
      background-color: ${(p) => p.theme.contactForm.checkbox.active.checkmark.backgroundColor};
    }
  }
`;

interface ICheckboxOption extends IOption {
  name: string;
}

interface IInputCheckboxView {
  options: ICheckboxOption[];
}

const InputCheckboxView = forwardRef(function InputCheckboxView(
  props: IInputCheckboxView,
  ref: Ref<HTMLInputElement>,
) {
  const { options } = props;
  return (
    <Container>
      {options.map((option, index) => (
        <Label key={index} htmlFor={option.name}>
          <Input
            ref={ref}
            type="checkbox"
            name={option.name}
            id={option.name}
            value={option.value}
          />
          <Checkbox />
          <Typography type="body2" tag="span">
            {option.label}
          </Typography>
        </Label>
      ))}
    </Container>
  );
});

export default InputCheckboxView;
