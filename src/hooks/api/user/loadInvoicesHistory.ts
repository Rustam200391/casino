import api from '@/lib/api';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const fetchLoadInvoicesHistory = async () => {
  return await api
    .post('ajax/user/load_invoices_history')
    .json<LoadInvoicesResponse>();
};

export const useLoadInvoicesHistoryQuery = () => {
  const loadData = useLoadDataQuery();

  return useQuery({
    queryKey: ['load_invoices_history'],
    queryFn: fetchLoadInvoicesHistory,
    ...noRefetch,
    enabled: Boolean(loadData.data?.auth),
  });
};

export interface LoadInvoicesResponse {
  success: boolean;
  result: {
    invoices: Invoice[];
  };
}

export interface Invoice {
  id: number;
  payment_type: string;
  amount: number;
  amount_net: number;
  time: number;
}
