import api from '@/lib/api';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useQuery } from '@tanstack/react-query';
import { noRefetch } from '@/lib/utils';
import {
  useMinesGameBetAtom,
  useMinesGameCellAtom,
  useMinesGameMinesAtom,
} from '@/components/pages/games/mines/state';

export const fetchData = async (request: MinesDataRequest) => {
  return await api
    .post('ajax/games/mines/data', { json: request })
    .json<MinesDataResponse>();
};

export const useMinesDataQuery = () => {
  const loadData = useLoadDataQuery();
  const [amount] = useMinesGameBetAtom();
  const [mines] = useMinesGameMinesAtom();
  const [cell] = useMinesGameCellAtom();

  return useQuery({
    queryKey: ['mines_data', amount, mines, cell],
    queryFn: () => fetchData({ amount, mines, cell }),
    ...noRefetch,
    enabled: Boolean(loadData.data?.auth),
  });
};

export interface MinesDataRequest {
  amount: number | null;
  mines: number | null;
  cell: number | null;
}

export interface MinesDataResponse {
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
