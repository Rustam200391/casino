import config from '@/lib/config';
import { useQuery } from '@tanstack/react-query';
import ky from 'ky-universal';

export const fetchLoadData = async () => {
  const data = await ky
    .post(`${config.baseUrl}/load_data`, {
      headers: {
        'X-CSRF-TOKEN': 'qwerty',
      },
    })
    .json();
  return data;
};

export const useLoadData = () => {
  return useQuery({
    queryKey: ['load_data'],
    queryFn: fetchLoadData,
  });
};
