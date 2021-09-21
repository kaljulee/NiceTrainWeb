/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { callListSettings } from '../thunks/settings';
import { USER_STATES } from '../../constants';

const initialState = {
  loginStatus: USER_STATES.UNAUTH
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLoginStatus(state, action) {
      state.loginStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(callListSettings.fulfilled, (state, action) => {
        const { items } = action.payload.listSettings;
        // eslint-disable-next-line no-return-assign
        items.forEach((i) => (state[i.settingType] = i.value));
      })
      .addDefaultCase((state, action) => {});
  }
});

const { actions, reducer } = settingsSlice;

export const { setLoginStatus } = actions;

export default reducer;
