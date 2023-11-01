import { configureStore, applyMiddleware  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistedReducer } from './dataSlice';
// import { charactersSlice } from './dataSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
        api: persistedReducer,
            },
              middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
}, applyMiddleware(thunk))
   
 export const persistor = persistStore(store)