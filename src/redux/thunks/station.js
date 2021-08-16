import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listStations } from '../../graphql/queries';
import { createStation, updateStation } from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListStations = createAsyncThunk('stations/fetch', async () => {
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
