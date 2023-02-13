import * as types from '../types';

export function buttonRequest() {
  return {
    type: types.BUTTON_CLICKED_REQUEST,
  };
}

export function buttonSuccess() {
  return {
    type: types.BUTTON_CLICKED_SUCCESS,
  };
}

export function buttonFailure() {
  return {
    type: types.BUTTON_CLICKED_FAILURE,
  };
}
