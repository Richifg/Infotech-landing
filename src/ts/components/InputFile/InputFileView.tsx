import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  background-color: green;
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 2em;
`;

const InputTextView = (props: any): ReactElement => <Input {...props} />;

export default InputTextView;
