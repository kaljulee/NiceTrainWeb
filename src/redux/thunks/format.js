import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listFormats } from '../../graphql/queries';
import {
  createFormat,
  updateFormat,
  deleteFormat
} from '../../graphql/mutations';
import { apiKey } from '../../constants';

export const callListFormats = createAsyncThunk('formats/fetch', async () => {
  const response = await API.graphql({
    query: listFormats,
    authMode: apiKey
  });
  return response.data;
});

export const callCreateFormat = createAsyncThunk(
  'formats/create',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(createFormat, { input: data })
    );
    return response.data;
  }
);

export const callUpdateFormat = createAsyncThunk(
  'formats/update',
  async (data) => {
    const updatedFormatData = {};
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedFormatData[k] = data[k];
      }
    });
    const response = await API.graphql(
      graphqlOperation(updateFormat, {
        input: updatedFormatData
      })
    );
    return response.data;
  }
);

export const callDeleteFormat = createAsyncThunk(
  'formats/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteFormat, { input: data })
    );
    return response;
  }
);
