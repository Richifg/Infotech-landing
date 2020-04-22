import React, { ReactElement, ReactType } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules } from 'interfaces';
import DefaultView from './InputAreaView';

interface IInputText {
  name: string;
  placeholder: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  View: ReactType;
}

const InputAreaController = ({
  name,
  placeholder,
  rules,
  register,
  View,
}: IInputText): ReactElement => {
  return (
    <View
      name={name}
      placeholder={placeholder}
      ref={register({ validate: getValidateFunction(rules) })}
    />
  );
};

InputAreaController.defaultProps = {
  View: DefaultView,
};

export default InputAreaController;
