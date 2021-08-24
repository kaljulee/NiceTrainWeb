import { createSelector } from '@reduxjs/toolkit';
import { checkZero } from '../../utils';
import { SETTING_TYPE } from '../../constants';

const trainSelector = (state) => state.train.scheduledTrains;
const stationSelector = (state) => state.train.stations;
const activeMessageSelector = (state) => state.settings;
const longMessageSelector = (state) => state.train.longMessages;

export const activeMessage = createSelector(
  activeMessageSelector,
  longMessageSelector,
  (settings, messages) => {
    const messageID = settings[SETTING_TYPE.ACTIVE_LONG_MESSAGE];
    const message =
      messages && messageID
        ? messages.find((m) => m.id === messageID)
        : { text: '' };
    return message.text;
  }
);

export const boardTrainInformation = createSelector(
  trainSelector,
  stationSelector,
  (trains, stations) =>
    trains.map((train) => {
      const {
        stationID,
        groundTag,
        standingTag,
        status,
        train_time,
        train_date
      } = train;
      const station = stations.find((s) => s.id === stationID);
      const time = train_time.replace(/[:]/g, '');
      const dates = train_date.split('-');
      const date = `${checkZero(dates[2])}${checkZero(dates[1])}`;
      const formattedTrain = {
        date,
        time,
        station: station ? station.abbrev : 'NONE',
        status,
        groundTag,
        standingTag
      };
      return formattedTrain;
    })
);
