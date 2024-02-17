import { all } from "redux-saga/effects";
import songSagas from "./songSagas";

export default function* rootSaga() {
  yield all([
    songSagas(),
    // Add more sagas here if needed
  ]);
}
