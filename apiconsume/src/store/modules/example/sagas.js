import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

// Funciona com fosse async function
function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.buttonSuccess());
  } catch {
    toast.error('Rejected');
    yield put(actions.buttonFailure());
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);
