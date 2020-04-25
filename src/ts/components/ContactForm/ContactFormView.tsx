import React, { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IFormSection } from 'interfaces';
import ContactFormInput from 'components/ContactFormInput';
import Typography from 'components/Typography';
import Button from 'components/Button';

const FormContent = styled.div`
  background-color: ${(p) => p.theme.contactForm.root.backgroundColor};
  max-width: ${(p) => p.theme.contactForm.root.maxWidth};
  text-align: ${(p) => p.theme.contactForm.root.textAlign};
`;
const FormSection = styled.div`
  margin-bottom: ${(p) => p.theme.contactForm.section.marginBottom};
`;
const SectionTitle = styled.div`
  border-bottom: ${(p) => p.theme.contactForm.sectionTitle.borderBottom};
  max-width: ${(p) => p.theme.contactForm.sectionTitle.maxWidth};
  margin-bottom: ${(p) => p.theme.contactForm.sectionTitle.marginBottom};
`;
const SectionSubtitle = styled.div`
  max-width: ${(p) => p.theme.contactForm.sectionSubtitle.maxWidth};
  margin-bottom: ${(p) => p.theme.contactForm.sectionSubtitle.marginBottom};
`;
const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${(p) => p.theme.contactForm.inputGroup.marginBottom};
  & > :first-child {
    width: ${(p) => p.theme.contactForm.labelColumn.width};
    text-align: right;
    margin-right: ${(p) => p.theme.contactForm.labelColumn.margin};
  }
  & > :last-child {
    width: ${(p) => p.theme.contactForm.inputsColumn.width};
    text-align: left;
    margin-left: ${(p) => p.theme.contactForm.inputsColumn.margin};
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ErrorContainer = styled.div`
  color: ${(p) => p.theme.contactForm.error.color};
  min-height: ${(p) => p.theme.contactForm.error.minHeight};
`;
const ButtonsContainer = styled.div`
  display: flex;
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
          <SectionTitle>
            <Typography type="headline3">{section.title}</Typography>
          </SectionTitle>
          <SectionSubtitle>
            <Typography type="body2">{section.subtitle}</Typography>
          </SectionSubtitle>
          {section.inputs.map((input, index) => (
            <InputGroup key={index}>
              <Typography type="body1">{input.label}:</Typography>
              <InputContainer>
                <ContactFormInput
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  options={input.options}
                  rules={input.rules}
                  register={register}
                  unregister={unregister}
                  setValue={setValue}
                  errors={errors}
                />
                <ErrorContainer>
                  <Typography type="body2">{errors?.[input.name]?.message}</Typography>
                </ErrorContainer>
              </InputContainer>
            </InputGroup>
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
