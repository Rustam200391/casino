import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const fetchLoadProfileBy = async (userIdOrNickname: number | string) => {
  return await api
    .post(`ajax/user/load_profile/${userIdOrNickname}`)
    .json<LoadProfileResponse>();
};

export const useLoadProfileByQuery = (userIdOrNickname: number | string) => {
  return useQuery({
    queryKey: ['load_profile', userIdOrNickname],
    queryFn: () => fetchLoadProfileBy(userIdOrNickname),
    ...noRefetch,
  });
};
export interface LoadProfileResponse {
  success: boolean;
  result: {
    data: ProfileData;
  };
}

export interface ProfileData {
  id: number;
  nickname: string;
  fist_name: string;
  last_name: string;
  sex: number;
  avatar: null;
  email: string;
  group: number;
  twofa_enabled: number;
  revshare_level: number;
  revshare_code?: string;
  profile_privacy: number;
  experience: number;
  level: number;
  rank: number;
  games_total: number;
  coefficient_max: number;
  email_confirmed: number;
  time_reg: string;
  socials: Socials;
  sum_total: string;
  sum_max?: number;
}

export interface Socials {
  telegram: boolean;
  google: boolean;
  steam: boolean;
  vkontakte: boolean;
}
