import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Statistics } from "../types"; // Define the Statistics type according to your backend model

interface StatisticsState {
  statistics: Statistics | null;
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  statistics: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatisticsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getStatisticsSuccess(state, action: PayloadAction<Statistics>) {
      state.loading = false;
      state.statistics = action.payload;
    },
    getStatisticsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getStatisticsStart,
  getStatisticsSuccess,
  getStatisticsFailure,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
