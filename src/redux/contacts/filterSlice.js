import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    inputFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { inputFilter } = filterSlice.actions;
export default filterSlice.reducer;
