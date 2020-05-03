import React, { ReactElement, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ICard } from 'interfaces';
import Card from './Card';
import Carousel from 'components/Carousel';

interface ICardsCarousel {
  cards: ICard[];
}

const CarouselContainer = styled.div`
  width: ${(p) => p.theme.carousel.root.width};
  margin: ${(p) => p.theme.carousel.root.margin};
  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    width: ${(p) => p.theme.carousel.mobile.root.width};
  }
`;

const CardsCarousel = ({ cards }: ICardsCarousel): ReactElement => {
  const theme = useContext(ThemeContext);
  const reponsiveSettings = useMemo(
    () => ({
      responsive: [
        {
          breakpoint: theme.breakpoint,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    [theme],
  );
  return (
    <CarouselContainer>
      <Carousel settings={reponsiveSettings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CardsCarousel;
