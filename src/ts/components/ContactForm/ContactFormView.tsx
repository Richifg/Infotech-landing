import React, { ReactElement, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IFormSection } from 'interfaces';
import Typography from 'components/Typography';
import Button from 'components/Button';

const Input = styled.input`
  border: none;
  background-color: white;
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 2em;
`;

const Form = styled.form`
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
  onSubmit(): void;
  onAddGroup?(index: number): void;
  onRemoveGroup?(index: number): void;
  register: ReturnType<typeof useForm>['register'];
  sections: IFormSection[];
}

const ContactFormView = ({
  onSubmit,
  onAddGroup,
  onRemoveGroup,
  register,
  sections,
}: IContactFormView): ReactElement => {
  //console.log(sections);
  return (
    <Form onSubmit={onSubmit}>
      {sections.map((section, index) => (
        <FormSection key={index}>
          <Typography type="headline3">{section.title}</Typography>
          <Typography type="subtitle1">{section.subtitle}</Typography>
          {section.inputs.map((input, index) => (
            <Fragment key={index}>
              <Typography type="subtitle2">{input.label}</Typography>
              <Input type={input.type} name={input.name} ref={register} />
            </Fragment>
          ))}
          {section.expandable && (
            <ButtonsContainer>
              <Button type="button" onClick={() => onAddGroup(index)}>+</Button>
              <Button type="button" onClick={() => onRemoveGroup(index)}>-</Button>
            </ButtonsContainer>
          )}
        </FormSection>
      ))}
      <Button type="submit">SUBMIT!!!</Button>
    </Form>
  );
};

export default ContactFormView;
