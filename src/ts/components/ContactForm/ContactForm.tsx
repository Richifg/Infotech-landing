import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import googleScript from 'services/googleScript';
import { validate } from 'shared/validationRules';
import { IFormSection } from 'interfaces';
import { useArrayCounter } from 'shared/customHooks';
import ContactFormView from './ContactFormView';

interface IContactForm {
  sections: IFormSection[];
}

const ContactForm = ({ sections }: IContactForm): ReactElement => {
  const [groupCounts, addGroup, removeGroup] = useArrayCounter(sections.length);
  const { register, errors, handleSubmit } = useForm();

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
      const nameSuffix = section.expandable ? i + 1 : '';
      sectionInputs.push(
        ...section.inputs.map((input) => ({
          ...input,
          name: input.name + nameSuffix,
          register: register({ validate: validate(input.rules) }),
        })),
      );
    }
    return { ...section, inputs: sectionInputs };
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(doFancyShit)}>
      <ContactFormView
        register={register}
        errors={errors}
        sections={sectionToRender}
        onAddGroup={addGroup}
        onRemoveGroup={removeGroup}
      />
    </form>
  );
};

export default ContactForm;
