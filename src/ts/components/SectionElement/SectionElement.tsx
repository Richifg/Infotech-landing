import React, { ReactElement } from 'react';
import { ISectionElement } from 'interfaces';

import SectionTitle from 'components/SectionTitle';
import SectionParagraph from 'components/SectionParagraph';
import SectionImage from 'components/SectionImage';
import CardsCarousel from 'components/CardsCarousel';
import ContactForm from 'components/ContactForm';
import IconList from 'components/IconList';

const SectionElement = ({
  type,
  text,
  variants,
  url,
  alt,
  cards,
  icons,
  formSections,
}: ISectionElement): ReactElement => {
  let Element = null;
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
    case 'icon-list':
      Element = <IconList icons={icons} />;
      break;
    case 'contact-form':
      Element = <ContactForm sections={formSections} />;
      break;
    default:
      console.log(`WARNING: uknown element type: ${type}. Retuning null...`);
  }

  return Element;
};

export default SectionElement;
