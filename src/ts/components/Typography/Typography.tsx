import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span';
type Type =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button';

interface ITypo {
  type: Type;
  color?: string;
  style?: CSSProperties;
}

const Typo = styled.p<ITypo>`
  font-size: ${(p) => p.theme.typography[p.type].fontSize};
  font-weight: ${(p) => p.theme.typography[p.type].fontWeight};
  line-height: ${(p) => p.theme.typography[p.type].lineHeight};
  letter-spacing: ${(p) => p.theme.typography[p.type].letterSpacing};
  text-transform: ${(p) => p.theme.typography[p.type].textTransform};
  color: ${(p) => (p.color ? p.color : 'inherit')};
`;

interface ITypography extends ITypo {
  tag?: Tag;
  children: string;
}

const Typography = ({ tag, type, color, children, style }: ITypography): React.ReactElement => (
  <Typo
    as={tag}
    type={type}
    color={color}
    style={style}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

Typography.defaultProps = {
  color: '',
  tag: 'p',
};

export default Typography;
