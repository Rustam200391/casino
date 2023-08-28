import { createColumnHelper } from '@tanstack/react-table';
import {
  Round,
  useLoadGamesHistoryQuery,
} from '@/hooks/api/user/loadGamesHistory';
import { DataTable } from '@/components/ui/data-table';
import { format, fromUnixTime } from 'date-fns';
import { ArrowUpIcon } from 'lucide-react';

const columnHelper = createColumnHelper<Round>();
export const columns = [
  columnHelper.accessor('game', {
    id: 'game',
    header: 'Игра',
    cell: (info) => (
      <div className="flex">
        GameIcon
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor('time', {
    id: 'time',
    header: 'Тэг игры',
    cell: (info) => (
      <div className="flex flex-col">
        <div>{info.getValue()}</div>
        <div>{format(fromUnixTime(info.getValue()), 'DD/MM HH:mm')}</div>
      </div>
    ),
  }),
  columnHelper.accessor((originalRow) => originalRow.data.bet, {
    id: 'bet',
    header: 'Ставка',
    cell: (info) => (
      <div className="flex">
        WalletIcon
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor((originalRow) => originalRow.data.coefficient, {
    id: 'coefficient',
    header: 'Коэффициент',
    cell: (info) => `${info.getValue()}x`,
  }),
  columnHelper.accessor((originalRow) => originalRow.data.profit, {
    id: 'profit',
    header: 'Получил',
    cell: (info) => (
      <div className="flex text-green-500">
        + {info.getValue()} <ArrowUpIcon />
      </div>
    ),
  }),
];

const GamesHistoryTable = () => {
  const { data: loadGamesHistoryResponse } = useLoadGamesHistoryQuery();

  return (
    <DataTable
      columns={columns as any}
      data={loadGamesHistoryResponse?.result.rounds || []}
    />
  );
};

export default GamesHistoryTable;
