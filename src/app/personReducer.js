import { createSlice } from '@reduxjs/toolkit'

export const personReducer = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    personLoad: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { personLoad } = personReducer.actions

export default personReducer.reducer
