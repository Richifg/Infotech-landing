import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { IRules } from 'interfaces';

import InputFile from 'components/InputFile';
import InputText from 'components/InputText';

interface IContactFormInput {
  name: string;
  type: string;
  rules: IRules;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
}

const ContactFormInput = ({
  name,
  type,
  rules,
  register,
  unregister,
  setValue,
}: IContactFormInput): ReactElement => {
  switch (type) {
    case 'text':
    case 'email':
    case 'number':
    case 'date':
      return <InputText name={name} type={type} rules={rules} register={register} />;
    case 'file':
      return (
        <InputFile
          register={register}
          unregister={unregister}
          setValue={setValue}
          name={name}
          rules={rules}
        />
      );
    default:
      return <h1>INPUT TYPE UNKOWN</h1>;
  }
};

export default ContactFormInput;
