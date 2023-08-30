import api from '@/lib/api';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const fetchLoadGamesHistory = async () => {
  return await api
    .post('ajax/user/load_games_history')
    .json<LoadGamesResponse>();
};

export const useLoadGamesHistoryQuery = () => {
  const loadData = useLoadDataQuery();

  return useQuery({
    queryKey: ['load_games_history'],
    queryFn: fetchLoadGamesHistory,
    ...noRefetch,
    enabled: Boolean(loadData.data?.auth),
  });
};

export interface LoadGamesResponse {
  success: boolean;
  result: {
    rounds: Round[];
  };
}

export interface Round {
  game: string;
  data: {
    round_id: number;
    amount: string;
    coefficient: number;
    profit: string;
  };
  time: number;
}
