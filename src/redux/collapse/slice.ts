import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = false
export const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    changeCollapse: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export default collapseSlice.reducer
export const { changeCollapse } = collapseSlice.actions
