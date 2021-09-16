import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { listYouTubeResources } from '../../graphql/queries';
import { apiKey } from '../../constants';
import {
  createYouTubeResource,
  deleteYouTubeResource,
  updateYouTubeResource
} from '../../graphql/mutations';
import { containsChanges } from '../validators';

export const callListYouTubeResources = createAsyncThunk(
  'ytr/fetch',
  async () => {
    const response = await API.graphql({
      query: listYouTubeResources,
      authMode: apiKey
    });
    return response.data;
  }
);

export const callCreateYouTubeResource = createAsyncThunk(
  'ytr/create',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(createYouTubeResource, { input: data })
    );
    return response.data;
  }
);

export const callUpdateYouTubeResource = createAsyncThunk(
  'ytr/update',
  async (data, { getState, rejectWithValue }) => {
    const updatedYTRData = {};
    const original = getState().train.youTubeResources.find(
      (ytr) => ytr.id === data.id
    );
    Object.keys(data).forEach((k) => {
      if (data[k].length > 0) {
        updatedYTRData[k] = data[k];
      }
    });
    if (containsChanges(updatedYTRData, original)) {
      const response = await API.graphql(
        graphqlOperation(updateYouTubeResource, { input: updatedYTRData })
      );
      return response.data;
    }
    return rejectWithValue();
  }
);

export const callDeleteYouTubeResource = createAsyncThunk(
  'ytr/delete',
  async (data) => {
    const response = await API.graphql(
      graphqlOperation(deleteYouTubeResource, { input: data })
    );
    return response;
  }
);
