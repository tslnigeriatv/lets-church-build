import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
}

// export const getMovies = createAsyncThunk('data/getMovies', () => {
//         return;
// })

export const appSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // setCategories: (state, action) => {
    //     state.categories = action.payload;
    // }
    // extraReducers: (builder) => {
    //   // Add reducers for additional action types here, and handle loading state as needed
    //   builder.addCase(fetchTvCategories.fulfilled, (state, action) => {
    //     // Add user to the state array
    //     state.categories = action.payload;
    //   })
    // },
  }
})
// Action creators are generated for each case reducer function
export const { 
    
 } = appSlice.actions

export default appSlice.reducer;