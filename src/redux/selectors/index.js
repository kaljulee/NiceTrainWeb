import { createDraftSafeSelector } from '@reduxjs/toolkit';

// todo this needs to use createSelector
export const boardTrainInformation = (state) => {
  const { scheduledTrains, stations } = state.train;
  return scheduledTrains.map((train) => {
    const {
      stationID,
      groundTag,
      standingTag,
      status,
      train_time,
      train_date
    } = train;
    const station = stations.find((s) => s.id === stationID);
    return {
      date: train_date,
      time: train_time,
      station: station ? station.abbrev : '',
      status,
      groundTag,
      standingTag
    };
  });
};
