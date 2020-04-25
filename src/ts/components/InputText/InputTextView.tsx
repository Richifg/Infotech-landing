import React, { ReactElement, forwardRef, Ref } from 'react';
import styled from 'styled-components';

interface IInput {
  small: boolean;
}

const Input = styled.input<IInput>`
  font-size: ${(p) => p.theme.contactForm.input.root.fontSize};
  line-height: ${(p) => p.theme.contactForm.input.root.lineHeight};
  box-sizing: border-box;
  border: ${(p) => p.theme.contactForm.input.root.border};
  background-color: ${(p) => p.theme.contactForm.input.root.backgroundColor};
  width: ${(p) =>
    p.small ? p.theme.contactForm.input.small.width : p.theme.contactForm.input.root.width};
  padding: ${(p) => p.theme.contactForm.input.root.paddingY} ${(p) => p.theme.contactForm.input.root.paddingX};
  border-radius: ${(p) => p.theme.contactForm.input.root.borderRadius};
  margin-bottom: ${(p) => p.theme.contactForm.input.root.marginBottom};
  outline-color: ${(p) => p.theme.contactForm.input.root.outlineColor};
  &::placeholder {
    color: ${(p) => p.theme.contactForm.input.placeholder.color};
  }
`;
interface IInputTextView {
  type: string;
  name: string;
  placeholder: string;
  small: boolean;
}

const InputTextView = forwardRef(function InputTextView(
  props: IInputTextView,
  ref: Ref<HTMLInputElement>,
): ReactElement {
  return <Input {...props} ref={ref} />;
});

export default InputTextView;
