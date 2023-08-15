import config from '@/lib/config';
import { useMutation } from '@tanstack/react-query';
import ky from 'ky-universal';

export const updateProfileInfo = async (request: UpdateProfileInfoRequest) => {
  const data = await ky
    .post(`${config.baseUrl}/ajax/action/user/update_profile_info`, {
      headers: {
        'X-CSRF-TOKEN': 'qwerty',
      },
      json: request,
    })
    .json<UpdateProfileInfoResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useUpdateProfileInfo = () => {
  return useMutation({
    mutationFn: updateProfileInfo,
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
