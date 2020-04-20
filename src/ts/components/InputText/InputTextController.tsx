import React, { ReactElement, ReactType, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules } from 'interfaces';
import DefaultView from './InputTextView';

interface IInputText {
  type: string;
  name: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  View: ReactType;
}

const InputTextController = ({ type, name, rules, register, View }: IInputText): ReactElement => {
  return <View type={type} name={name} ref={register({ validate: getValidateFunction(rules) })} />;
};

InputTextController.defaultProps = {
  View: DefaultView,
};

export default InputTextController;
