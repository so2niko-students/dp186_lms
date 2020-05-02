import { notification } from 'antd';

export function showNotification(title, message, type = 'info') {

  notification[type]({
    message: title,
    description: message,
    duration: 6,
  });
};