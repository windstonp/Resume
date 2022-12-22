import { formData } from 'screens/Contact';

export const sendContact = async (data: formData) => {
  const res = await fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const checkCaptcha = async (token: string) => {
  const res = await fetch('api/captcha-check', {
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res;
};
