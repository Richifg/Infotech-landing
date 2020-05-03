import React, { ReactElement, useMemo, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useForm } from 'react-hook-form';

import { IDialogStore } from 'interfaces';
import googleScript from 'services/googleScript';
import { IFormSection, IMessages } from 'interfaces';
import { useArrayCounter } from 'shared/customHooks';
import ContactFormView from './ContactFormView';

interface IContactForm extends IDialogStore {
  sections: IFormSection[];
  buttonText: string;
  messages?: IMessages;
}

const ContactForm = inject('dialog')(
  observer(
    ({ sections, buttonText, messages, dialog }: IContactForm): ReactElement => {
      const [groupCounts, addGroup, removeGroup] = useArrayCounter(sections.length);
      const { register, unregister, watch, setValue, errors, handleSubmit, reset } = useForm();

      // update store messages based on state
      useEffect(() => {
        if (dialog.isSuccess()) {
          dialog.title = messages.success.title;
          dialog.text = messages.success.text;
        }
        if (dialog.isLoading()) {
          dialog.title = messages.loading.title;
          dialog.text = messages.loading.text;
        }
        if (dialog.isFailure()) {
          dialog.title = messages.error.title;
          dialog.text = messages.error.text;
        }
      }, [messages, dialog.state]);

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

      // TODO: turn this into a hook
      const postForm = async (data: any): Promise<void> => {
        console.log(data);
        dialog.setLoading();
        dialog.visible = true;
        const res = await googleScript.send(data);
        if (res.result === 'error') {
          dialog.setFailure();
          console.log(res.error);
        } else {
          dialog.setSuccess();
          reset();
          window.scrollTo({ top: 0 });
        }
        console.log(res);
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
        </form>
      );
    },
  ),
);

export default ContactForm;
