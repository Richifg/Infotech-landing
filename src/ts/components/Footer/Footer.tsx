import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IFooterContent } from 'interfaces';

import Icon from 'components/Icon';

const StyledFooter = styled.footer`
  display: flex;
  padding: ${(p) => p.theme.footer.root.padding};
  color: ${(p) => p.theme.footer.root.color};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    padding: ${(p) => p.theme.footer.mobile.root.padding};
  }
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LinkIcon = styled.a`
  color: ${(p) => p.theme.footer.icon.color};
  font-size: ${(p) => p.theme.footer.icon.size};
  text-decoration: none;
  &:not(:first-child) {
    margin-left: ${(p) => p.theme.footer.icon.marginLeft};
  }
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    font-size: ${(p) => p.theme.footer.mobile.icon.size};
    &:not(:first-child) {
      margin-left: ${(p) => p.theme.footer.mobile.icon.marginLeft};
    }
  }
`;
const CreditLogoContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
const Credit = styled.p`
  font-size: 9px;
`;
const CreditLink = styled.a`
  color: inherit !important;
  font-weight: 700;
  line-height: 1.5;
`;
const Logo = styled.img`
  margin-left: 1em;
  width: ${(p) => p.theme.footer.logo.size};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    margin-left: 0.7em;
  }
`;

const Footer = ({
  logoUrl,
  logoAlt,
  email,
  phone,
  facebook,
  logoCredits,
  imageCredits,
}: IFooterContent): ReactElement => (
  <StyledFooter>
    <IconsContainer>
      <LinkIcon href={`mailto::${email}`}>
        <Icon name="email" alt="correo" />
      </LinkIcon>
      <LinkIcon href={`tel:${phone}`}>
        <Icon name="phone" alt="teléfono" />
      </LinkIcon>
      <LinkIcon href={facebook} target="_blank">
        <Icon name="facebook" alt="facebook" />
      </LinkIcon>
    </IconsContainer>
    <CreditLogoContainer>
      <CreditsContainer>
        <Credit>
          Iconografía de &nbsp;
          <CreditLink href={logoCredits} target="_blank">
            Flaticon
          </CreditLink>
        </Credit>
        <Credit>
          Fotografrías de &nbsp;
          <CreditLink href={imageCredits} target="_blank">
            Unsplash
          </CreditLink>
        </Credit>
      </CreditsContainer>
      <Logo src={logoUrl} alt={logoAlt} />
    </CreditLogoContainer>
  </StyledFooter>
);

export default Footer;
