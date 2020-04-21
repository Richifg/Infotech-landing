import React, { ReactElement, Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IFormSection } from 'interfaces';
import ContactFormInput from 'components/ContactFormInput';
import Typography from 'components/Typography';
import Button from 'components/Button';

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const FormSection = styled.div`
  background-color: gray;
`;

interface IContactFormView {
  onAddGroup?(index: number): void;
  onRemoveGroup?(index: number): void;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
  errors: any;
  sections: IFormSection[];
}

const ContactFormView = ({
  onAddGroup,
  onRemoveGroup,
  sections,
  register,
  unregister,
  setValue,
  errors,
}: IContactFormView): ReactElement => {
  useEffect(() => console.log('RE-RENDER'));
  return (
    <FormContent>
      {sections.map((section, index) => (
        <FormSection key={index}>
          <Typography type="headline3">{section.title}</Typography>
          <Typography type="subtitle1">{section.subtitle}</Typography>
          {section.inputs.map((input, index) => (
            <Fragment key={index}>
              <Typography type="body1">{input.label}</Typography>
              <ContactFormInput
                name={input.name}
                type={input.type}
                rules={input.rules}
                register={register}
                unregister={unregister}
                setValue={setValue}
              />
              <Typography type="body2">{errors?.[input.name]?.message}</Typography>
            </Fragment>
          ))}
          {section.expandable && (
            <ButtonsContainer>
              <Button type="button" onClick={() => onAddGroup(index)}>
                +
              </Button>
              <Button type="button" onClick={() => onRemoveGroup(index)}>
                -
              </Button>
            </ButtonsContainer>
          )}
        </FormSection>
      ))}
      <Button type="submit">SUBMIT!!!</Button>
    </FormContent>
  );
};

export default ContactFormView;
