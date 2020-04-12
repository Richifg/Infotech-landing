import React, { ReactElement, ReactNode } from 'react';
import Slider from 'react-slick';

import Arrow from './Arrow';

const defaultSettings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <Arrow />,
  nextArrow: <Arrow next />,
};

interface ICoursel {
  settings?: object;
  children: ReactNode;
}

const Carousel = ({ settings, children }: ICoursel): ReactElement => {
  const sliderSettings = { ...defaultSettings, ...settings };
  return <Slider {...sliderSettings}>{children}</Slider>;
};

export default Carousel;
