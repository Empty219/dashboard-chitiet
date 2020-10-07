import { toast } from "react-toastify";

export const toastSuccess = data => {
  let message = null;
  if (data.length >= 0) {
    message = 'loading success';
  }
  toast.success(message);
};
export const toastError = error => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message } = error);
    // }
    if (message !== null && typeof message !== 'undefined' && message !== "") {
      toast.error(message);
    }
  };

}
