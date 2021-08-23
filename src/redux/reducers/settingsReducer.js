/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { callListSettings } from '../thunks/settings';

const initialState = {};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(callListSettings.fulfilled, (state, action) => {
        console.log('action recd by calllistsettings');
        const { items } = action.payload.listSettings;
        // eslint-disable-next-line no-return-assign
        items.forEach((i) => (state[i.settingType] = i.value));
      })
      .addDefaultCase((state, action) => {});
  }
});

export default settingsSlice.reducer;
