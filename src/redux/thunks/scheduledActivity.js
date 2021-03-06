import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listScheduledActivities } from '../../graphql/queries';
import {
  createScheduledActivity,
  updateScheduledActivity,
  deleteScheduledActivity
} from '../../graphql/mutations';
import { apiKey } from '../../constants';
import { allowAPICall, containsChanges } from '../validators';
import { flattenScheduledActivites } from '../../utils';

export const callListScheduledActivities = createAsyncThunk(
  'scheduledActivities/fetch',
  async () => {
    const graphqlOptions = {
      query: listScheduledActivities,
      authMode: apiKey
    };
    const response = await API.graphql(graphqlOptions);
    return response.data;
  }
);

export const callGetScheduledActivitiesByTrain = createAsyncThunk(
  'scheduledActivities/byScheduledTrain',
  async (id) => {
    const filter = { scheduledTrainID: { eq: id } };
    const graphqlOptions = {
      query: listScheduledActivities,
      authMode: apiKey,
      variables: { filter }
    };
    const response = await API.graphql(graphqlOptions);
    return response.data;
  }
);

export const callCreateScheduledActivity = createAsyncThunk(
  'scheduledActivities/create',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(createScheduledActivity, { input: data })
    );
    return response.data;
  }
);

export const callUpdateScheduledActivity = createAsyncThunk(
  'scheduledActivities/update',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const state = getState();
    const original = flattenScheduledActivites(
      state.train.scheduledActivities
    ).find((sa) => sa.id === data.id);
    if (containsChanges(data, original)) {
      const response = await API.graphql(
        graphqlOperation(updateScheduledActivity, {
          input: data
        })
      );
      return response.data;
    }
    return rejectWithValue();
  }
);

export const callDeleteScheduledActivity = createAsyncThunk(
  'scheduledActivities/delete',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(deleteScheduledActivity, { input: data })
    );
    return response;
  }
);
