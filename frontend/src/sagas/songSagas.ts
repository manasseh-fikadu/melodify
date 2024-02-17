import { call, put, takeLatest } from 'redux-saga/effects';
import { getSongsSuccess, getSongsFailure } from '../features/songSlice';
import { getStatisticsSuccess, getStatisticsFailure } from '../features/statisticsSlice';
import { fetchSongs, fetchStatistics } from '../api'; // Define your API functions for fetching songs and statistics

function* handleGetSongs(): Generator<any, void, any> {
  try {
    const songs = yield call(fetchSongs);
    yield put(getSongsSuccess(songs));
  } catch (error: any) {
    yield put(getSongsFailure(error.message));
  }
}

function* handleGetStatistics(): Generator<any, void, any> {
  try {
    const statistics = yield call(fetchStatistics);
    yield put(getStatisticsSuccess(statistics));
  } catch (error: any) {
    yield put(getStatisticsFailure(error.message));
  }
}

export default function* songSagas(): Generator<any, void, any> {
  yield takeLatest('song/getSongsStart', handleGetSongs);
  yield takeLatest('statistics/getStatisticsStart', handleGetStatistics);
}
