import React, { ReactType, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { getValidFunctionInput } from 'shared/validationRules';
import { IRules, IOption } from 'interfaces';
import DefaultView from './InputCheckboxView';

interface IInputCheckboxController {
  name: string;
  rules: IRules;
  options: IOption[];
  register: ReturnType<typeof useForm>['register'];
  View: ReactType;
}

const InputCheckboxController = ({
  name,
  rules,
  options,
  register,
  View,
}: IInputCheckboxController): ReactElement => {
  const namedOptions = options.map((option, index) => ({ ...option, name: `${name}[${index}]` }));
  return <View options={namedOptions} ref={register({ validate: getValidFunctionInput(rules) })} />;
};

InputCheckboxController.defaultProps = {
  View: DefaultView,
};

export default InputCheckboxController;
