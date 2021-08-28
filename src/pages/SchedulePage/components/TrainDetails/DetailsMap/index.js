import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { useTheme } from '@emotion/react';
import { NTRow } from '../../../../../components/layoutComponents';

const lineHeight = '3vh';
const dotSize = '3vh';
const dotDrop = '3.1vh';

const MapWrapper = styled.div`
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  margin: 10%;
`;

const MapLine = styled.div`
  height: ${lineHeight};
  background: ${(p) => p.theme.primarySurface};
  border: 0.2vh solid ${(p) => p.theme.primarySurface};
`;

const RotatedButton = styled.button`
  color: ${(p) => p.theme.onBackground};
  background: ${(p) => p.theme.background};
  font-family: helvetica;
  display: inline-block;
  font-weight: bold;
  border: none;
  font-size: 2vh;
  transform-origin: top left;
  transform: rotate(-45deg);
`;

function ActivityTick(props) {
  const {
    activity: { id, name },
    onActivityClick
  } = props;
  const theme = useTheme();
  if (!name || name.length === 0) {
    return <div />;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 5px' }}>
      <RotatedButton type="button" onClick={() => onActivityClick(id)}>
        {name}
      </RotatedButton>
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          height: dotSize,
          width: dotSize,
          // top: dotDrop,
          // position: 'relative',
          color: theme.onPrimarySurface
        }}
      />
    </div>
  );
}

function DetailsMap(props) {
  const { activities, onActivityClick } = props;
  console.log('dm acts');
  console.table(activities);
  console.log('...');
  return (
    <MapWrapper>
      <NTRow style={{ padding: '0 2vw', position: 'relative', top: dotDrop }}>
        {activities.map((a) => (
          <ActivityTick
            key={a.id}
            activity={a}
            onActivityClick={onActivityClick}
          />
        ))}
      </NTRow>
      <MapLine />
    </MapWrapper>
  );
}

DetailsMap.defaultProps = { activities: [] };

export default DetailsMap;
