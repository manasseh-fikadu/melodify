import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songsSlice";
import song from "./songSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
    song: song,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
