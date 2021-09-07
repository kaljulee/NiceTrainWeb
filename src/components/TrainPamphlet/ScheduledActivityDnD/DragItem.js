import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import {
  createOption,
  getCurrentOption,
  hmsToDisplay,
  hmsToSeconds,
  secondsToHMS
} from '../../../utils';
import {
  callDeleteScheduledActivity,
  callUpdateScheduledActivity
} from '../../../redux/thunks/scheduledActivity';
import { NTColumn, NTRow } from '../../layoutComponents';
import {
  PamphletDurationButton,
  PamphletInput,
  PamphletLabel,
  DeleteButton
} from '../trainPamphlet';
import AdminSelect from '../../Admin/AdminSelect';
import { mq5 } from '../../../styles/breakpoints';
import { stringIsOk } from '../../../redux/validators';

function customStyler(theme) {
  return {
    option: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    singleValue: (provided) => ({
      background: theme.background,
      color: theme.onBackground
      // whiteSpace: 'nowrap'
    }),
    container: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background,
      width: 'inherit'
    }),
    input: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background,
      display: 'none'
    }),
    control: (provided, selectState) => ({
      ...provided,
      color: theme.onBackground,
      boxShadow: 0,
      backgroundColor: theme.background,
      border: selectState.isFocused ? '' : 'none',
      borderColor: selectState.isFocused ? theme.accent : 'none', // theme.secondarySurface,
      '&:hover': {
        borderColor: theme.accent
      }
    }),
    indicatorSelector: (provided) => ({
      ...provided,
      color: theme.onBackground
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    menu: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    })
  };
}

const ActivityRow = styled(NTRow)`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 0px 0 5px 0;
  margin: 10px 0;
  border: 5px single ${(p) => p.theme.primarySurface};
  ${mq5({ flexDirection: ['column', 'column', 'row', 'row', 'row'] })};
`;

function DragItem(props) {
  const { errorToast, activity, openDurationModal } = props;
  const possibleActivities = useSelector((state) => state.train.activities);
  const possibleFormats = useSelector((state) => state.train.formats);

  const dispatch = useDispatch();
  const theme = useTheme();
  const customStyles = customStyler(theme);

  const [currentActivityOption, setCurrentActivityOption] = useState(
    getCurrentOption(possibleActivities, activity.activityID, 'name')
  );
  const [currentFormatOption, setCurrentFormatOption] = useState(
    getCurrentOption(possibleFormats, activity.formatID, 'name')
  );
  const [hmsValue, setHMSValue] = useState(
    Number.isNaN(activity.duration)
      ? { h: 0, m: 0, s: 0 }
      : secondsToHMS(activity.duration)
  );
  const [nameValue, setNameValue] = useState(activity.name);

  useEffect(() => {
    setHMSValue(
      Number.isNaN(activity.duration)
        ? { h: 0, m: 0, s: 0 }
        : secondsToHMS(activity.duration)
    );
    setNameValue(activity.name);
  }, [activity]);

  function saveName() {
    if (!stringIsOk(nameValue)) {
      errorToast('bad name');
      return;
    }
    dispatch(callUpdateScheduledActivity({ id: activity.id, name: nameValue }));
  }

  function saveActivity(newActivity) {
    if (!newActivity.value) {
      errorToast('bad activity- no value');
      return;
    }
    setCurrentActivityOption(newActivity);
    dispatch(
      callUpdateScheduledActivity({
        id: activity.id,
        activityID: newActivity.value
      })
    );
  }

  function saveFormat(newFormat) {
    if (!newFormat.value) {
      errorToast('bad format- no value');
      return;
    }
    setCurrentFormatOption(newFormat);
    dispatch(
      callUpdateScheduledActivity({
        id: activity.id,
        formatID: newFormat.value
      })
    );
  }

  function deleteScheduledActivity() {
    dispatch(callDeleteScheduledActivity({ id: activity.id }));
  }
  const activtyOptions = possibleActivities.map((a) => createOption(a, 'name'));
  const formatOptions = possibleFormats.map((f) => createOption(f, 'name'));
  return (
    <Draggable draggableId={activity.id} index={activity.order}>
      {(provided) => (
        <ActivityRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <NTColumn $flex={2}>
            <PamphletLabel>Name</PamphletLabel>
            <PamphletInput
              onBlur={saveName}
              value={nameValue}
              onChange={(event) => setNameValue(event.target.value)}
            />
          </NTColumn>
          <NTColumn $flex={3} style={{ justifyContent: 'flex-start' }}>
            <PamphletLabel>Activity</PamphletLabel>
            <AdminSelect
              customStyles={customStyles}
              options={activtyOptions}
              value={currentActivityOption}
              onChange={saveActivity}
            />
          </NTColumn>
          <NTColumn $flex={3}>
            <PamphletLabel>Format</PamphletLabel>
            <AdminSelect
              customStyles={customStyles}
              options={formatOptions}
              value={currentFormatOption}
              onChange={saveFormat}
            />
          </NTColumn>
          <NTColumn $flex={2}>
            <PamphletLabel>Duration</PamphletLabel>
            <PamphletDurationButton
              onClick={() => openDurationModal(activity.id)}
            >
              {hmsToDisplay(hmsValue)}
            </PamphletDurationButton>
          </NTColumn>
          <NTColumn $flex={1} style={{ justifyContent: 'space-around' }}>
            <DeleteButton type="submit" onClick={deleteScheduledActivity}>
              delete
            </DeleteButton>
          </NTColumn>
        </ActivityRow>
      )}
    </Draggable>
  );
}

export default DragItem;
