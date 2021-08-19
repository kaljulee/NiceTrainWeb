import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listScheduledActivities } from '../../graphql/queries';
import {
  createScheduledActivity,
  updateScheduledActivity,
  deleteScheduledActivity
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListScheduledActivities = createAsyncThunk(
  'scheduledActivities/fetch',
  async () => {
    const response = await API.graphql({
      query: listScheduledActivities,
      authMode: apiKey
    });
    return response.data;
  }
);

export const callCreateScheduledActivity = createAsyncThunk(
  'scheduledActivities/create',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(createScheduledActivity, { input: data })
    );
    return response.data;
  }
);

export const callUpdateScheduledActivity = createAsyncThunk(
  'scheduledActivities/update',
  async (data) => {
    const updatedScheduledActivityData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedScheduledActivityData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateScheduledActivity, {
        input: updatedScheduledActivityData
      })
    );
    return response.data;
  }
);

export const callDeleteScheduledActivity = createAsyncThunk(
  'scheduledActivities/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteScheduledActivity, { input: data })
    );
    return response;
  }
);
