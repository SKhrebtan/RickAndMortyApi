import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';


export const getCharactesThunk = createAsyncThunk(
     'characters/getCharacters',
    async (page, thunkAPI) => {
        try {
            const { data: {results} } = await axios.get(`/character/?page=${page}`);
            
            return { results, page }

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

 export const charactersSlice = createSlice({
    name: 'characters',
     initialState: {
    items: [],
    isLoading: false,
    error: null
  },
   extraReducers: {
    [getCharactesThunk.pending](state) {
      state.isLoading = true;
    state.error = null;
    },
    [getCharactesThunk.fulfilled](state, action) {
        state.isLoading = false;
        state.items = action.payload.page === 1 ? action.payload.results : [...state.items, ...action.payload.results];
    },
    [getCharactesThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
       },
       },
})