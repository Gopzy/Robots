import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../Action/ActionType';
import {fetchRobotsApi} from '../Api/fetchRobotsApi';

function* robotSaga({success, failed}) {
  try {
    const response = yield fetchRobotsApi();
    yield put({type: FETCH_DATA_SUCCESS, payload: response});
    success?.(response);
  } catch (error) {
    yield put({type: FETCH_DATA_FAIL, error: error.message});
    if (failed) failed(error);
  }
}

export default function* robotScreenSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, robotSaga);
}
