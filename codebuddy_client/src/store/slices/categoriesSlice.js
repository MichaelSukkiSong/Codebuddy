import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      const removedCategories = state.categories.filter((category) => {
        return category.id !== action.payload;
      });
      state.categories = removedCategories;
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
