import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IBannerContent } from 'interfaces/interfaces';

import Typography from 'components/Typography';
import Button from 'components/Button';
import ContentContainer from 'components/ContentContainer';

interface IBannerContainer {
  url: string;
}
const moveBG = keyframes`
  100% { background-position: 0% 0%; }}
`;
const BannerContainer = styled.section<IBannerContainer>`
  background: url("${(p) => p.url}"), black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10% 10%;
  box-sizing: border-box;
  animation: ${moveBG} 10s ease-out forwards;

  max-height: ${(p) => p.theme.banner.root.maxHeight};
  height: calc(${(p) => p.theme.banner.root.height} - ${(p) => p.theme.navbar.root.height});
  margin-top: ${(p) => p.theme.navbar.root.height};
  padding: ${(p) => p.theme.banner.root.padding};

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-height: none;
    height: ${(p) => p.theme.banner.mobile.root.height};
    margin-top: ${(p) => p.theme.navbar.mobile.root.height};
    padding: ${(p) => p.theme.banner.mobile.root.padding};
  }
`;

const BannerContent = styled.div`
  max-width: ${(p) => p.theme.banner.content.maxWidth};
  display: flex;
  flex-direction: column;
  & > h1 {
    text-shadow: 1px 1px 2px black;
    & span {
      color: ${(p) => p.theme.colors.primary.base};
      text-shadow: 2px 1px 2px white;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    justify-content: center;
  }
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
