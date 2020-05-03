import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { colors } from 'theme/defaultTheme';
import { ICard } from 'interfaces';
import Typography from 'components/Typography';

const CardOuterContainer = styled.div`
  padding: ${(p) => p.theme.card.root.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardInnerContainer = styled.div`
  max-width: ${(p) => p.theme.card.root.maxWidth};
  width: 100%;
  text-align: ${(p) => p.theme.card.root.textAlign};
`;
const ImageContainer = styled.div`
  height: 0;
  padding-bottom: ${(p) => p.theme.card.image.paddingBottom};
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5em;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Card = ({ url, alt, title, subtitle }: ICard): ReactElement => (
  <CardOuterContainer>
    <CardInnerContainer>
      <ImageContainer>
        <Image src={url} alt={alt} />
      </ImageContainer>
      <Typography type="subtitle1">{title}</Typography>
      <Typography type="subtitle2" style={{ opacity: 0.65 }}>
        {subtitle}
      </Typography>
    </CardInnerContainer>
  </CardOuterContainer>
);

export default Card;
