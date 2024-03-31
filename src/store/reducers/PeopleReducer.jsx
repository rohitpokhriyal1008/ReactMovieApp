import { createSlice } from '@reduxjs/toolkit'

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    info: null
  },
  reducers: {
    loadpeople: (state,action) => {
          state.info = action.payload;
    },
    removepeople: (state,action) => {
        state.info = null;
    },
  }
})

export const {loadpeople,removepeople } = peopleSlice.actions

export default peopleSlice.reducer