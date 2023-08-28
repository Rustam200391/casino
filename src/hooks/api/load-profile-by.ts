import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';
import { useLoadDataQuery } from '@/hooks/api/load-data';

export const fetchLoadProfileBy = async (userIdOrNickname: number | string) => {
  return await api
    .post(`ajax/user/load_profile/${userIdOrNickname}`)
    .json<LoadProfileResponse>();
};

export const useLoadProfileByQuery = (userIdOrNickname: number | string) => {
  const loadData = useLoadDataQuery();

  return useQuery({
    queryKey: ['load_profile', userIdOrNickname],
    queryFn: () => fetchLoadProfileBy(userIdOrNickname),
    ...noRefetch,
    enabled: Boolean(loadData.data?.auth),
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
  nickname?: string;
  avatar?: string;
  partner_code?: string;
  experience: number;
  games_total: number;
  coefficient_max: number;
  sum_total: number;
  sum_max: number;
}
