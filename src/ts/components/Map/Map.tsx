import React, { ReactElement, CSSProperties } from 'react';
import styled from 'styled-components';
import { IMarker } from 'interfaces';
import Typography from 'components/Typography';

const mapPath = require('../../../assets/images/map.svg').default;
const markerPath = require('../../../assets/images/marker.svg').default;

interface IMap {
  markers: IMarker[];
  column: number;
}

// many styles are not in theme because they depend on map size & ratio
// gotta be tweaked for each specific map
const MapOuterContainer = styled.div<Pick<IMap, 'column'>>`
  position: absolute;
  width: 50%;
  left: ${(p) => {
    if (p.column === 1) return '25%';
    if (p.column === 2) return '75%';
    return '50%';
  }};
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 700px;

  @media screen and (max-width: ${(p) => p.theme.breakpoint}) {
    position: relative;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.45);
  }
`;

const MapInnerContainer = styled.div`
  align-self: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${(100 * 150) / 164}%;
`;

const MapImage = styled.img`
  width: 100%;
`;

const Tooltip = styled.div`
  border: ${(p) => p.theme.map.tooltip.border};
  border-radius: ${(p) => p.theme.map.tooltip.borderRadius};
  background-color: ${(p) => p.theme.map.tooltip.backgroundColor};
  padding: ${(p) => p.theme.map.tooltip.padding};
  position: absolute;
  bottom: 110%;
  left: 105%;
  transform-origin: left bottom;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.2s ease-in, opacity 0.2s linear;
  z-index: 2;
`;

const Marker = styled.div<Pick<IMarker, 'x' | 'y'>>`
  width: ${(p) => p.theme.map.marker.width};
  position: absolute;
  top: ${({ y }) => y}%;
  left: ${({ x }) => x}%;
  transform: translate(-50%, -100%);
  transition: transform 0.2s ease-out;
  transform-origin: bottom;

  &:hover {
    transform: translate(-50%, -100%) scale(1.1);
    & > ${Tooltip} {
      transform: scale(1);
      opacity: 1;
      transition: transform 0.2s 0.2s ease-out, opacity 0.2s 0.2s linear;
    }
  }
`;

const MarkerImage = styled.img`
  width: 100%;
  transition: transform 0.2s ease-out;
  transform-origin: center bottom;
  position: relative;
  z-index: 1;
`;

const titleStyle: CSSProperties = {
  fontWeight: 700,
};
const textStyle: CSSProperties = {
  whiteSpace: 'nowrap',
};

const Map = ({ markers, column }: IMap): ReactElement => {
  //console.log(mapPath);
  return (
    <MapOuterContainer column={column}>
      <MapInnerContainer>
        <MapImage src={mapPath} alt="Mapa de Costa Rica" />
        {markers.map((marker, index) => (
          <Marker x={marker.x} y={marker.y} key={index}>
            <MarkerImage src={markerPath} />
            <Tooltip>
              <Typography type="subtitle2" style={titleStyle}>
                {marker.title}
              </Typography>
              <Typography type="subtitle2" style={textStyle}>
                {marker.text}
              </Typography>
            </Tooltip>
          </Marker>
        ))}
      </MapInnerContainer>
    </MapOuterContainer>
  );
};

export default Map;
