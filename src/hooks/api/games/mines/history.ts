import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';
import { useMinesDataQuery } from '@/hooks/api/games/mines/data';

export const fetchHistory = async (gameId: number) => {
  return await api
    .post(`ajax/game/mines/history/${gameId}`)
    .json<MinesHistoryResponse>();
};

export const useMinesHistoryQuery = () => {
  const { data: gameDataResponse } = useMinesDataQuery();

  return useQuery({
    queryKey: ['mines_history', gameDataResponse?.result],
    queryFn: () => fetchHistory(Number(gameDataResponse?.result)),
    ...noRefetch,
    enabled: Boolean(gameDataResponse?.result),
  });
};

export interface MinesHistoryResponse {
  success: boolean;
  result: {
    rounds: Round[];
  };
}

export interface Round {
  hash: string;
  status: number;
  finish: number;
  bet: string;
  mines: number;
  coefficient: number;
  profit: string;
  salt: string;
  data: Datum[];
  time: number;
}

export interface Datum {
  o: boolean;
  m: boolean;
}
