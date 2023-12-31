import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';
import { useLoadDataQuery } from '@/hooks/api/load-data';

export const fetchLoadProfile = async (userId: number) => {
  return await api
    .post('ajax/user/load_profile', { json: { auth_user_id: userId } })
    .json<LoadProfileResponse>();
};

export const useLoadProfileQuery = () => {
  const { data: loadDataResponse } = useLoadDataQuery();

  return useQuery({
    queryKey: ['load_profile', loadDataResponse?.result.data.user_id],
    queryFn: () =>
      fetchLoadProfile(loadDataResponse?.result.data.user_id as number),
    ...noRefetch,
    enabled: Boolean(loadDataResponse?.result.data.user_id),
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
  sex: 1 | 2 | null;
  email: string;
  email_confirmed: number;
  twofa_enabled: number;
  avatar: string;
  revshare_level: number;
  revshare_code: string;
  profile_privacy: number;
  experience: number;
  rank: number;
  games_total: number;
  coefficient_max: number;
  time_reg: string;
  socials: Socials;
  sum_total: string;
  sum_max: string;
}

export interface Socials {
  telegram: boolean;
  google: boolean;
  steam: boolean;
  vkontakte: boolean;
}
