import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SettingsTextStatus, TextAlign } from '../../types/types';

export interface SettingsTextState {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  color: string;
  lineHeight: number;
  letterSpacing: number;
  align: TextAlign;
  status: SettingsTextStatus;
}

export const initialSettingsTextState: SettingsTextState = {
  fontFamily: 'Fira Sans',
  fontWeight: 'Bold',
  fontSize: 14,
  color: '#292929',
  lineHeight: 125,
  letterSpacing: 0.6,
  align: TextAlign.CENTER,
  status: SettingsTextStatus.APPLIED,
};

export const settingsTextSlice = createSlice({
  name: 'settingsText',
  initialState: initialSettingsTextState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setFontWeight: (state, action: PayloadAction<string>) => {
      state.fontWeight = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setLineHeight: (state, action: PayloadAction<number>) => {
      state.lineHeight = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setLetterSpacing: (state, action: PayloadAction<number>) => {
      state.letterSpacing = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setAlign: (state, action: PayloadAction<TextAlign>) => {
      state.align = action.payload;
      state.status = SettingsTextStatus.EDITING;
    },
    setSettingsStatus: (state, action: PayloadAction<SettingsTextStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { 
  setFontFamily, 
  setFontWeight, 
  setFontSize, 
  setColor, 
  setLetterSpacing, 
  setLineHeight,
  setAlign, 
  setSettingsStatus,
} = settingsTextSlice.actions;

export default settingsTextSlice.reducer;
