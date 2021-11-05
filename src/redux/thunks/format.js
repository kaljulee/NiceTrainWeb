import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listFormats } from '../../graphql/queries';
import {
  createFormat,
  updateFormat,
  deleteFormat,
} from '../../graphql/mutations';
import { apiKey } from '../../constants';
import { allowAPICall, containsChanges } from '../validators';

export const callListFormats = createAsyncThunk('formats/fetch', async () => {
  const response = await API.graphql({
    query: listFormats,
    authMode: apiKey,
  });
  return response.data;
});

export const callCreateFormat = createAsyncThunk(
  'formats/create',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(createFormat, { input: data })
    );
    return response.data;
  }
);

export const callUpdateFormat = createAsyncThunk(
  'formats/update',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const updatedFormatData = {};
    const original = getState().train.formats.find((f) => f.id === data.id);
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedFormatData[k] = data[k];
      }
    });
    if (containsChanges(updatedFormatData, original)) {
      const response = await API.graphql(
        graphqlOperation(updateFormat, {
          input: updatedFormatData,
        })
      );
      return response.data;
    }
    return rejectWithValue();
  }
);

export const callDeleteFormat = createAsyncThunk(
  'formats/delete',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(deleteFormat, { input: data })
    );
    return response;
  }
);
