import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { IFormSection } from 'interfaces';
import { useArrayCounter } from 'shared/customHooks';
import ContactFormView from './ContactFormView';

interface IContactForm {
  sections: IFormSection[];
}

const ContactForm = ({ sections }: IContactForm): ReactElement => {
  const { register, handleSubmit } = useForm();
  const [groupCounts, addGroup, removeGroup] = useArrayCounter(sections.length);

  // some complicated shit conecting to the email server
  const printData = (data: any) => console.log(data);

  // set each section's inputs based on group count
  const sectionToRender = sections.map((section, index) => {
    const sectionInputs = [];
    for (let i = 0; i < groupCounts[index]; i++) {
      // react-hook-form field array name notation
      const namePrefix = section.expandable ? `${section.name}[${i}]` : section.name;
      sectionInputs.push(
        ...section.inputs.map((input) => ({
          ...input,
          name: `${namePrefix}.${input.name}`,
        })),
      );
    }
    return { ...section, inputs: sectionInputs };
  });

  return (
    <ContactFormView
      onSubmit={handleSubmit(printData)}
      register={register}
      sections={sectionToRender}
      onAddGroup={addGroup}
      onRemoveGroup={removeGroup}
    />
  );
};

export default ContactForm;
