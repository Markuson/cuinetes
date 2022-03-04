import { all, fork } from 'redux-saga/effects';
//import all the required middlewares

// Redux saga config file
export default function* rootSaga() {
  //creating a root saga with multiple middleware sagas
  yield all([
    // fork(loginWatch),
  ]);
}
