import { put, apply, call, select, takeEvery } from "redux-saga/effects";

import { peopleActions } from "./action";

const fetchData = ({ url, method }) => {
  return fetch(url, {
    method,
  });
};

export function* fetchPeople({ payload }) {
  try {
    const responce = yield call(fetchData, payload);
    const data = yield apply(responce, responce.json);

    if (responce.status !== 200) {
      throw new Error("error");
    }

    yield put(peopleActions.fetchPeopleSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchPeople() {
  yield takeEvery(peopleActions.fetchPeopleRequest, fetchPeople);
}
