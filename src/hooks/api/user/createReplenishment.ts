import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export const createReplenishment = async (
  request: CreateReplenishmentRequest,
) => {
  const data = await api
    .post('ajax/action/replenishment/create', {
      json: request,
    })
    .json<CreateReplenishmentResponse>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');

  return data;
};

export const useCreateReplenishmentMutation = () => {
  const utils = useQueryClient();

  return useMutation({
    mutationFn: createReplenishment,
    onSettled: () => {
      utils.invalidateQueries(['load_data']);
    },
  });
};

export type PaymentType = 'freekassa';
export type PaymentMethod = 1;

export interface CreateReplenishmentRequest {
  payment_type: PaymentType;
  payment_method: PaymentMethod;
  amount: number;
}

export interface CreateReplenishmentResponse {
  success: boolean;
  result: {
    payment_url: string;
  };
}
