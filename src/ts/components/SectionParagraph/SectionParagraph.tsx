import React, { ReactElement } from 'react';
import Typography from 'components/Typography';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(p) => p.theme.sectionParagraph.root.maxWidth};
  margin-bottom: ${(p) => p.theme.sectionParagraph.root.marginBottom};
  @media screen and (max-width: ${(p) => p.theme.breakpoint})  {
    max-width: ${(p) => p.theme.sectionParagraph.mobile.root.maxWidth};
  margin-bottom: ${(p) => p.theme.sectionParagraph.mobile.root.marginBottom};
  }
`;

interface ISectionPragraph {
  text: string;
  variant?: { align: string };
}

const SectionParagraph = ({ text }: ISectionPragraph): ReactElement => (
  <Container>
    <Typography type="body1">{text}</Typography>
  </Container>
);

export default SectionParagraph;
