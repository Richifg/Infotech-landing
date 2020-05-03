import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IStyledI {
  size?: string;
  color?: string;
}

const StyledI = styled.i<IStyledI>`
  color: ${(p) => p.color};
  font-size: ${(p) => p.size};
`;

interface IIcon extends IStyledI {
  name: string;
  alt?: string;
}

const Icon = ({ name, size, color, alt }: IIcon): ReactElement => (
  <StyledI
    className={`icon-${name}`}
    size={size}
    color={color}
    aria-hidden={alt ? 'false' : 'true'}
    title={alt}
  />
);

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

export default Icon;
