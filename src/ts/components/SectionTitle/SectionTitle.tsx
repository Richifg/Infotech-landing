import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Typography from 'components/Typography';

interface IContainer {
  align: string;
}

const Container = styled.div<IContainer>`
  position: relative;
  width: fit-content;
  text-align: left;
  margin-bottom: ${(p) => p.theme.sectionTitle.root.marginBottom};

  align-self: ${(p) => {
    if (p.align === 'right') return 'flex-end';
    if (p.align === 'center') return 'center';
    // default to align left
    return 'flex-start';
  }};

  &::before {
    position: absolute;
    content: '';
    background-color: ${(p) => p.theme.sectionTitle.decoration.backgroundColor};
    width: ${(p) => p.theme.sectionTitle.decoration.width};
    height: ${(p) => p.theme.sectionTitle.decoration.height};
    top: ${(p) => p.theme.sectionTitle.decoration.top};
    left: ${(p) => p.theme.sectionTitle.decoration.left};
  }
`;
interface ISectionTitle {
  text: string;
  variants?: { align?: string };
}

const SectionTitle = ({ text, variants }: ISectionTitle): ReactElement => (
  <Container align={variants.align}>
    <Typography tag="h2" type="headline2">
      {text}
    </Typography>
  </Container>
);

SectionTitle.defaultProps = {
  variants: {
    align: 'left',
  },
};

export default SectionTitle;
