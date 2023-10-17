import { useMutation } from '@tanstack/react-query';
import api from '@/lib/api';

export const donateToUser = async (request: DonateToUserRequest) => {
  const data = await api
    .post('ajax/action/donate_to_user', {
      json: request,
    })
    .json<ChangePasswordResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useDonateToUserMutation = () => {
  return useMutation({
    mutationFn: donateToUser,
  });
};

export interface DonateToUserRequest {
  user_id: number;
  amount: number;
}

export interface ChangePasswordResponse {
  success: boolean;
  result: {
    balance: {
      increment: number;
      decrement: string;
    };
  };
}
