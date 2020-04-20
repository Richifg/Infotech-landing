import React, { ReactElement, forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  background-color: white;
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 2em;
`;

const InputTextView = forwardRef(function InputTextView(props: any, ref): ReactElement {
  return <Input {...props} ref={ref} />;
});

export default InputTextView;
