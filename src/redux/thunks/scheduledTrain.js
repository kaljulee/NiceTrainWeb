import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listScheduledTrains } from '../../graphql/queries';
import {
  createScheduledTrain,
  updateScheduledTrain,
  deleteScheduledTrain
} from '../../graphql/mutations';
import { apiKey } from '../../constants';
import { containsChanges } from '../validators';

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
  async (data, { getState, rejectWithValue }) => {
    const updatedScheduledTrainData = {};
    const original = getState().train.scheduledTrains.find(
      (st) => st.id === data.id
    );
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedScheduledTrainData[k] = data[k];
      }
    });
    if (containsChanges(updatedScheduledTrainData, original)) {
      const response = await API.graphql(
        graphqlOperation(updateScheduledTrain, {
          input: updatedScheduledTrainData
        })
      );
      return response.data;
    }
    return rejectWithValue();
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
