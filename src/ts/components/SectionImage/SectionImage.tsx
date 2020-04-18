import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ISectionImage {
  url: string;
  alt: string;
}

const Image = styled.img`
  max-width: ${(p) => p.theme.sectionImage.root.maxWidth};
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionImage = ({ url, alt }: ISectionImage): ReactElement => (
  <Container>
    <Image src={url} alt={alt} />
  </Container>
);

export default SectionImage;
