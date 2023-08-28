import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const changeProfilePrivacy = async () => {
  const data = await api
    .post('ajax/action/user/change_profile_privacy')
    .json<ChangeProfilePrivacyResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useChangeProfilePrivacyMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: changeProfilePrivacy,
    onSettled: () => {
      utils.invalidateQueries(['load_profile']);
    },
  });
};

export interface ChangeProfilePrivacyResponse {
  success: boolean;
  result: {
    profile_privacy: boolean;
  };
}
