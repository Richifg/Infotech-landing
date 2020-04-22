import React, { ReactElement, forwardRef } from 'react';
import styled from 'styled-components';

interface IInput {
  small: boolean;
}

const Input = styled.input<IInput>`
  box-sizing: border-box;
  border: ${(p) => p.theme.contactForm.input.root.border};
  background-color: ${(p) => p.theme.contactForm.input.root.backgroundColor};
  width: ${(p) =>
    p.small ? p.theme.contactForm.input.small.width : p.theme.contactForm.input.root.width};
  padding: ${(p) => p.theme.contactForm.input.root.padding};
  border-radius: ${(p) => p.theme.contactForm.input.root.borderRadius};
  margin-bottom: ${(p) => p.theme.contactForm.input.root.marginBottom};
  &::placeholder {
    color: ${(p) => p.theme.contactForm.input.placeholder.color};
  }
`;

const InputTextView = forwardRef(function InputTextView(props: any, ref): ReactElement {
  return <Input {...props} ref={ref} />;
});

export default InputTextView;
