import React, { ReactElement } from 'react';
import Typography from 'components/Typography';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(p) => p.theme.sectionParagraph.root.maxWidth};
  margin-top: 1em;
  margin-bottom: 1em;
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
