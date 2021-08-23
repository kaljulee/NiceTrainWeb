import { createSlice } from '@reduxjs/toolkit';
import { callListSettings } from '../thunks/settings';

const initialState = {};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder
        .addCase(callListSettings.fulfilled, (state, action) => {
          console.log(action);
        })
        .addDefaultCase((state, action) => {});
    }
  }
});

export default settingsSlice.reducer;
