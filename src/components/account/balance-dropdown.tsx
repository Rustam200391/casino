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

export const BalanceDropdown = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[217px] border-neutral-800 bg-zinc-950 rounded-2xl">
        <DropdownMenuLabel className="text-center font-normal">
          <p className="font-light text-xs text-gray-400">Общий счёт активов</p>
          <p className="text-green-500 text-xl">128 095,412 ₽</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="rounded-lg">
            <BitcoinIcon className="mr-2 h-4 w-4" />
            <span>0.00000000</span>
            <DropdownMenuShortcut>BTC</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <BitcoinIcon className="mr-2 h-4 w-4" />
            <span>0.00000000</span>
            <DropdownMenuShortcut>BTC</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <BitcoinIcon className="mr-2 h-4 w-4" />
            <span>0.00000000</span>
            <DropdownMenuShortcut>BTC</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <BitcoinIcon className="mr-2 h-4 w-4" />
            <span>0.00000000</span>
            <DropdownMenuShortcut>BTC</DropdownMenuShortcut>
          </DropdownMenuItem>
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
