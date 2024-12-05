// settingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { dark: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
