import { createSelector } from '@reduxjs/toolkit';

const trainSelector = (state) => state.train.scheduledTrains;
const stationSelector = (state) => state.train.stations;

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
      return {
        date: train_date,
        time,
        station: station ? station.abbrev : '',
        status,
        groundTag,
        standingTag
      };
    })
);
