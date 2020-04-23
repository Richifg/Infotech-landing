import React, { ReactType, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules, IOption } from 'interfaces';
import DefaultView from './InputRadioView';

interface IInputRadioController {
  name: string;
  placeholder: string;
  rules: IRules;
  options: IOption[];
  register: ReturnType<typeof useForm>['register'];
  View: ReactType;
}

const InputRadioController = ({
  name,
  placeholder,
  rules,
  options,
  register,
  View,
}: IInputRadioController): ReactElement => (
  <View
    name={name}
    placeholder={placeholder}
    options={options}
    ref={register({ validate: getValidateFunction(rules) })}
  />
);

InputRadioController.defaultProps = {
  View: DefaultView,
};

export default InputRadioController;
