// src/songSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../types"; // Define Song type according to your data structure

interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      return state;
    },
    addSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
      return state;
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return state;
    },
    deleteSongSlice: (state, action) => {
      state.songs = state.songs.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songSlice.actions;

export default songSlice.reducer;
