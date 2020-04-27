import React, { ReactElement, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import { IIcon } from 'interfaces';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: ${(p) => p.theme.iconList.root.margin};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    margin: ${(p) => p.theme.iconList.mobile.root.margin};
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${(p) => p.theme.iconList.icon.margin};
  color: ${(p) => p.theme.iconList.icon.color};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    margin: ${(p) => p.theme.iconList.mobile.icon.margin};
  }
`;

const CaptionContainer = styled.div`
  text-align: center;
  max-width: ${(p) => p.theme.iconList.caption.maxWidth};
  margin-top: ${(p) => p.theme.iconList.caption.marginTop};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    max-width: ${(p) => p.theme.iconList.mobile.caption.maxWidth};
    margin-top: ${(p) => p.theme.iconList.mobile.caption.marginTop};
  }
`;

const IconContainer = styled.div`
  font-size: ${(p) => p.theme.iconList.icon.maxWidth};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    font-size: ${(p) => p.theme.iconList.mobile.icon.maxWidth};
  }
`;

interface IIconList {
  icons: IIcon[];
}
const IconList = ({ icons }: IIconList): ReactElement => {
  const theme = useContext(ThemeContext);
  return (
    <List>
      {icons.map((icon, index) => (
        <Item key={index}>
          <IconContainer>
            <Icon name={icon.name} />
          </IconContainer>
          <CaptionContainer>
            <Typography type="subtitle1" color={theme.colors.black.light}>
              {icon.caption}
            </Typography>
          </CaptionContainer>
        </Item>
      ))}
    </List>
  );
};

export default IconList;
