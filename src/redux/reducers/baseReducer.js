import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations, listYouTubeResources } from '../../graphql/queries';
import { createStation } from '../../graphql/mutations';

const apiKey = 'API_KEY';

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

export const fetchStations = createAsyncThunk('stations/fetch', async () => {
  const response = await API.graphql({
    query: listStations,
    authMode: apiKey
  });
  console.log('list stations response');
  console.log(response);
  return response.data;
});

export const callCreateStation = createAsyncThunk(
  'stations/create',
  async () => {
    const newStation = { name: 'faker station', abbrev: 'FAKR' };
    const response = await API.graphql(
      graphqlOperation(createStation, { input: newStation })
    );
    return response.data;
  }
);

export const baseSlice = createSlice({
  name: 'base',
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
    builder.addCase(fetchStations.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.stations = action.payload.listStations.items;
    });
    builder.addCase(fetchYouTubeResources.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.youtube = action.payload.listYouTubeResources.items;
    });
    builder.addCase(callCreateStation.fulfilled, (state, action) => {
      // todo update stations
      console.log('create fulfilled!');
      console.log(action);
    });
  }
});

export const {
  stationsLoading,
  stationsReceived,
  youTubeResourcesLoading,
  youTubeResourcesReceived
} = baseSlice.actions;

export default baseSlice.reducer;
