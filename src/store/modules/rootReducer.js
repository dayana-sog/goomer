import { combineReducers } from 'redux';

import menus from './menus/reducer';

const reducers = combineReducers({
  menus,
});

export default reducers;
