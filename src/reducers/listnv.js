import * as listNVConstants from './../constants/listnv';
import {
  toastError,
  toastSuccess,
} from "../helpers/toastHelper";
const initialState = {
  listNV: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case listNVConstants.FETCH_LIST_NV: {
      return {
        ...state,
        listNV: [],
      }
    }
    case listNVConstants.FETCH_LIST_NV_SUCCESS: {
      const { data } = action.payload;
      toastSuccess(data);
      return {
        ...state,
        listNV: data,
      }
    }
    case listNVConstants.FETCH_LIST_NV_FAILED: {
      const {error} = action.payload;
      toastError(error);
      return {
        ...state,
        listNV: [],
      }
    }
    default:
      return state;
  }
}
export default reducer;
