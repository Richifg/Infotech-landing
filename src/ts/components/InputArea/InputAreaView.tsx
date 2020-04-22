import React, { ReactElement, forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  box-sizing: border-box;
  border: ${(p) => p.theme.contactForm.input.root.border};
  background-color: ${(p) => p.theme.contactForm.input.root.backgroundColor};
  width: ${(p) => p.theme.contactForm.input.root.width};
  padding: ${(p) => p.theme.contactForm.input.root.padding};
  border-radius: ${(p) => p.theme.contactForm.input.root.borderRadius};
  margin-bottom: ${(p) => p.theme.contactForm.input.root.marginBottom};
  height: ${(p) => p.theme.contactForm.input.textArea.height};
  &::placeholder {
    color: ${(p) => p.theme.contactForm.input.placeholder.color};
  }
`;

const InputAreaView = forwardRef(function InputTextInputAreaViewiew(props: any, ref): ReactElement {
  return <Input {...props} ref={ref} />;
});

export default InputAreaView;
