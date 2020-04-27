import React, { ReactElement, forwardRef, Ref } from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  box-sizing: border-box;
  font-size: ${(p) => p.theme.contactForm.input.root.fontSize};
  line-height: ${(p) => p.theme.contactForm.input.root.lineHeight};
  border: ${(p) => p.theme.contactForm.input.root.border};
  background-color: ${(p) => p.theme.contactForm.input.root.backgroundColor};
  width: ${(p) => p.theme.contactForm.input.root.width};
  padding: ${(p) => p.theme.contactForm.input.root.paddingY} ${(p) => p.theme.contactForm.input.root.paddingX};
  border-radius: ${(p) => p.theme.contactForm.input.root.borderRadius};
  outline-color: ${(p) => p.theme.contactForm.input.root.outlineColor};
  margin-bottom: ${(p) => p.theme.contactForm.input.root.marginBottom};
  height: ${(p) => p.theme.contactForm.input.textArea.height};
  &::placeholder {
    color: ${(p) => p.theme.contactForm.input.placeholder.color};
  }
`;

interface IInputAreaView {
  name: string;
  placeholder: string;
}

const InputAreaView = forwardRef(function InputTextInputAreaViewiew(
  props: IInputAreaView,
  ref: Ref<HTMLTextAreaElement>,
): ReactElement {
  return <Input {...props} ref={ref} id={props.name} />;
});

export default InputAreaView;
