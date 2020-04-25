import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import googleScript from 'services/googleScript';
import { IFormSection } from 'interfaces';
import { useArrayCounter } from 'shared/customHooks';
import ContactFormView from './ContactFormView';

interface IContactForm {
  sections: IFormSection[];
  buttonText: string;
}

const ContactForm = ({ sections, buttonText }: IContactForm): ReactElement => {
  const [groupCounts, addGroup, removeGroup] = useArrayCounter(sections.length);
  const { register, unregister, setValue, errors, handleSubmit } = useForm();

  // some complicated shit conecting to the email server
  const doFancyShit = (data: any): void => {
    console.log(data);
    googleScript.send(data);
  };

  // set each section's inputs based on group count
  const sectionToRender = sections.map((section, index) => {
    const sectionInputs = [];
    for (let i = 0; i < groupCounts[index]; i++) {
      // react-hook-form field array name notation
      const nameSuffix = section.expandable ? `[${i}]` : '';
      sectionInputs.push(
        ...section.inputs.map((input) => ({
          ...input,
          name: input.name + nameSuffix,
        })),
      );
    }
    return { ...section, inputs: sectionInputs };
  });

  // flatten errors object so View can blindly access them by input name alone
  const flattenErrors: any = {};
  Object.keys(errors).forEach((key) => {
    if (Array.isArray(errors[key])) {
      errors[key].forEach((item: any, index: number) => {
        flattenErrors[`${key}[${index}]`] = item;
      });
    } else {
      flattenErrors[key] = errors[key];
    }
  });
  console.log(errors, flattenErrors);

  return (
    <form onSubmit={handleSubmit(doFancyShit)}>
      <ContactFormView
        register={register}
        unregister={unregister}
        setValue={setValue}
        errors={flattenErrors}
        sections={sectionToRender}
        buttonText={buttonText}
        onAddGroup={addGroup}
        onRemoveGroup={removeGroup}
      />
    </form>
  );
};

export default ContactForm;
