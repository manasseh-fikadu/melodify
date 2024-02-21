import { createSlice } from "@reduxjs/toolkit";

import { Song } from "../types";

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

const song = createSlice({
  name: "song",
  initialState: initialState,
  reducers: {
    setSongSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setSongSlice } = song.actions;
export default song.reducer;
