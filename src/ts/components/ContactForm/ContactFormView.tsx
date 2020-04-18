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
  errors: ReturnType<typeof useForm>['errors'];
  sections: IFormSection[];
}

const ContactFormView = ({
  onAddGroup,
  onRemoveGroup,
  sections,
  errors,
}: IContactFormView): ReactElement => {
  //console.log(errors);
  return (
    <FormContent>
      {sections.map((section, index) => (
        <FormSection key={index}>
          <Typography type="headline3">{section.title}</Typography>
          <Typography type="subtitle1">{section.subtitle}</Typography>
          {section.inputs.map((input, index) => (
            <Fragment key={index}>
              <Typography type="subtitle1">{input.name}</Typography>
              <Input type={input.type} name={input.name} ref={input.register} />
              <Typography type="subtitle2">{errors?.[input.name]?.message}</Typography>
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
