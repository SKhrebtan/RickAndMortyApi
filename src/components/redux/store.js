import { configureStore, applyMiddleware  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { charactersSlice } from './dataSlice';
export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
            },
   }, applyMiddleware(thunk))