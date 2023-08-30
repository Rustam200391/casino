import { BitcoinIcon, CircleDollarSignIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import React, { useMemo } from 'react';

export const BalanceDropdown = ({ trigger }: { trigger: React.ReactNode }) => {
  const { data: loadDataResponse } = useLoadDataQuery();
  const balance = Number(loadDataResponse?.data.balance);

  const balanceItems = useMemo(() => {
    const result: { currency: string; amount: number }[] = [];

    const fiatCurrencies = Object.entries(
      loadDataResponse?.currencies_courses.fiat || {},
    );
    const cryptoCurrencies = Object.entries(
      loadDataResponse?.currencies_courses.crypto || {},
    );

    fiatCurrencies.forEach((value) => {
      result.push({
        currency: value[0],
        amount: balance / Number(value[1]),
      });
    });

    cryptoCurrencies.forEach((value) => {
      result.push({
        currency: value[0],
        amount: balance / Number(value[1]),
      });
    });

    return result;
  }, [balance, loadDataResponse]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[217px] border-neutral-800 bg-zinc-950 rounded-2xl">
        <DropdownMenuLabel className="text-center font-normal">
          <p className="font-light text-xs text-gray-400">Общий счёт активов</p>
          <p className="text-green-500 text-xl">{balance} ₽</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {balanceItems.map((balanceItem) => (
            <DropdownMenuItem key={balanceItem.currency} className="rounded-lg">
              <BitcoinIcon className="mr-2 h-4 w-4" />
              <span>{balanceItem.amount.toFixed(5)}</span>
              <DropdownMenuShortcut>
                {balanceItem.currency}
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div>
          <Button variant="outline" className="w-full font-normal border-white">
            <CircleDollarSignIcon className="mr-2 h-4 w-4" />
            <span>Вывод средств</span>
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-full mt-1 font-normal border-neutral-800"
          >
            <span>Настройки кошелька</span>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BalanceDropdown;
