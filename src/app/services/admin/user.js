import { Http } from 'app/http';

export const getAllUsers = (pagination) => {
  return Http.get('/users', {
    params: {
      limit: pagination.pageSize,
      page: pagination.current
    }
  });
};

export const removeUser = (id) => {
  return Http.delete(`/users/${id}`);
};