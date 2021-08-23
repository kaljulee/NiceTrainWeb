const initialState = {
  longMessage: ''
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    extraReducers: (buider) => {
      builder
        .addCase(callListSettings.fulfilled, (state, action) => {
          console.log(action);
        })
        .addDefaultCase((state, action) => {});
    }
  }
});
