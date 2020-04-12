import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ICard } from 'interfaces';
import Card from './Card';
import Carousel from 'components/Carousel';

interface ICardsCarousel {
  cards: ICard[];
}

const CarouselContainer = styled.div`
  width: 100%;
`;

const CardsCarousel = ({ cards }: ICardsCarousel): ReactElement => (
  <CarouselContainer>
    <Carousel>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Carousel>
  </CarouselContainer>
);

export default CardsCarousel;
