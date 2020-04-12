import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.layout.root.maxWidth};
`;

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer): ReactElement => (
  <ContentContainer>
    <Content>{children}</Content>
  </ContentContainer>
);

export default Container;
