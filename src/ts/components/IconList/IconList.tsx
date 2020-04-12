import React, { ReactElement, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Typography from 'components/Typography';
import Icon from 'components/Icon';
import { colors } from 'theme/defaultTheme';
import { IIcon } from 'interfaces';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${(p) => p.theme.iconList.icon.margin};
  color: ${colors.secondary.base};
`;

interface IIconList {
  icons: IIcon[];
}
const IconList = ({ icons }: IIconList): ReactElement => {
  const theme = useContext(ThemeContext);
  const textTheme = theme.iconList.caption;
  return (
    <List>
      {icons.map((icon, index) => (
        <Item key={index}>
          <Icon name={icon.name} size={theme.iconList.icon.maxWidth} />
          <Typography
            type="subtitle1"
            color={colors.black.light}
            style={{ marginTop: textTheme.marginTop, maxWidth: textTheme.maxWidth }}
          >
            {icon.caption}
          </Typography>
        </Item>
      ))}
    </List>
  );
};

export default IconList;
