import axiosServices from './../commoms/axiosServices';
import { API_ENDPOINT } from "./../constants/index";

const url = "tasks";
export const getList = () => {
  return axiosServices.get(`${API_ENDPOINT}/${url}`)
}
