import React, { ReactElement } from 'react';
import { ISectionElement } from 'interfaces';

import SectionTitle from 'components/SectionTitle';
import SectionParagraph from 'components/SectionParagraph';
import SectionImage from 'components/SectionImage';
import CardsCarousel from 'components/CardsCarousel';
import ContactForm from 'components/ContactForm';
import IconList from 'components/IconList';
import Map from 'components/Map';

interface IElement extends ISectionElement {
  column: number;
}

const SectionElement = ({
  type,
  text,
  variants,
  url,
  alt,
  cards,
  icons,
  buttonText,
  formSections,
  messages,
  markers,
  column,
}: IElement): ReactElement => {
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
      Element = <ContactForm sections={formSections} buttonText={buttonText} messages={messages} />;
      break;
    case 'map':
      Element = <Map markers={markers} column={column} />;
    default:
      console.log(`WARNING: unknown element type: ${type}. Retuning null...`);
  }

  return Element;
};

export default SectionElement;
