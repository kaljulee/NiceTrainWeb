import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listSettings } from '../../graphql/queries';
import {
  createSetting,
  updateSetting,
  deleteSetting,
} from '../../graphql/mutations';
import { apiKey, SETTING_TYPE } from '../../constants';
import { allowAPICall } from '../validators';

export const callListSettings = createAsyncThunk('settings/fetch', async () => {
  const response = await API.graphql({
    query: listSettings,
    authMode: apiKey,
  });
  return response.data;
});

export const callCreateSetting = createAsyncThunk(
  'settings/create',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(createSetting, { input: data })
    );
    return response.data;
  }
);

export const callSetLongMessage = createAsyncThunk(
  'settings/updateLongMessage',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const updatedSettingData = {
      settingType: SETTING_TYPE.ACTIVE_LONG_MESSAGE,
    };
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedSettingData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateSetting, { input: updatedSettingData })
    );
    return response.data;
  }
);

// todo when this gets used, add in containsChanges code
export const callUpdateSetting = createAsyncThunk(
  'settings/update',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const updatedSettingData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedSettingData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateSetting, { input: updatedSettingData })
    );
    return response.data;
  }
);

export const callDeleteSetting = createAsyncThunk(
  'settings/delete',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(deleteSetting, { input: data })
    );
    return response;
  }
);
