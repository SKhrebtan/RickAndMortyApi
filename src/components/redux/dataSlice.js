import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

const persistConfig = {
  key: 'api',
  storage,
  whitelist: ['favoriteEpisodes','favoriteLocations','favoriteCharacters']
}

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

export const getSearchCharacterThunk = createAsyncThunk(
     'search/searchCharacter',
  async (info, thunkAPI) => {
      
        try {
            const { data } = await axios.get(`/character/?name=${info.query}&page=${info.page}`);
          const { page } = info;
            return { data, page }

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const getFavoriteEpisodeThunk = createAsyncThunk(
     'favorie/favoriteEpisode',
  async ({ value, id }, thunkAPI) => {
      
        try {
            const { data } = await axios.get(`/${value}/${id}`);
          return { data , value}

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
       favoriteEpisodes: [],
       favoriteLocations: [],
       favoriteCharacters: [],
       locations: [],
       searchCharacters: [],
       characterSearchParams: null,
    isLoading: false,
       error: null,
    showBtn: false,
   },
   reducers: {
     addLocation(state, { payload }) {
      
            state.characterSearchParams = payload
     },
     clearCharacters(state, _) {
       
            state.searchCharacters = []
     },
     deleteFavoriteEpisode(state, { payload: { value, id } }) {
           switch (value) {
           case 'episode':
             state.favoriteEpisodes = state.favoriteEpisodes.filter(item => {
        return item.id !== id
       })
             break;
           case 'location':
             state.favoriteLocations = state.favoriteLocations.filter(item => {
        return item.id !== id
       })
             break;
           case 'character':
             state.favoriteCharacters = state.favoriteCharacters.filter(item => {
        return item.id !== id
       })
             break;
          default:
      state = state=>state;
  }
        state.favoriteEpisodes = state.favoriteEpisodes.filter(item => {
        return item.id !== id
       })
     }
    
     },
   extraReducers: builder =>
     builder.addCase(getCharactesThunk.pending, state => {
            state.isLoading = true;
    state.error = null;
     })
       .addCase(getCharactesThunk.fulfilled, (state, { payload: { data, page } }) => {
      if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.characters = page === 1 ? data.results : [...state.characters, ...data.results];
       })
   .addCase(getCharactesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
   })
   .addCase(getEpisodesThunk.pending, state => {
            state.isLoading = true;
    state.error = null;
     })
       .addCase(getEpisodesThunk.fulfilled, (state, { payload: { data, page } }) => {
      if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.episodes = page === 1 ? data.results : [...state.episodes, ...data.results];
       })
   .addCase(getEpisodesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
   })
   .addCase(getLocationsThunk.pending, state => {
            state.isLoading = true;
    state.error = null;
     })
       .addCase(getLocationsThunk.fulfilled, (state, { payload: { data, page } }) => {
      if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
        state.isLoading = false;
        state.locations = page === 1 ? data.results : [...state.locations, ...data.results];
       })
   .addCase(getLocationsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
   })
   .addCase(getSearchCharacterThunk.pending, state => {
            state.isLoading = true;
    state.error = null;
     })
       .addCase(getSearchCharacterThunk.fulfilled, (state, { payload: { data, page } }) => {
       
      if (data.info.pages > 1) {
         state.showBtn = true
       } else { state.showBtn = false }
       if (data.info.pages === page) {
         state.showBtn = false
       }
         state.isLoading = false;
        
         state.searchCharacters = page === 1 ? data.results : [...state.searchCharacters, ...data.results];
       })
   .addCase(getSearchCharacterThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
   })
   .addCase(getFavoriteEpisodeThunk.pending, state => {
            state.isLoading = true;
    state.error = null;
     })
       .addCase(getFavoriteEpisodeThunk.fulfilled, (state, {payload:{data, value}}) => {
         state.isLoading = false;
         
         switch (value) {
           case 'episode':
             state.favoriteEpisodes = [...state.favoriteEpisodes, data];
             break;
           case 'location':
             state.favoriteLocations.push(data);
             break;
           case 'character':
             state.favoriteCharacters.push(data);
             break;
          default:
      state = state=>state;
  }
        
         
       })
   .addCase(getFavoriteEpisodeThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
     })
 })
export const persistedReducer = persistReducer(persistConfig, charactersSlice.reducer)
export const { addLocation, clearCharacters,deleteFavoriteEpisode } = charactersSlice.actions;

  // extraReducers: {
  //   [getCharactesThunk.pending](state) {
  //     state.isLoading = true;
  //   state.error = null;
  //   },
  //    [getCharactesThunk.fulfilled](state, {payload:{data,page}}) {
  //     if (data.info.pages > 1) {
  //        state.showBtn = true
  //      } else { state.showBtn = false }
  //      if (data.info.pages === page) {
  //        state.showBtn = false
  //      }
  //       state.isLoading = false;
  //       state.characters = page === 1 ? data.results : [...state.characters, ...data.results];
  //   },
  //   [getCharactesThunk.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //    },
  //     [getEpisodesThunk.pending](state) {
  //     state.isLoading = true;
  //   state.error = null;
  //   },
  //    [getEpisodesThunk.fulfilled](state, { payload: {data, page} }) {
  //      if (data.info.pages > 1) {
  //        state.showBtn = true
  //      } else { state.showBtn = false }
  //      if (data.info.pages === page) {
  //        state.showBtn = false
  //      }
  //       state.isLoading = false;
  //       state.episodes = page === 1 ? data.results : [...state.episodes, ...data.results];
  //   },
  //   [getEpisodesThunk.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //    },
  //     [getLocationsThunk.pending](state) {
  //     state.isLoading = true;
  //   state.error = null;
  //   },
  //    [getLocationsThunk.fulfilled](state, { payload: {data, page} }) {
  //      if (data.info.pages > 1) {
  //        state.showBtn = true
  //      } else { state.showBtn = false }
  //      if (data.info.pages === page) {
  //        state.showBtn = false
  //      }
  //       state.isLoading = false;
  //       state.locations = page === 1 ? data.results : [...state.locations, ...data.results];
  //   },
  //   [getLocationsThunk.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //    },
  //    [getSearchCharacterThunk.pending](state) {
  //     state.isLoading = true;
  //   state.error = null;
  //   },
  //    [getSearchCharacterThunk.fulfilled](state, { payload: { data, page } }) {
  //             if (data.info.pages > 1) {
  //        state.showBtn = true
  //      } else { state.showBtn = false }
  //      if (data.info.pages === page) {
  //        state.showBtn = false
  //      }
  //       state.isLoading = false;
  //       state.searchCharacters = page === 1 ? data.results : [...state.searchCharacters, ...data.results];
  //   },
  //   [getSearchCharacterThunk.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //      },
  //      },