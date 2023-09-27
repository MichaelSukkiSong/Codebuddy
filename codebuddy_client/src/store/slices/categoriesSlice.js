import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    name: '',
    prompt: '',
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changePrompt(state, action) {
      state.prompt = action.payload;
    },
  },
});

export const { changeName, changePrompt } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
