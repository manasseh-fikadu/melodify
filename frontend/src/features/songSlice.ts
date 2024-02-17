import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../types'; // Define the Song type according to your backend model

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
  name: 'song',
  initialState,
  reducers: {
    getSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = false;
      state.songs = action.payload;
    },
    getSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Define reducers for creating, updating, and deleting songs
  },
});

export const { getSongsStart, getSongsSuccess, getSongsFailure } = songSlice.actions;

export default songSlice.reducer;
