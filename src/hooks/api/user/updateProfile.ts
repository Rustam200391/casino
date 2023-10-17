import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const updateProfileInfo = async (request: UpdateProfileInfoRequest) => {
  const data = await api
    .post('ajax/action/user/update_profile_info', {
      json: request,
    })
    .json<UpdateProfileInfoResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useUpdateProfileMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: updateProfileInfo,
    onSettled: () => {
      utils.invalidateQueries(['load_data', 'load_profile']);
    },
  });
};

export interface UpdateProfileInfoRequest {
  first_name: string;
  last_name: string;
  sex: 1 | 2 | null;
}

export interface UpdateProfileInfoResponse {
  success: boolean;
}
