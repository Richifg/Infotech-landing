import React, { useEffect, useState, useRef, ReactElement, ReactType } from 'react';
import { useForm } from 'react-hook-form';
import { getValidFunctionFile } from 'shared/validationRules';
import { IRules, IFileInfo } from 'interfaces';
import { TAsyncState } from 'interfaces/types';
import DefaultView from './InputFileView';

interface IInputFile {
  name: string;
  placeholder: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
  errors: any;
  View: ReactType;
}

const InputFileController = ({
  name,
  placeholder,
  rules,
  register,
  unregister,
  setValue,
  errors,
  View,
}: IInputFile): ReactElement => {
  const FR = useRef(new FileReader());
  const file = useRef(null);
  const [fileState, setFileState] = useState<TAsyncState>('INIT');

  // configure file reader on mount
  useEffect(() => {
    FR.current.onloadend = function (e) {
      if (e.target.error != null) {
        setFileState('ERROR');
      } else {
        const fileValue: IFileInfo = {
          name: file.current.name,
          size: file.current.size,
          url: e.target.result,
        };
        setValue(name, fileValue, true);
        setFileState('SUCCESS');
      }
    };
  }, []);

  // errors from react-hook-form validation can override fileState
  useEffect(() => {
    if (fileState !== 'LOADING' && fileState !== 'INIT') {
      if (Object.keys(errors).includes(name)) setFileState('ERROR');
      else setFileState('SUCCESS');
    }
  }, [errors, fileState]);

  // register input in react-hook-form manually
  useEffect(() => {
    register({ name }, { validate: getValidFunctionFile(rules) });
    return () => unregister(name);
  }, []);

  const handleOnChange = ({ target }: any): void => {
    if (target?.files.length > 0) {
      file.current = target.files[0];
      setFileState('LOADING');
      FR.current.readAsDataURL(file.current);
    }
  };

  return (
    <View
      type="file"
      name={name}
      onChange={handleOnChange}
      state={fileState}
      text={file.current?.name || placeholder}
    />
  );
};

InputFileController.defaultProps = {
  View: DefaultView,
};

export default InputFileController;
