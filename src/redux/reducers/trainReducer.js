/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  callUpdateStation,
  callCreateStation,
  callListStations,
  callDeleteStation
} from '../thunks/station';
import {
  callCreateYouTubeResource,
  callDeleteYouTubeResource,
  callListYouTubeResources,
  callUpdateYouTubeResource
} from '../thunks/youTubeResource';
import {
  callCreateActivity,
  callDeleteActivity,
  callUpdateActivity,
  callListActivities
} from '../thunks/activity';
import {
  callListScheduledTrains,
  callCreateScheduledTrain,
  callUpdateScheduledTrain,
  callDeleteScheduledTrain
} from '../thunks/scheduledTrain';
import {
  callListFormats,
  callCreateFormat,
  callUpdateFormat,
  callDeleteFormat
} from '../thunks/format';
import {
  callCreateScheduledActivity,
  callDeleteScheduledActivity,
  callGetScheduledActivitiesByTrain,
  callListScheduledActivities,
  callUpdateScheduledActivity
} from '../thunks/scheduledActivity';
import {
  callListLongMessages,
  callCreateLongMessage,
  callDeleteLongMessage,
  callUpdateLongMessage
} from '../thunks/longMessage';
import { sortByOrder } from '../../utils';

const initialState = {
  stationsLoading: 'idle',
  youTubeResourcesLoading: 'idle',
  stations: [],
  youTubeResources: [],
  activities: [],
  formats: [],
  scheduledTrains: [],
  scheduledActivities: {},
  longMessages: undefined
};

function findIndexByID(items, id) {
  return items.findIndex((v) => v.id === id);
}

function isValidIndex(index) {
  return index !== -1;
}

function removeByID(items, id) {
  return items.reduce((acc, i) => {
    if (i.id !== id) {
      acc.push(i);
    }
    return acc;
  }, []);
}

