import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { IMessages } from 'interfaces';
import { TAsyncState } from 'interfaces/types';

import Typography from 'components/Typography';
import Iconbutton from 'components/IconButton';
import Loader from 'components/Loader';
import Icon from 'components/Icon/Icon';
import { colors } from 'theme/defaultTheme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.message.root.backgroundColor};
  padding: ${(p) => p.theme.message.root.padding};
  box-sizing: border-box;
  z-index: 2;
`;

const slideUp = keyframes`
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Content = styled.div`
  color: ${(p) => p.theme.message.content.color};
  background-color: ${(p) => p.theme.message.content.backgroundColor};
  border-radius: ${(p) => p.theme.message.content.borderRadius};
  padding: ${(p) => p.theme.message.content.padding};
  position: relative;
  opacity: 0;
  transform: translateY(50%);
  animation: ${slideUp} 0.2s ease-out forwards;
`;

const ButtonContainer = styled.div`
  position: absolute;
  color: ${(p) => p.theme.message.closeButton.color};
  top: ${(p) => p.theme.message.closeButton.position};
  right: ${(p) => p.theme.message.closeButton.position};
`;

const pop = keyframes`
  90% { transform: scale(1.5)}
  100% { transform: scale(1)}
`;

const IconContainer = styled.div<Pick<IMessage, 'state'>>`
  display: flex;
  justify-content: center;
  font-size: ${(p) => p.theme.message.icon.fontSize};
  margin-bottom: ${(p) => p.theme.message.icon.marginBotton};
  transform: scale(0);
  animation: ${pop} 0.2s ease-out forwards;
  color: ${(p) => {
    if (p.state === 'ERROR') return colors.alert.base;
    if (p.state === 'SUCCESS') return colors.success.base;
    return colors.black.base;
  }};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.message.icon.marginBotton};
`;

interface IMessage {
  state: TAsyncState;
  messages?: IMessages;
  onClose(): void;
}

const Dialog = ({ state, messages, onClose }: IMessage): ReactElement => (
  <Container>
    <Content>
      {state !== 'LOADING' && (
        <ButtonContainer>
          <Iconbutton name="x" onClick={onClose} />
        </ButtonContainer>
      )}
      {state === 'LOADING' && (
        <>
          <LoaderContainer>
            <Loader size="large" />
          </LoaderContainer>
          <Typography type="headline3">{messages.loading.title}</Typography>
          <Typography type="body1">{messages.loading.text}</Typography>
        </>
      )}
      {state === 'ERROR' && (
        <>
          <IconContainer state={state}>
            <Icon name="alert" />
          </IconContainer>
          <Typography type="headline3">{messages.error.title}</Typography>
          <Typography type="body1">{messages.error.text}</Typography>
        </>
      )}
      {state === 'SUCCESS' && (
        <>
          <IconContainer state={state}>
            <Icon name="check" />
          </IconContainer>
          <Typography type="headline3">{messages.success.title}</Typography>
          <Typography type="body1">{messages.success.text}</Typography>
        </>
      )}
    </Content>
  </Container>
);

Dialog.defaultProps = {
  messages: {
    success: { title: 'SUCCESS', text: '' },
    error: { title: 'ERROR', text: '' },
    loading: { title: 'LOADING', text: '' },
  },
};

export default Dialog;
