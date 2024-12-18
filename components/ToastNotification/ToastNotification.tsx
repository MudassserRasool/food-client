import Toast from 'react-native-toast-message';

const ToastNotification = {
  success: (text2 = '', text1 = '') => {
    Toast.show({
      position: 'top-center',
      autoClose: 5000,
      text2,
      text1,
      type: 'success',
    });
  },
  error: (text2 = '', text1 = '') => {
    Toast.show({
      position: 'top-right',
      autoClose: 5000,
      text2,
      text1,
      type: 'error',
    });
  },
  info: (text2 = '', text1 = '') => {
    Toast.show({
      position: 'top-center',
      autoClose: 5000,
      text2,
      text1,
      type: 'info',
    });
  },
  warn: (text2 = '', text1 = '') => {
    Toast.show({
      position: 'top-center',
      autoClose: 5000,
      text2,
      text1,
      type: 'warning',
    });
  },
};

export default ToastNotification;
