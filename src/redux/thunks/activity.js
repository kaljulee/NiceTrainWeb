import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listActivities } from '../../graphql/queries';
import {
  createActivity,
  updateActivity,
  deleteActivity
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListActivities = createAsyncThunk(
  'activities/fetch',
  async () => {
    const response = await API.graphql({
      query: listActivities,
      authMode: apiKey
    });
    return response.data;
  }
);

export const callCreateActivity = createAsyncThunk(
  'activities/create',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(createActivity, { input: data })
    );
    return response.data;
  }
);

export const callUpdateActivity = createAsyncThunk(
  'activities/update',
  async (data) => {
    const updatedActivityData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedActivityData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateActivity, { input: updatedActivityData })
    );
    return response.data;
  }
);

export const callDeleteActivity = createAsyncThunk(
  'activities/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteActivity, { input: data })
    );
    return response;
  }
);
