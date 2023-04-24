import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioDuration: 100,
    audioPosition: 0
}

// export const getMovies = createAsyncThunk('data/getMovies', () => {
//         return;
// })

export const appSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setAudioDuration: (state, action) => {
      state.audioDuration = action.payload;
    },
    setAudioPosition: (state, action) => {
      state.audioPosition = action.payload;
    }
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
  setAudioDuration,
  setAudioPosition
 } = appSlice.actions

export default appSlice.reducer;