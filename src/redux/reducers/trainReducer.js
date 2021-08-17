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

const initialState = {
  stationsLoading: 'idle',
  youTubeResourcesLoading: 'idle',
  stations: [],
  youTubeResources: [],
  activities: []
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
      })
      // YTR calls
      .addCase(callListYouTubeResources.fulfilled, (state, action) => {
        state.youTubeResources = action.payload.listYouTubeResources.items;
      })
      .addCase(callUpdateYouTubeResource.fulfilled, (state, action) => {
        console.log('yt updated');
        console.log(action);
        const updatedYTR = action.payload.updateYouTubeResource;
        const index = state.youTubeResources.findIndex(
          (ytr) => ytr.id === updatedYTR.id
        );
        if (index !== -1) {
          state.youTubeResources[index] = updatedYTR;
        }
      })
      .addCase(callCreateYouTubeResource.fulfilled, (state, action) => {
        console.log('yt create');
        console.log(action);
        const newYTR = action.payload.createYouTubeResource;
        state.youTubeResources.push(newYTR);
      })
      .addCase(callDeleteYouTubeResource.fulfilled, (state, action) => {
        console.log('yt delete');
        console.log(action);
        const deletedYTR = action.payload.payload.deleteYouTubeResource;
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
