import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/defaultTheme';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span';
type Color = 'primary' | 'secondary' | 'white' | 'black';
type Type =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'

interface ITypography {
  tag: Tag;
  type: Type;
  color?: Color;
  children: string;
}

const Typography = ({ tag, type, color, children }: ITypography): React.ReactElement => {
  const Typo = styled[tag]`
    font-size: ${(p) => p.theme.typography[type].fontSize};
    font-weight: ${(p) => p.theme.typography[type].fontWeight};
    line-height: ${(p) => p.theme.typography[type].lineHeight};
    letter-spacing: ${(p) => p.theme.typography[type].letterSpacing};
    text-transform: ${(p) => p.theme.typography[type].textTransform};
    color: ${() => {
      if (color === 'white') return colors.neutral.white;
      if (color === 'black') return colors.neutral.black;
      if (color === 'primary') return colors.primary.normal;
      if (color === 'secondary') return colors.secondary.normal;
    }};
  `;
  return <Typo>{children}</Typo>;
};

Typography.defaultProps = {
  color: 'black',
};

export default Typography;
