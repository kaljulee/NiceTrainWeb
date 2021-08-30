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
  margin: auto 10%;
`;

const MapLine = styled.div`
  height: ${lineHeight};
  background: ${(p) => p.theme.primarySurface};
  border: 0.2vh solid ${(p) => p.theme.primarySurface};
`;

const RotatedText = styled.div`
  color: ${(p) =>
    p.$isActive ? p.theme.onPrimarySurface : p.theme.onBackground};
  background: ${(p) =>
    p.$isActive ? p.theme.primarySurface : p.theme.background};
  font-family: helvetica;
  padding: 0.3vh 2vh;
  display: inline-block;
  font-weight: bold;
  border: none;
  font-size: 2vh;
  transform-origin: top left;
  overflow: hidden;
  transform: rotate(-35deg);
  width: max-content;
`;

function ActivityTick(props) {
  const {
    activity: { id, name },
    onActivityClick,
    activeActivityID
  } = props;
  const theme = useTheme();
  if (!name || name.length === 0) {
    return <div />;
  }

  function handleOnClick() {
    onActivityClick(id);
  }

  const onKeyPress = (e) => {
    const enterOrSpace =
      e.key === 'Enter' ||
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      handleOnClick();
    }
  };

  return (
    <div
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      style={{ display: 'flex', flexDirection: 'column', margin: '0 5px' }}
    >
      <RotatedText $isActive={activeActivityID === id}>{name}</RotatedText>
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          height: dotSize,
          width: dotSize,
          color: theme.onPrimarySurface
        }}
      />
    </div>
  );
}

function DetailsMap(props) {
  const { activities, onActivityClick, activeActivityID } = props;
  return (
    <MapWrapper>
      <NTRow style={{ padding: '0 2vw', position: 'relative', top: dotDrop }}>
        {activities.map((a) => (
          <ActivityTick
            key={a.id}
            activity={a}
            activeActivityID={activeActivityID}
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
