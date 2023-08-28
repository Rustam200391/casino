import api from '@/lib/api';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const fetchLoadWithdrawalsHistory = async () => {
  return await api
    .post('ajax/user/load_withdrawals_history')
    .json<LoadWithdrawalsResponse>();
};

export const useLoadWithdrawalsHistoryQuery = () => {
  const loadData = useLoadDataQuery();

  return useQuery({
    queryKey: ['load_withdrawals_history'],
    queryFn: fetchLoadWithdrawalsHistory,
    ...noRefetch,
    enabled: Boolean(loadData.data?.auth),
  });
};

export interface LoadWithdrawalsResponse {
  success: boolean;
  result: {
    balance_available: string;
    withdrawals: Withdrawal[];
  };
}

export interface Withdrawal {
  id: number;
  wallet_number: string;
  amount: number;
  amount_net: number;
  status: number;
  returned: number;
  time_created: number;
  time_processing: null;
  time_transferred: null;
  time_canceled: number;
  time_returned: null;
}
