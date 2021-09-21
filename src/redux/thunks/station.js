import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations } from '../../graphql/queries';
import {
  createStation,
  updateStation,
  deleteStation
} from '../../graphql/mutations';
import { apiKey } from '../../constants';
import { allowAPICall, containsChanges } from '../validators';

export const callListStations = createAsyncThunk('stations/fetch', async () => {
  const response = await API.graphql({
    query: listStations,
    authMode: apiKey
  });
  return response.data;
});

export const callCreateStation = createAsyncThunk(
  'stations/create',
  async (data, { getState, rejectWithValue }) => {
    // const newStation = { name: 'faker station', abbrev: 'FAKR' };
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(createStation, { input: data })
    );
    return response.data;
  }
);

export const callUpdateStation = createAsyncThunk(
  'stations/update',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const updatedStationData = {};
    const original = getState().train.stations.find((s) => s.id === data.id);
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedStationData[k] = data[k];
      }
    });
    if (containsChanges(updatedStationData, original)) {
      const response = await API.graphql(
        graphqlOperation(updateStation, { input: updatedStationData })
      );
      return response.data;
    }
    return rejectWithValue();
  }
);

export const callDeleteStation = createAsyncThunk(
  'stations/delete',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(deleteStation, { input: data })
    );
    return response;
  }
);
