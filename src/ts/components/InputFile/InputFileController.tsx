import React, { useEffect, ReactElement, ReactType } from 'react';
import { useForm } from 'react-hook-form';
import { getValidateFunction } from 'shared/validationRules';
import { IRules, IFileInfo } from 'interfaces';
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
    if (target?.files.length > 0) {
      const file = target.files[0];
      // make a ref for filereader on mount
      const reader = new FileReader();
      reader.onloadend = function (e) {
        if (e.target.error != null) {
          // set state as error, also add loading state and let view handle loader
          console.log('File ' + name + ' could not be read.');
        } else {
          const fileValue: IFileInfo = { name: file.name, size: file.size, url: e.target.result };
          setValue(name, fileValue, true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return <View type="file" name={name} onChange={handleOnChange} />;
};

InputTextController.defaultProps = {
  View: DefaultView,
};

export default InputTextController;
