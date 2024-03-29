import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { IRules, IOption } from 'interfaces';

import InputFile from 'components/InputFile';
import InputText from 'components/InputText';
import InputArea from 'components/InputArea';
import InputRadio from 'components/InputRadio';
import InputCheckbox from 'components/InputCheckbox';

interface IContactFormInput {
  name: string;
  type: string;
  placeholder?: string;
  options?: IOption[];
  rules?: IRules;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
  errors: any;
}

const ContactFormInput = ({
  name,
  type,
  placeholder,
  options,
  rules,
  register,
  unregister,
  setValue,
  errors,
}: IContactFormInput): ReactElement => {
  switch (type) {
    case 'text':
    case 'email':
    case 'number':
    case 'date':
    case 'tel':
      return (
        <InputText
          name={name}
          type={type}
          placeholder={placeholder}
          rules={rules}
          register={register}
        />
      );
    case 'textarea':
      // eslint-disable-next-line prettier/prettier
      return (
        <InputArea 
          name={name} 
          placeholder={placeholder} 
          rules={rules} 
          register={register} 
        />
      );
    case 'radio':
      return (
        <InputRadio
          name={name}
          placeholder={placeholder}
          options={options}
          rules={rules}
          register={register}
        />
      );
    case 'checkbox':
      // eslint-disable-next-line prettier/prettier
      return (
        <InputCheckbox
          name={name}
          options={options}
          rules={rules}
          register={register}
        />
      );
    case 'file':
      return (
        <InputFile
          register={register}
          unregister={unregister}
          setValue={setValue}
          name={name}
          placeholder={placeholder}
          rules={rules}
          errors={errors}
        />
      );
    default:
      return <h1>INPUT TYPE UNKOWN</h1>;
  }
};

export default ContactFormInput;
