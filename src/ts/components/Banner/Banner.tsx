import React from 'react';
import styled from 'styled-components';
import { IBannerContent } from 'interfaces/interfaces';
import Typography from 'components/Typography';
import Button from 'components/Button';

const BannerContainer = styled.section`
  margin-top: var(--nav-height);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const BannerContent = styled.div`
  max-width: 50%;
  padding: 2em 4em;
`;

const Banner = ({ id, imgUrl, text, buttonText }: IBannerContent): React.ReactElement => (
  <BannerContainer id={id} style={{ backgroundImage: `url(${imgUrl})` }}>
    <BannerContent>
      <Typography type="headline-3" tag="h1" color="white">
        {text}
      </Typography>
      <Button>{buttonText}</Button>
    </BannerContent>
  </BannerContainer>
);

Banner.defaultProps = {
  id: 'banner',
  imgAlt: '',
};

export default Banner;
