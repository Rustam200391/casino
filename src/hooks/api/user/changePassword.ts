import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const changePassword = async (request: ChangePasswordRequest) => {
  const data = await api
    .post('ajax/action/user/change_password', {
      json: request,
    })
    .json<ChangePasswordResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useChangePasswordMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: changePassword,
  });
};

export interface ChangePasswordRequest {
  password: string;
}

export interface ChangePasswordResponse {
  success: boolean;
}
