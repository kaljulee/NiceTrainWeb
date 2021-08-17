import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const initialState = {
  stationsLoading: 'idle',
  youTubeResourcesLoading: 'idle',
  stations: [],
  youTubeResources: []
};

export const trainSlice = createSlice({
  name: 'train',
  initialState,
  reducers: {
    stationsLoading(state, action) {
      if (state.stationsLoading === 'idle') {
        // eslint-disable-next-line no-param-reassign
        state.stationsLoading = 'pending';
      }
    },
    stationsReceived: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.stationsLoading = 'idle';
    },
    youTubeResourcesLoading(state, action) {
      if (state.youTubeResourcesLoading === 'idle') {
        // eslint-disable-next-line no-param-reassign
        state.youTubeResourcesLoading = 'pending';
      }
    },
    youTubeResourcesReceived: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.youTubeResourcesLoading = 'idle';
    }
  },
  extraReducers: (builder) => {
    // station calls
    builder
      .addCase(callListStations.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
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
          // eslint-disable-next-line no-param-reassign
          state.stations[index] = updatedStationData;
        }
      })
      .addCase(callDeleteStation.fulfilled, (state, action) => {
        const deletedStationData = action.payload.data.deleteStation;
        const index = state.stations.findIndex(
          (s) => s.id === deletedStationData.id
        );
        if (index !== -1) {
          // eslint-disable-next-line no-param-reassign
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
        // eslint-disable-next-line no-param-reassign
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
          // eslint-disable-next-line no-param-reassign
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
          // eslint-disable-next-line no-param-reassign
          state.youTubeResources = state.youTubeResources.reduce((acc, ytr) => {
            if (ytr.id !== deletedYTR.id) {
              acc.push(ytr);
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
