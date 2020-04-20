import React, { useEffect, ReactElement, ReactType } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules } from 'interfaces';
import DefaultView from './InputFileView';

interface IInputText {
  name: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
  View: ReactType;
}

const InputTextController = ({
  name,
  rules,
  register,
  unregister,
  setValue,
  View,
}: IInputText): ReactElement => {
  useEffect(() => {
    register({ name }, { validate: getValidateFunction(rules) });
    return () => unregister(name);
  }, []);

  const handleOnChange = ({ target }: any): void => {
    // DO SOME FILE READER SHIT HERE
    setValue(name, target.value);
  };

  return <View type="input" name={name} onChange={handleOnChange} />;
};

InputTextController.defaultProps = {
  View: DefaultView,
};

export default InputTextController;
