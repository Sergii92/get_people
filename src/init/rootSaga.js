import { all, call } from "redux-saga/effects";
import { watchFetchPeople } from "../bus/people/saga";

export function* rootSaga() {
  yield all([call(watchFetchPeople)]);
}
