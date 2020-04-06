import React from 'react';
import styled from 'styled-components';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span';
type Color = 'primary' | 'secondary' | 'white' | 'black';
type Type =
  | 'headline-1'
  | 'headline-2'
  | 'headline-3'
  | 'headline-4'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'body-1'
  | 'body2'
  | 'button'
  | 'caption';

interface ITypography {
  tag: Tag;
  type: Type;
  color?: Color;
  children: string;
}

const Typography = ({ tag, type, color, children }: ITypography): React.ReactElement => {
  const Typo = styled[tag]`
    font-size: var(--${type}-fnt-size);
    font-weight: var(--${type}-fnt-weight);
    letter-spacing: var(--${type}-fnt-spacing);
    text-transform: var(--${type}-fnt-transform);
    color: var(--clr-${color});
  `;
  return <Typo>{children}</Typo>;
};

Typography.defaultProps = {
  color: 'black',
};

export default Typography;
