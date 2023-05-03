import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type ColorType, type filterState, type StatusType } from './type'

const initialState: filterState = {
  status: 'All',
  colors: [],
}
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload
    },
    addNewColor: (state, action: PayloadAction<ColorType>) => {
      state.colors.push(action.payload)
    },
    removeColor: (state, action: PayloadAction<ColorType>) => {
      state.colors = state.colors.filter(color => color !== action.payload)
    },
  },
})
export default filtersSlice.reducer
export const { changeStatus, addNewColor, removeColor } = filtersSlice.actions
