import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const findUserByNickname = async (nickname: string) => {
  return await api
    .post('ajax/user/find_by_nickname', { json: { nickname } })
    .json<LoadProfileResponse>();
};

export const useFindUserByNickname = (nickname: string) => {
  return useQuery({
    queryKey: ['user_find_by_nickname', nickname],
    queryFn: () => findUserByNickname(nickname),
    ...noRefetch,
    enabled: nickname.length > 2,
  });
};
export interface LoadProfileResponse {
  success: boolean;
  result: {
    data: UserData[];
  };
}

export interface UserData {
  id: number;
  nickname: string;
  avatar: string;
  level: string;
}
