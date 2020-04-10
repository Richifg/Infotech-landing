import React, { ReactElement } from 'react';
import Typography from 'components/Typography';

interface ISectionTitle {
  text: string;
}

const SectionTitle = ({ text }: ISectionTitle): ReactElement => (
  <Typography tag="h2" type="headline3">
    {text}
  </Typography>
);

export default SectionTitle;
