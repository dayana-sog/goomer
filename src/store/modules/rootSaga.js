import { all } from 'redux-saga/effects';

import menus from './menus/saga';

export default function* rootSaga() {
  yield all([menus]);
}
