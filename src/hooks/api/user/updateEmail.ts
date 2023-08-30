import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const updateEmail = async (request: UpdateEmailRequest) => {
  const data = await api
    .post('ajax/action/user/update_email', {
      json: request,
    })
    .json<UpdateEmailResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useUpdateEmailMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: updateEmail,
    onSettled: () => {
      utils.invalidateQueries(['load_profile']);
    },
  });
};

export interface UpdateEmailRequest {
  email: string;
}

export interface UpdateEmailResponse {
  success: boolean;
}
