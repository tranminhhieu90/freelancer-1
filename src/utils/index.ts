import { notification, PaginationProps } from 'antd';
import { Http } from 'app/http';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const notify = (type: NotificationType, description: string) => {
  notification[type]({
    message: '',
    description,
  });
};

export const getIndex = (index: number, pagination: PaginationProps) => {
  return index + ((pagination.current || 1) - 1) * (pagination.pageSize || 10) + 1;
};

export const getParams = (pagination: PaginationProps, filter?: any) => {
  let params: any = {
    page: pagination.current,
    pageSize: pagination.pageSize,
  };

  if (filter && filter.value) {
    const { keyword, startDate, endDate } = filter.value;
    params = {
      ...params,
      keyword,
      startDate,
      endDate,
    };
  }

  return params;
};

export const getFile = (key: string) => {
  return Http.defaults.baseURL + '/file/' + key;
};
