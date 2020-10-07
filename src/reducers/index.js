import { combineReducers } from "redux";
import uiReducer from "./ui";
import taskReducer from './task';
import listnvReducer from './listnv';
const rootReducers = combineReducers({
  ui: uiReducer,
  task : taskReducer,
  listnv : listnvReducer
});
export default rootReducers;
