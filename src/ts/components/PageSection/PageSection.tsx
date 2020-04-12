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
  full: boolean;
}

const Column = styled.div<IStyledColumn>`
  padding: 2em;
  flex: 0 1 100%;
  text-align: ${(p) => (p.full ? 'center' : 'left')};
  background-color: ${(p) =>
    p.background ? p.theme.column.alt.backgroundColor : p.theme.column.root.backgroundColor};
  color: ${(p) => (p.background ? p.theme.column.alt.color : p.theme.column.root.color)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(p) => (p.full ? 'center' : 'left')};
`;

const PageSection = ({ id, columns }: ISection): ReactElement => (
  <ContentContainer>
    <Section id={id}>
      {columns.map((column, index) => (
        <Column key={index} background={column.background} full={columns.length === 1}>
          {column.elements.map((element, index) => (
            <SectionElement key={index} {...element} />
          ))}
        </Column>
      ))}
    </Section>
  </ContentContainer>
);

export default PageSection;
