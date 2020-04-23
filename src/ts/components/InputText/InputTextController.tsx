import React, { ReactElement, ReactType } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules } from 'interfaces';
import DefaultView from './InputTextView';

interface IInputText {
  type: 'number' | 'date' | 'email' | 'text';
  name: string;
  placeholder: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  View: ReactType;
}

const InputTextController = ({
  type,
  name,
  placeholder,
  rules,
  register,
  View,
}: IInputText): ReactElement => {
  const isSmall = ['number', 'email', 'date'].includes(type);
  return (
    <View
      type={type}
      name={name}
      placeholder={placeholder}
      small={isSmall}
      ref={register({ validate: getValidateFunction(rules) })}
    />
  );
};

InputTextController.defaultProps = {
  View: DefaultView,
};

export default InputTextController;