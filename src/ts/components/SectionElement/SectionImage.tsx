import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ISectionImage {
  url: string;
  alt: string;
}

const Image = styled.img`
  max-width: 75%;
  width: 100%;
  max-height: 75%;
  height: auto;
`;

const SectionImage = ({ url, alt }: ISectionImage): ReactElement => <Image src={url} alt={alt} />;

export default SectionImage;
