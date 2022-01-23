// import authSaga from "features/auth/authSaga";
import { all } from "redux-saga/effects";
import counterSaga from "./counterSaga/counterSaga";
export default function* rootSaga() {
  yield all([counterSaga()]);
}
