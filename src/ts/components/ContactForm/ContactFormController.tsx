import React, { ReactElement, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import googleScript from 'services/googleScript';
import { IFormSection, IMessages } from 'interfaces';
import { TAsyncState } from 'interfaces/types';
import { useArrayCounter } from 'shared/customHooks';
import ContactFormView from './ContactFormView';

import Dialog from 'components/Dialog/Dialog';

interface IContactForm {
  sections: IFormSection[];
  buttonText: string;
  messages?: IMessages;
}

const ContactForm = ({ sections, buttonText, messages }: IContactForm): ReactElement => {
  const [groupCounts, addGroup, removeGroup] = useArrayCounter(sections.length);
  const [submitState, setSubmitState] = useState<TAsyncState>('INIT');
  const [showMessage, setShowMessage] = useState(false);
  const { register, unregister, watch, setValue, errors, handleSubmit, reset } = useForm();

  // find all inputs that are part of some other input condition
  // only watch those inputs to reduce re-renders
  const fieldsToWatch = useMemo(() => {
    const fields: string[] = [];
    sections.forEach((section) =>
      section.inputs.forEach((input) => {
        if (input.conditions) {
          fields.push(...input.conditions.map((condition) => condition.name));
        }
      }),
    );
    return fields;
  }, [sections]);
  const fields = watch(fieldsToWatch);
  console.log('FIELDS', fields);

  // TODO: turn this into a hook
  const postForm = async (data: any): Promise<void> => {
    console.log(data);
    setSubmitState('LOADING');
    setShowMessage(true);
    const result = await googleScript.send(data);
    if (result === 'error') {
      setSubmitState('ERROR');
    } else {
      setSubmitState('SUCCESS');
      console.log('resetting');
      reset();
    }
    console.log(result);
  };

  // set each section's inputs based on group count
  const sectionToRender = sections.map((section, index) => {
    const sectionInputs = [];
    for (let i = 0; i < groupCounts[index]; i++) {
      // add conditional inputs only if all their conditions are met
      const inputsToPush = section.inputs.filter(
        (input) =>
          !input.conditions ||
          input.conditions.reduce(
            (prev, condition) => prev && fields[condition.name] === condition.value,
            true,
          ),
      );

      // react-hook-form field array name notation
      const nameSuffix = section.expandable ? `[${i}]` : '';
      sectionInputs.push(
        ...inputsToPush.map((input) => ({
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

  return (
    <form onSubmit={handleSubmit(postForm)}>
      <ContactFormView
        register={register}
        unregister={unregister}
        setValue={setValue}
        errors={flattenErrors}
        sections={sectionToRender}
        buttonText={buttonText}
        groupCounts={groupCounts}
        onAddGroup={addGroup}
        onRemoveGroup={removeGroup}
      />
      {showMessage && (
        <Dialog state={submitState} messages={messages} onClose={() => setShowMessage(false)} />
      )}
    </form>
  );
};

export default ContactForm;
