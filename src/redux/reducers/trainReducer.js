import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations, listYouTubeResources } from '../../graphql/queries';
import { createStation, updateStation } from '../../graphql/mutations';
import {
  callUpdateStation,
  callCreateStation,
  callListStations
} from '../thunks/station';
import { apiKey } from '../../constants';

const initialState = {
  stationsLoading: 'idle',
  youTubeResourcesLoading: 'idle',
  stations: [],
  youTubeResources: []
};

export const fetchYouTubeResources = createAsyncThunk(
  'youTubeResources/fetch',
  async () => {
    const response = await API.graphql({
      query: listYouTubeResources,
      authMode: apiKey
    });
    return response.data;
  }
);

// export const callListStations = createAsyncThunk('stations/fetch', async () => {
//   const response = await API.graphql({
//     query: listStations,
//     authMode: apiKey
//   });
//   console.log('list stations response');
//   console.log(response);
//   return response.data;
// });
//
// export const callCreateStation = createAsyncThunk(
//   'stations/create',
//   async () => {
//     const newStation = { name: 'faker station', abbrev: 'FAKR' };
//     const response = await API.graphql(
//       graphqlOperation(createStation, { input: newStation })
//     );
//     return response.data;
//   }
// );
//
// export const callUpdateStation = createAsyncThunk(
//   'stations/update',
//   async (data) => {
//     const updatedStationData = {};
//     Object.keys(data).forEach((k) => {
//       if (data[k].length > 0) {
//         updatedStationData[k] = data[k];
//       }
//     });
//     const response = await API.graphql(
//       graphqlOperation(updateStation, { input: updatedStationData })
//     );
//     return response.data;
//   }
// );

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
    builder
      .addCase(callListStations.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.stations = action.payload.listStations.items;
      })
      .addCase(fetchYouTubeResources.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.youtube = action.payload.listYouTubeResources.items;
      })
      .addCase(callCreateStation.fulfilled, (state, action) => {
        // todo update stations
        console.log('create fulfilled!');
        console.log(action);
      })
      // todo data verification
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
