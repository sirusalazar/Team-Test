import { toast } from 'react-toastify';

toast.configure();

class NotificationHandler {
  static showError = (message, callback) => this.showToast("error", message, callback);

  static showSuccess = (message, callback) => this.showToast("success", message, callback);

  static showToast = (type, message, callback) => {
    if (callback) {
      return toast(message, { type, onClose: callback });
    }
    return toast(message, { type });
  };
}

export default NotificationHandler;
