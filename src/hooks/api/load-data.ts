import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { noRefetch } from '@/lib/utils';
import Cookies from 'js-cookie';

export const fetchLoadData = async () => {
  if (typeof window == 'undefined') {
    return;
  }

  const data = await api.post('ajax/load_data').json<LoadDataResponse>();

  Cookies.set('XSRF-TOKEN', data.result.token);

  return data;
};

export const useLoadDataQuery = () => {
  return useQuery({
    queryKey: ['load_data'],
    queryFn: fetchLoadData,
    ...noRefetch,
  });
};

export interface LoadDataResponse {
  success: boolean;
  result: {
    auth: boolean;
    data: Data;
    token: string;
    language: string;
    languages: { [key: string]: Language };
    online: number;
    settings: any[];
    currencies_courses: CurrenciesCourses;
    technical_works: boolean;
    server_time: string;
  };
}

export interface CurrenciesCourses {
  fiat: { [key: string]: number };
  crypto: { [key: string]: number };
}

export interface Data {
  user_id: number;
  name: string;
  avatar: string | null;
  balance: string;
  experience: number;
  experience_next_level: number;
  level: number;
  rank: number;
  accepted_agreement: number;
  websocket_id: string;
}

export interface Language {
  id: number;
  lang: string;
  name: string;
}
