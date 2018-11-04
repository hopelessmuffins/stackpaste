import { combineReducers } from 'redux';

import app from './components/App/ducks/reducer';
import files from './components/CodeEditor/ducks/reducer';

export default combineReducers({
  app,
  files,
});
