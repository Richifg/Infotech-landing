import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<Pick<IContentContainer, 'color'>>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.color};
`;

const Content = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.layout.root.maxWidth};
`;

interface IContentContainer {
  children: ReactNode;
  color?: string;
}

const ContentContainer = ({ children, color }: IContentContainer): ReactElement => (
  <Container color={color}>
    <Content>{children}</Content>
  </Container>
);

ContentContainer.defaultProps = {
  color: 'transparent',
};

export default ContentContainer;
