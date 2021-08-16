import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations } from '../../graphql/queries';
import {
  createStation,
  updateStation,
  deleteStation
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListStations = createAsyncThunk('stations/fetch', async () => {
  const response = await API.graphql({
    query: listStations,
    authMode: apiKey
  });
  return response.data;
});

export const callCreateStation = createAsyncThunk(
  'stations/create',
  async (data) => {
    // const newStation = { name: 'faker station', abbrev: 'FAKR' };
    const response = await API.graphql(
      graphqlOperation(createStation, { input: data })
    );
    return response.data;
  }
);

export const callUpdateStation = createAsyncThunk(
  'stations/update',
  async (data) => {
    const updatedStationData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedStationData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateStation, { input: updatedStationData })
    );
    return response.data;
  }
);

export const callDeleteStation = createAsyncThunk(
  'stations/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteStation, { input: data })
    );
    return response;
  }
);
