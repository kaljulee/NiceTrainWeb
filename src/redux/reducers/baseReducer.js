import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations } from '../../graphql/queries';

const initialState = { loading: 'idle', stations: [] };

export const fetchStations = createAsyncThunk('stations/fetch', async () => {
  const response = await API.graphql(graphqlOperation(listStations));
  console.log('response');
  console.log(response.data.listStations.items);
  return response.data;
});

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    stationsLoading(state, action) {
      if (state.loading === 'idle') {
        // eslint-disable-next-line no-param-reassign
        state.loading = 'pending';
      }
    },
    stationsReceived: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStations.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.stations = action.payload.listStations.items;
    });
  }
});

export const { stationsLoading, stationsReceived } = baseSlice.actions;

export default baseSlice.reducer;
