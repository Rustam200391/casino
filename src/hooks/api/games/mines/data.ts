import api from '@/lib/api';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';

export const fetchData = async () => {
  return await api.post('ajax/games/mines/data').json<LoadGamesResponse>();
};

export const useMinesDataQuery = () => {
  const loadData = useLoadDataQuery();

  return useQuery({
    queryKey: ['mines_data'],
    queryFn: fetchData,
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
    bet: string;
    coefficient: number;
    profit: string;
  };
  time: number;
}
