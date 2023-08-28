import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { useLoadProfileQuery } from '@/hooks/api/user/loadProfile';

export const changeTwoFa = async (enabled: boolean) => {
  const twoFaChangeTo = enabled ? 'enable' : 'disable';

  const data = await api
    .post(`ajax/action/user/twofa/${twoFaChangeTo}`)
    .json<ChangeTwoFaResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useChangeTwoFaMutation = () => {
  const utils = useQueryClient();
  const { data: loadProfileResponse } = useLoadProfileQuery();

  return useMutation({
    mutationFn: () =>
      changeTwoFa(!loadProfileResponse?.result.data.twofa_enabled),
    onSettled: () => {
      utils.invalidateQueries(['load_profile']);
    },
  });
};
export interface ChangeTwoFaResponse {
  success: boolean;
}
