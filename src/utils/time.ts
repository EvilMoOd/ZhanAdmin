import dayjs from 'dayjs';

export const formDate = (d: string) => {
  return dayjs(d).format('YYYY-MM-DD HH:mm:ss');
};

