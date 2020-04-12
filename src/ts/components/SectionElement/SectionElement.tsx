import React, { ReactElement } from 'react';
import { ISectionElement } from 'interfaces';

import SectionTitle from 'components/SectionTitle';
import SectionParagraph from 'components/SectionParagraph';
import SectionImage from 'components/SectionImage';
import CardsCarousel from 'components/CardsCarousel';

const SectionElement = ({
  type,
  text,
  variants,
  url,
  alt,
  cards,
}: ISectionElement): ReactElement => {
  let Element = null;
  console.log(type, text, variants, url, alt);
  switch (type) {
    case 'title':
      Element = <SectionTitle text={text} variants={variants} />;
      break;
    case 'paragraph':
      Element = <SectionParagraph text={text} />;
      break;
    case 'image':
      Element = <SectionImage url={url} alt={alt} />;
      break;
    case 'slider':
      Element = <CardsCarousel cards={cards} />;
      break;
    default:
      Element = null;
  }

  return Element;
};

export default SectionElement;
