import { Http } from 'app/http';

export const login = () => {
  return Http.post('/users/login');
};
