import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const updateNickname = async (request: UpdateNicknameRequest) => {
  const data = await api
    .post('ajax/action/user/update_nickname', {
      json: request,
    })
    .json<UpdateNicknameResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useUpdateNicknameMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: updateNickname,
    onSettled: () => {
      utils.invalidateQueries(['load_data', 'load_profile']);
    },
  });
};

export interface UpdateNicknameRequest {
  nickname: string;
}

export interface UpdateNicknameResponse {
  success: boolean;
}
