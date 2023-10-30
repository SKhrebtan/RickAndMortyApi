import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';


export const getCharactesThunk = createAsyncThunk(
     'characters/getCharacters',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios.get(`/character/?page=${page}`);
            
            return { data, page }

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
export const getEpisodesThunk = createAsyncThunk(
     'episodes/getEpisodes',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios.get(`/episode?page=${page}`);
            
            return { data, page }

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
export const getLocationsThunk = createAsyncThunk(
     'locations/getLocations',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios.get(`/location?page=${page}`);
            
            return { data, page }

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

 export const charactersSlice = createSlice({
    name: 'api',
     initialState: {
       characters: [],
       episodes: [],
       locations: [],
    isLoading: false,
       error: null,
    showBtn: false,
  },
   extraReducers: {
    [getCharactesThunk.pending](state) {
      state.isLoading = true;
    state.error = null;
    },
     [getCharactesThunk.fulfilled](state, {payload:{data,page}}) {
      if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.characters = page === 1 ? data.results : [...state.characters, ...data.results];
    },
    [getCharactesThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
     },
      [getEpisodesThunk.pending](state) {
      state.isLoading = true;
    state.error = null;
    },
     [getEpisodesThunk.fulfilled](state, { payload: {data, page} }) {
       if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.episodes = page === 1 ? data.results : [...state.episodes, ...data.results];
    },
    [getEpisodesThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
     },
      [getLocationsThunk.pending](state) {
      state.isLoading = true;
    state.error = null;
    },
     [getLocationsThunk.fulfilled](state, { payload: {data, page} }) {
       if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.locations = page === 1 ? data.results : [...state.locations, ...data.results];
    },
    [getLocationsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
       },
       },
})