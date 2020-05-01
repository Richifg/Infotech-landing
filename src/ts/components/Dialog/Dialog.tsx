import React, { ReactElement } from 'react';
import { observer, inject } from 'mobx-react';
import styled, { keyframes } from 'styled-components';
import { TAsyncState } from 'interfaces/types';
import { IDialogStore } from 'interfaces';

import Typography from 'components/Typography';
import Iconbutton from 'components/IconButton';
import Loader from 'components/Loader';
import Icon from 'components/Icon/Icon';
import { colors } from 'theme/defaultTheme';

const Background = styled.div`
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
  z-index: 4;
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
  text-align: center;
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

interface IIconContainer {
  state: TAsyncState;
}
const IconContainer = styled.div<IIconContainer>`
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

const Dialog = inject('dialog')(
  observer(
    ({ dialog }: IDialogStore): ReactElement => {
      const { text, title, visible, state } = dialog;
      if (!visible) return null;
      return (
        <Background>
          <Content>
            {!dialog.isLoading() && (
              <ButtonContainer>
                <Iconbutton name="x" onClick={() => (dialog.visible = false)} text="cerrar" />
              </ButtonContainer>
            )}
            {dialog.isLoading() && (
              <LoaderContainer>
                <Loader size="large" />
              </LoaderContainer>
            )}
            {dialog.isFailure() && (
              <IconContainer state={state}>
                <Icon name="alert" />
              </IconContainer>
            )}
            {dialog.isSuccess() && (
              <IconContainer state={state}>
                <Icon name="check" />
              </IconContainer>
            )}
            <Typography type="headline3">{title}</Typography>
            <Typography type="body1">{text}</Typography>
          </Content>
        </Background>
      );
    },
  ),
);

export default Dialog;
