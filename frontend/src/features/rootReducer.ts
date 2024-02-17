import { combineReducers } from "redux";
import songReducer from "../features/songSlice";
import statisticsReducer from "../features/statisticsSlice";

const rootReducer = combineReducers({
  song: songReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
