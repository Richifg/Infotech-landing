import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ISection } from 'interfaces';

import SectionElement from 'components/SectionElement';
import ContentContainer from 'components/ContentContainer';

const Section = styled.section`
  display: flex;
`;

interface IStyledColumn {
  background: boolean;
}

const Column = styled.div<IStyledColumn>`
  padding: 2em;
  flex: 0 1 100%;
  background-color: ${(p) => (p.background ? 'blue' : 'transparent')};
`;

const PageSection = ({ id, columns }: ISection): ReactElement => (
  <ContentContainer>
    <Section id={id}>
      {columns.map((column, index) => (
        <Column key={index} background={column.background}>
          {column.elements.map((element, index) => (
            <SectionElement key={index} {...element} />
          ))}
        </Column>
      ))}
    </Section>
  </ContentContainer>
);

export default PageSection;
