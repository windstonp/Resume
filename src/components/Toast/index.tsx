import { toast } from 'react-toastify';

export const ToastSuccess = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    toastId: message,
    autoClose: 5000,
    progress: undefined,
    theme: 'dark',
  });
};

export const ToastError = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    toastId: message,
    autoClose: 5000,
    progress: undefined,
    theme: 'dark',
  });
};
