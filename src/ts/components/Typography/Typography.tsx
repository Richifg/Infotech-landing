import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span' | 'label';
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
  htmlFor?: string;
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
  children: string | string[];
}

const Typography = ({
  tag,
  type,
  color,
  htmlFor,
  children,
  style,
}: ITypography): React.ReactElement => {
  const textToRender = Array.isArray(children) ? children.join('') : children;
  return (
    <Typo
      as={tag}
      type={type}
      color={color}
      htmlFor={htmlFor}
      style={style}
      dangerouslySetInnerHTML={{ __html: textToRender }}
    />
  );
};

Typography.defaultProps = {
  color: '',
  tag: 'p',
};

export default Typography;
