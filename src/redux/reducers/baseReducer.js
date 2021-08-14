import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listStations, listYouTubeResources } from '../../graphql/queries';

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
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    return response.data;
  }
);

export const fetchStations = createAsyncThunk('stations/fetch', async () => {
  const response = await API.graphql(graphqlOperation(listStations));
  console.log('list stations response');
  console.log(response);
  return response.data;
});

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
      console.log('yt res action');
      console.log(action);
      // eslint-disable-next-line no-param-reassign
      state.youtube = action.payload.listYouTubeResources.items;
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