export const trainSlice = createSlice({
  name: 'train',
  initialState,
  reducers: {
    stationsLoading(state) {
      if (state.stationsLoading === 'idle') {
        state.stationsLoading = 'pending';
      }
    },
    stationsReceived: (state) => {
      state.stationsLoading = 'idle';
    },
    youTubeResourcesLoading(state) {
      if (state.youTubeResourcesLoading === 'idle') {
        state.youTubeResourcesLoading = 'pending';
      }
    },
    youTubeResourcesReceived: (state) => {
      state.youTubeResourcesLoading = 'idle';
    }
  },
  extraReducers: (builder) => {
    // station calls
    builder
      .addCase(callListStations.fulfilled, (state, action) => {
        state.stations = action.payload.listStations.items;
      })
      .addCase(callCreateStation.fulfilled, (state, action) => {
        const newStation = action.payload.createStation;
        state.stations.push(newStation);
      })
      .addCase(callUpdateStation.fulfilled, (state, action) => {
        const updatedStationData = action.payload.updateStation;
        const index = state.stations.findIndex(
          (s) => s.id === updatedStationData.id
        );
        if (index !== -1) {
          state.stations[index] = updatedStationData;
        }
      })
      .addCase(callDeleteStation.fulfilled, (state, action) => {
        if (action.payload.data.deleteStation) {
          const deletedStationData = action.payload.data.deleteStation;
          const index = state.stations.findIndex(
            (s) => s.id === deletedStationData.id
          );
          if (index !== -1) {
            state.stations = state.stations.reduce((acc, s) => {
              if (s.id !== deletedStationData.id) {
                acc.push(s);
              }
              return acc;
            }, []);
          }
        } else {
          console.err('station delete resulted in null');
        }
      })
      // YTR calls
      .addCase(callListYouTubeResources.fulfilled, (state, action) => {
        state.youTubeResources = action.payload.listYouTubeResources.items;
      })
      .addCase(callUpdateYouTubeResource.fulfilled, (state, action) => {
        const updatedYTR = action.payload.updateYouTubeResource;
        const index = state.youTubeResources.findIndex(
          (ytr) => ytr.id === updatedYTR.id
        );
        if (index !== -1) {
          state.youTubeResources[index] = updatedYTR;
        }
      })
      .addCase(callCreateYouTubeResource.fulfilled, (state, action) => {
        const newYTR = action.payload.createYouTubeResource;
        state.youTubeResources.push(newYTR);
      })
      .addCase(callDeleteYouTubeResource.fulfilled, (state, action) => {
        const deletedYTR = action.payload.data.deleteYouTubeResource;
        const index = state.youTubeResources.findIndex(
          (ytr) => ytr.id === deletedYTR.id
        );
        if (index !== -1) {
          state.youTubeResources = state.youTubeResources.reduce((acc, ytr) => {
            if (ytr.id !== deletedYTR.id) {
              acc.push(ytr);
            }
            return acc;
          }, []);
        }
      })
      // activity calls
      .addCase(callListActivities.fulfilled, (state, action) => {
        state.activities = action.payload.listActivities.items;
      })
      .addCase(callCreateActivity.fulfilled, (state, action) => {
        state.activities.push(action.payload.createActivity);
      })
      .addCase(callUpdateActivity.fulfilled, (state, action) => {
        const updatedActivity = action.payload.updateActivity;
        const index = findIndexByID(state.activities, updatedActivity.id);
        if (index !== -1) {
          state.activities[index] = updatedActivity;
        }
      })
      .addCase(callDeleteActivity.fulfilled, (state, action) => {
        const deletedActivity = action.payload.data.deleteActivity;
        const index = findIndexByID(state.activities, deletedActivity.id);
        if (isValidIndex(index)) {
          state.activities = removeByID(state.activities, deletedActivity.id);
        }
      })
      // scheduled train calls
      .addCase(callListScheduledTrains.fulfilled, (state, action) => {
        state.scheduledTrains = action.payload.listScheduledTrains.items;
      })
      .addCase(callCreateScheduledTrain.fulfilled, (state, action) => {
        state.scheduledTrains.push(action.payload.createScheduledTrain);
      })
      .addCase(callUpdateScheduledTrain.fulfilled, (state, action) => {
        const updatedScheduledTrain = action.payload.updateScheduledTrain;
        const index = findIndexByID(state.activities, updatedScheduledTrain.id);
        if (index !== -1) {
          state.scheduledTrains[index] = updatedScheduledTrain;
        }
      })
      .addCase(callDeleteScheduledTrain.fulfilled, (state, action) => {
        const deletedScheduledTrain = action.payload.data.deleteScheduledTrain;
        const index = findIndexByID(
          state.scheduledTrains,
          deletedScheduledTrain.id
        );
        if (isValidIndex(index)) {
          state.scheduledTrains = removeByID(
            state.scheduledTrains,
            deletedScheduledTrain.id
          );
        }
      })
      // format calls
      .addCase(callListFormats.fulfilled, (state, action) => {
        state.formats = action.payload.listFormats.items;
      })
      .addCase(callCreateFormat.fulfilled, (state, action) => {
        state.formats.push(action.payload.createFormat);
      })
      .addCase(callUpdateFormat.fulfilled, (state, action) => {
        const updatedFormat = action.payload.updateFormat;
        const index = findIndexByID(state.formats, updatedFormat.id);
        if (index !== -1) {
          state.formats[index] = updatedFormat;
        }
      })
      .addCase(callDeleteFormat.fulfilled, (state, action) => {
        const deletedFormat = action.payload.data.deleteFormat;
        const index = findIndexByID(state.formats, deletedFormat.id);
        if (isValidIndex(index)) {
          state.formats = removeByID(state.formats, deletedFormat.id);
        }
      })
      // scheduledActivity calls
      .addCase(callListScheduledActivities.fulfilled, (state, action) => {
        const newActivities = action.payload.listScheduledActivities.items;
        newActivities.forEach((a) => {
          const trainID = a.scheduledTrainID;
          if (!state.scheduledActivities[trainID]) {
            state.scheduledActivities[trainID] = [];
          }
          state.scheduledActivities[trainID].push(a);
        });
        Object.keys(state.scheduledActivities).forEach((key) =>
          sortByOrder(state.scheduledActivities[key])
        );
      })
      .addCase(callGetScheduledActivitiesByTrain.fulfilled, (state, action) => {
        const {
          meta,
          payload: {
            listScheduledActivities: { items }
          }
        } = action;
        const trainID = meta.arg;
        state.scheduledActivities[trainID] = items;
        sortByOrder(state.scheduledActivities[trainID]);
      })
      .addCase(callCreateScheduledActivity.fulfilled, (state, action) => {
        const newSA = action.payload.createScheduledActivity;
        if (!state.scheduledActivities[newSA.scheduledTrainID]) {
          state.scheduledActivities[newSA.scheduledTrainID] = [];
        }
        // newly created should always have largest order field
        state.scheduledActivities[newSA.scheduledTrainID].push(newSA);
      })
      .addCase(callUpdateScheduledActivity.fulfilled, (state, action) => {
        const updatedScheduledActivity = action.payload.updateScheduledActivity;
        const trainID = updatedScheduledActivity.scheduledTrainID;
        const index = findIndexByID(
          state.scheduledActivities[trainID],
          updatedScheduledActivity.id
        );
        if (index !== -1) {
          state.scheduledActivities[trainID][index] = updatedScheduledActivity;
          sortByOrder(state.scheduledActivities[trainID]);
        }
      })
      .addCase(callDeleteScheduledActivity.fulfilled, (state, action) => {
        const deletedScheduledActivity =
          action.payload.data.deleteScheduledActivity;
        const trainID = deletedScheduledActivity.scheduledTrainID;
        const index = findIndexByID(
          state.scheduledActivities[trainID],
          deletedScheduledActivity.id
        );
        if (isValidIndex(index)) {
          state.scheduledActivities[trainID] = removeByID(
            state.scheduledActivities[trainID],
            deletedScheduledActivity.id
          );
        }
      })
      // long message calls
      .addCase(callListLongMessages.fulfilled, (state, action) => {
        state.longMessages = action.payload.listLongMessages.items;
      })
      .addCase(callCreateLongMessage.fulfilled, (state, action) => {
        const newLongMessage = action.payload.createLongMessage;
        if (!state.longMessages) {
          console.err('something went wrong, no long messages present');
          state.longMessages = [];
        }
        state.longMessages.push(newLongMessage);
      })
      .addCase(callUpdateLongMessage.fulfilled, (state, action) => {
        const updatedLongMessageData = action.payload.updateLongMessage;
        const index = state.longMessages.findIndex(
          (s) => s.id === updatedLongMessageData.id
        );
        if (index !== -1) {
          state.longMessages[index] = updatedLongMessageData;
        }
      })
      .addCase(callDeleteLongMessage.fulfilled, (state, action) => {
        const deletedLongMessageData = action.payload.data.deleteLongMessage;
        console.log('delete id');
        console.log(deletedLongMessageData.id);
        const index = state.longMessages.findIndex(
          (s) => s.id === deletedLongMessageData.id
        );
        console.log('delete index');
        console.log(index);
        if (index !== -1) {
          console.log('going to delete');
          state.longMessages = state.longMessages.reduce((acc, s) => {
            if (s.id !== deletedLongMessageData.id) {
              acc.push(s);
            }
            return acc;
          }, []);
        }
      })
      .addDefaultCase((state, action) => {});
  }
});

export const {
  stationsLoading,
  stationsReceived,
  youTubeResourcesLoading,
  youTubeResourcesReceived
} = trainSlice.actions;

export default trainSlice.reducer;
