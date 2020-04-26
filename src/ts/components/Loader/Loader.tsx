import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'theme/defaultTheme';

interface ILoader {
  size: 'small' | 'medium' | 'large';
  color: string;
}

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span<ILoader>`
  width: ${(p) => p.theme.loader[p.size].size};
  height: ${(p) => p.theme.loader[p.size].size};
  border-radius: ${(p) => p.theme.loader[p.size].size};
  display: block;
  border: calc(${(p) => p.theme.loader[p.size].size} / 5) solid transparent;
  border-top-color: ${(p) => p.color};
  animation: ${rotate} 1s linear infinite;
`;

const Loader = ({ size, color }: ILoader): ReactElement => <Spinner size={size} color={color} />;

Loader.defaultProps = {
  size: 'medium',
  color: colors.secondary.base,
};

export default Loader;
