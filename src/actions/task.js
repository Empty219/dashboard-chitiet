import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';
export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  }
}

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error
    }
  }
}

export const fetchListTaskRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis.getList().then(data => {
      dispatch(fetchListTaskSuccess());
    }).catch(error => {
      dispatch(fetchListTaskFailed());
    });
  }
}
