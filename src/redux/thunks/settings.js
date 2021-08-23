import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listSettings } from '../../graphql/queries';
import {
  createSetting,
  updateSetting,
  deleteSetting
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListSettings = createAsyncThunk('settings/fetch', async () => {
  const response = await API.graphql({
    query: listSettings,
    authMode: apiKey
  });
  return response.data;
});

export const callCreateSetting = createAsyncThunk(
  'settings/create',
  async (data) => {
    // const newSetting = { name: 'faker setting', abbrev: 'FAKR' };
    const response = await API.graphql(
      graphqlOperation(createSetting, { input: data })
    );
    return response.data;
  }
);

export const callUpdateSetting = createAsyncThunk(
  'settings/update',
  async (data) => {
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
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteSetting, { input: data })
    );
    return response;
  }
);
