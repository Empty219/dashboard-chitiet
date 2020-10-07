import * as taskApis from '../apis/task';
import * as ListnvConstants from '../constants/listnv';
export const fetchListNV = () => {
  return {
    type: ListnvConstants.FETCH_LIST_NV,
  }
}

export const fetchListNVSuccess = (data) => {
  return {
    type: ListnvConstants.FETCH_LIST_NV_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListNVFailed = (error) => {
  return {
    type: ListnvConstants.FETCH_LIST_NV_FAILED,
    payload: {
      error
    }
  }
}

export const fetchListNVRequest = () => {
  return dispatch => {
    dispatch(fetchListNV());
    taskApis.getList().then(resp => {
      const {data} = resp;
      dispatch(fetchListNVSuccess(data));
    }).catch(error => {
      dispatch(fetchListNVRequest(error));
    });
  }
}
