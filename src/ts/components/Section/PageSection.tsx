import React, { ReactElement, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ISection } from 'interfaces';

import SectionElement from 'components/SectionElement';
import ContentContainer from 'components/ContentContainer';

const Section = styled.section`
  display: flex;
`;

interface IStyledColumn {
  background: boolean;
  full: boolean;
  mobile: boolean;
}

const Column = styled.div<IStyledColumn>`
  flex: 0 1 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: ${(p) => p.theme.column.root.padding};
  text-align: ${(p) => (p.full ? 'center' : 'left')};
  background-color: ${(p) => {
    if (p.background) return p.theme.column.alt.backgroundColor;
    if (p.full) return p.theme.column.full.backgroundColor;
    return p.theme.column.root.backgroundColor;
  }};
  color: ${(p) => (p.background ? p.theme.column.alt.color : p.theme.column.root.color)};
  margin: ${(p) => (p.background ? p.theme.column.alt.margin : p.theme.column.root.margin)};
  z-index: ${(p) => (p.background ? 2 : 1)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(p) => (p.full ? 'center' : 'left')};

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    display: ${(p) => (p.mobile ? 'flex' : 'none')};
    padding: ${(p) => p.theme.column.mobile.root.padding};
    flex: 1 0 100%;
    margin: ${(p) => p.theme.column.mobile.alt.margin};
  }
`;

const PageSection = ({ id, columns }: ISection): ReactElement => {
  const theme = useContext(ThemeContext);
  return (
    <ContentContainer
      color={columns.length === 1 && !columns[0].background ? theme.colors.white.base : ''}
    >
      <Section id={id}>
        {columns.map((column, index) => (
          <Column
            key={index}
            background={column.background}
            full={columns.length === 1}
            mobile={column.mobile}
          >
            {column.elements.map((element, index) => (
              <SectionElement key={index} {...element} />
            ))}
          </Column>
        ))}
      </Section>
    </ContentContainer>
  );
};

export default PageSection;
