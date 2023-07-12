import config from '@/lib/config';
import { noRefetch } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import ky from 'ky-universal';

export const fetchLoadData = async () => {
  const data = await ky
    .post(`${config.baseUrl}/load_data`, {
      headers: {
        'X-CSRF-TOKEN': 'qwerty',
      },
    })
    .json<LoadDataResponse>();
  return data;
};

export const useLoadData = () => {
  return useQuery({
    queryKey: ['load_data'],
    queryFn: fetchLoadData,
    ...noRefetch,
  });
};

// Generated by https://quicktype.io

export interface LoadDataResponse {
  auth: boolean;
  technical_works: boolean;
  data: UserData;
  token: string;
  language: string;
  languages: Languages;
  online: number;
  settings: any[];
  levels_experience: { [key: string]: number };
}

export interface UserData {
  user_id: number;
  name: string;
  avatar: string;
  balance: string;
  level: number;
  rank: number;
  experience: number;
  accepted_agreement: number;
}

export interface Languages {
  en: LanguageItem;
  ru: LanguageItem;
}

export interface LanguageItem {
  id: number;
  lang: string;
  name: string;
}
