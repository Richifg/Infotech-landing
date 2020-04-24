import React from 'react';
import styled from 'styled-components';
import { IBannerContent } from 'interfaces/interfaces';

import Typography from 'components/Typography';
import Button from 'components/Button';
import ContentContainer from 'components/ContentContainer';

interface IBannerContainer {
  url: string;
}
const BannerContainer = styled.section<IBannerContainer>`
  margin-top: ${(p) => p.theme.navbar.root.height};
  background: url("${(p) => p.url}"), black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: calc(${(p) => p.theme.banner.root.height} - ${(p) => p.theme.navbar.root.height});
  max-height: ${(p) => p.theme.banner.root.maxHeight};
  padding: ${(p) => p.theme.banner.root.padding};
  box-sizing: border-box;
`;

const BannerContent = styled.div`
  max-width: ${(p) => p.theme.banner.content.maxWidth};
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-left: 2em;
`;

const PageBanner = ({
  id,
  url,
  text,
  buttonText,
  buttonTo,
}: IBannerContent): React.ReactElement => (
  <BannerContainer id={id} url={url}>
    <ContentContainer>
      <BannerContent>
        <Typography type="headline1" tag="h1" color="white">
          {text}
        </Typography>
        <ButtonContainer>
          <a href={`#${buttonTo}`}>
            <Button>{buttonText}</Button>
          </a>
        </ButtonContainer>
      </BannerContent>
    </ContentContainer>
  </BannerContainer>
);

PageBanner.defaultProps = {
  id: 'banner',
  imgAlt: '',
};

export default PageBanner;
