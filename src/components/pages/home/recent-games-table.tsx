import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Игра',
  },
  {
    accessorKey: 'email',
    header: 'Имя игрока',
  },
  {
    accessorKey: 'amount',
    header: 'Ставка',
  },
  {
    accessorKey: 'amount',
    header: 'Коэффициент',
  },
  {
    accessorKey: 'amount',
    header: 'Получил',
  },
];

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ];
}

function RecentGamesTable() {
  const data = getData();

  return (
    <div className="mt-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default RecentGamesTable;
