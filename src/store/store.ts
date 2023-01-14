import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { 
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,   
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsTextSlice from './slices/settingsTextSlice';

const reducers = combineReducers({
  settings: settingsTextSlice,          
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
