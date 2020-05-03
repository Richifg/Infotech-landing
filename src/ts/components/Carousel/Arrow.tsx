import styled from 'styled-components';

interface IArrow {
  next?: boolean;
  onClick?(): void;
}

const Arrow = styled.button<IArrow>`
  background-color: ${(p) => p.theme.carousel.arrow.backgroundColor};
  width: ${(p) => p.theme.carousel.arrow.width};
  height: ${(p) => p.theme.carousel.arrow.height};
  position: absolute;
  left: ${(p) => (p.next ? '100%' : '0%')};
  top: 35%;
  transform: ${(p) =>
    p.next ? 'translateY(-50%) rotate(180deg) translateX(-50%)' : 'translate(-150%, -50%)'};
  cursor: pointer;
  border: none;
  opacity: 0.75;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
  }

  &.slick-disabled {
    opacity: 0.25;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18%;
    background-color: ${(p) => p.theme.carousel.arrow.color};
    width: ${(p) => p.theme.carousel.arrow.thickness};
    height: ${(p) => p.theme.carousel.arrow.width};
    transform-origin: bottom center;
    transform: translate(-50%, calc(${(p) => p.theme.carousel.arrow.thickness} / 3)) rotate(40deg);
    opacity: 1 !important;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 18%;
    background-color: ${(p) => p.theme.carousel.arrow.color};
    width: ${(p) => p.theme.carousel.arrow.thickness};
    height: ${(p) => p.theme.carousel.arrow.width};
    transform-origin: bottom center;
    transform: translate(-50%, calc(-${(p) => p.theme.carousel.arrow.thickness} / 3)) rotate(140deg);
  }
`;

Arrow.defaultProps = {
  next: false,
};

export default Arrow;
