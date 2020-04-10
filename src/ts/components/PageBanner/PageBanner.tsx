import React from 'react';
import styled from 'styled-components';
import { IBannerContent } from 'interfaces/interfaces';

import Typography from 'components/Typography';
import Button from 'components/Button';
import ContentContainer from 'components/ContentContainer';

const BannerContainer = styled.section`
  margin-top: ${(p) => p.theme.navbar.root.height};
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - ${(p) => p.theme.navbar.root.height});
`;

const BannerContent = styled.div`
  max-width: 65%;
`;

const PageBanner = ({ id, url, text, buttonText }: IBannerContent): React.ReactElement => (
  <BannerContainer id={id} style={{ backgroundImage: `url(${url})` }}>
    <ContentContainer>
      <BannerContent>
        <Typography type="headline1" tag="h1" color="white">
          {text}
        </Typography>
        <Button>{buttonText}</Button>
      </BannerContent>
    </ContentContainer>
  </BannerContainer>
);

PageBanner.defaultProps = {
  id: 'banner',
  imgAlt: '',
};

export default PageBanner;
