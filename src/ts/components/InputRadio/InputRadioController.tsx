import React, { ReactType, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { getValidFunctionInput } from 'shared/validationRules';
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
}: IInputRadioController): ReactElement => {
  const checkedOptions = options.map((option) => ({
    ...option,
    checked: option.value === placeholder,
    id: name + option.value,
  }));
  return (
    <View
      name={name}
      options={checkedOptions}
      ref={register({ validate: getValidFunctionInput(rules) })}
    />
  );
};

InputRadioController.defaultProps = {
  View: DefaultView,
};

export default InputRadioController;
