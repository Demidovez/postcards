import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import settingsTextSlice from './slices/settingsTextSlice';

export const store = configureStore({
  reducer: {
    settings: settingsTextSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
