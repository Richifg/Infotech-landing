import React, { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';

import { IFormSection } from 'interfaces';
import ContactFormInput from 'components/ContactFormInput';
import Typography from 'components/Typography';
import IconButton from 'components/IconButton';
import Button from 'components/Button';

const slideUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormContent = styled.div`
  background-color: ${(p) => p.theme.contactForm.root.backgroundColor};
  text-align: ${(p) => p.theme.contactForm.root.textAlign};
  @media screen and (max-width: 1440px) {
    max-width: ${(p) => p.theme.contactForm.root.maxWidth};
  }
`;
const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const FormSection = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: ${(p) => p.theme.contactForm.section.marginBottom};
  padding: ${(p) => p.theme.contactForm.section.padding};
  @media screen and (max-width: 1440px) {
    width: auto;
    padding: ${(p) => p.theme.contactForm.mobile.section.padding};
  }
`;
const SectionTitle = styled.div`
  border-bottom: ${(p) => p.theme.contactForm.sectionTitle.borderBottom};
  max-width: ${(p) => p.theme.contactForm.sectionTitle.maxWidth};
  margin-bottom: ${(p) => p.theme.contactForm.sectionTitle.marginBottom};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-width: none;
  }
`;
const SectionSubtitle = styled.div`
  color: ${(p) => p.theme.colors.white.darker};
  max-width: ${(p) => p.theme.contactForm.sectionSubtitle.maxWidth};
  margin-bottom: ${(p) => p.theme.contactForm.sectionSubtitle.marginBottom};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-width: none;
    margin-bottom: ${(p) => p.theme.contactForm.mobile.sectionSubtitle.marginBottom};
  }
`;
const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${(p) => p.theme.contactForm.inputGroup.marginBottom};
  & > *:first-child {
    width: ${(p) => p.theme.contactForm.labelColumn.width};
    text-align: right;
    margin-right: ${(p) => p.theme.contactForm.labelColumn.margin};
  }
  & > *:last-child {
    width: ${(p) => p.theme.contactForm.inputsColumn.width};
    text-align: left;
    margin-left: ${(p) => p.theme.contactForm.inputsColumn.margin};
  }

  opacity: 0;
  transform: translateY(50%);
  animation: ${slideUp} 0.3s ease-out forwards;

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    flex-direction: column;
    & > *:first-child {
      width: 100%;
      text-align: center;
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.contactForm.labelColumn.margin};
    }
    & > *:last-child {
      width: 100%;
      text-align: center;
      margin-left: 0;
    }
  }
`;
const LabelContainer = styled.div`
  & > * {
    font-weight: 700;
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
  justify-content: flex-end;
  width: 100%;
`;
const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface IContactFormView {
  groupCounts: number[];
  onAddGroup?(index: number): void;
  onRemoveGroup?(index: number): void;
  register: ReturnType<typeof useForm>['register'];
  unregister: ReturnType<typeof useForm>['unregister'];
  setValue: ReturnType<typeof useForm>['setValue'];
  errors: any;
  sections: IFormSection[];
  buttonText: string;
}

const ContactFormView = ({
  groupCounts,
  onAddGroup,
  onRemoveGroup,
  register,
  unregister,
  setValue,
  errors,
  sections,
  buttonText,
}: IContactFormView): ReactElement => {
  return (
    <FormContent>
      <SectionsContainer>
        {sections.map((section, sectionIndex) => (
          <FormSection key={sectionIndex}>
            <SectionTitle>
              <Typography type="headline3" tag="h3">
                {section.title}
              </Typography>
            </SectionTitle>
            <SectionSubtitle>
              <Typography type="body2">{section.subtitle}</Typography>
            </SectionSubtitle>
            {section.inputs.map((input, inputIndex) => (
              <InputGroup key={input.name}>
                <LabelContainer>
                  <Typography type="body1" tag="label" htmlFor={input.name}>
                    {input.label}:
                  </Typography>
                </LabelContainer>
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
                    <Typography type="body2" style={{ fontWeight: 700 }}>
                      {errors?.[input.name]?.message}
                    </Typography>
                  </ErrorContainer>
                  {section.expandable && inputIndex === section.inputs.length - 1 && (
                    <ButtonsContainer>
                      <IconButton
                        name="plus"
                        alt="agregar"
                        onClick={() => onAddGroup(sectionIndex)}
                      />
                      {groupCounts[sectionIndex] > 1 && (
                        <IconButton
                          name="minus"
                          alt="remover"
                          onClick={() => onRemoveGroup(sectionIndex)}
                        />
                      )}
                    </ButtonsContainer>
                  )}
                </InputContainer>
              </InputGroup>
            ))}
          </FormSection>
        ))}
      </SectionsContainer>
      <SubmitContainer>
        <Button type="submit">{buttonText}</Button>
      </SubmitContainer>
    </FormContent>
  );
};

export default ContactFormView;
