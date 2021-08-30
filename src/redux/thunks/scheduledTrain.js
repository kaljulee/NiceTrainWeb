import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listScheduledTrains } from '../../graphql/queries';
import {
  createScheduledTrain,
  updateScheduledTrain,
  deleteScheduledTrain
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListScheduledTrains = createAsyncThunk(
  'scheduledTrains/fetch',
  async () => {
    const response = await API.graphql({
      query: listScheduledTrains,
      authMode: apiKey
    });
    return response.data;
  }
);

export const callCreateScheduledTrain = createAsyncThunk(
  'scheduledTrains/create',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(createScheduledTrain, { input: data })
    );
    return response.data;
  }
);

export const callUpdateScheduledTrain = createAsyncThunk(
  'scheduledTrains/update',
  async (data) => {
    const updatedScheduledTrainData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedScheduledTrainData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateScheduledTrain, {
        input: updatedScheduledTrainData
      })
    );
    return response.data;
  }
);

export const callDeleteScheduledTrain = createAsyncThunk(
  'scheduledTrains/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteScheduledTrain, { input: data })
    );
    return response;
  }
);
