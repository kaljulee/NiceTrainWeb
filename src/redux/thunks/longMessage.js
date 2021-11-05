import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listLongMessages } from '../../graphql/queries';
import {
  createLongMessage,
  updateLongMessage,
  deleteLongMessage,
} from '../../graphql/mutations';
import { apiKey } from '../../constants';
import { allowAPICall, containsChanges } from '../validators';

export const callListLongMessages = createAsyncThunk(
  'longMessages/fetch',
  async () => {
    const response = await API.graphql({
      query: listLongMessages,
      authMode: apiKey,
    });
    return response.data;
  }
);

export const callCreateLongMessage = createAsyncThunk(
  'longMessages/create',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(createLongMessage, { input: data })
    );
    return response.data;
  }
);

export const callUpdateLongMessage = createAsyncThunk(
  'longMessages/update',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const updatedLongMessageData = {};
    const original = getState().train.longMessages.find(
      (m) => m.id === data.id
    );
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedLongMessageData[k] = data[k];
      }
    });
    if (containsChanges(updatedLongMessageData, original)) {
      const response = await API.graphql(
        graphqlOperation(updateLongMessage, { input: updatedLongMessageData })
      );
      return response.data;
    }
    return rejectWithValue();
  }
);

export const callDeleteLongMessage = createAsyncThunk(
  'longMessages/delete',
  async (data, { getState, rejectWithValue }) => {
    if (!allowAPICall(getState())) {
      return rejectWithValue();
    }
    const response = await API.graphql(
      graphqlOperation(deleteLongMessage, { input: data })
    );
    return response;
  }
);
