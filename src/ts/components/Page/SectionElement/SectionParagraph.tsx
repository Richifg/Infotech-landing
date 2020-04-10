import React, { ReactElement } from 'react';
import Typography from 'components/Typography';

interface ISectionPragraph {
  text: string;
}

const SectionParagraph = ({ text }: ISectionPragraph): ReactElement => (
  <Typography tag="p" type="body1">
    {text}
  </Typography>
);

export default SectionParagraph;
