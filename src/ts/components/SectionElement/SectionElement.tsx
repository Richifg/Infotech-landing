import React, { ReactElement } from 'react';
import { ISectionElement } from 'interfaces';
import SectionTitle from './SectionTitle';
import SectionParagraph from './SectionParagraph';
import SectionImage from './SectionImage';

const SectionElement = ({ type, text, variant, url, alt }: ISectionElement): ReactElement => {
  let Element = null;
  switch (type) {
    case 'title':
      Element = <SectionTitle text={text} />;
      break;
    case 'paragraph':
      Element = <SectionParagraph text={text} />;
      break;
    case 'image':
      Element = <SectionImage url={url} alt={alt} />;
      break;
    default:
      Element = null;
  }

  return Element;
};

export default SectionElement;
