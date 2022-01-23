import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from '@redux-saga/core/effects';
import { increment } from 'containters/counter/counterSlice';
export function* log(action: PayloadAction) {
  console.log('action', action);
}

export default function* counterSaga() {
  yield takeEvery(increment().type, log);
}
