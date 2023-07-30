import { AreaChartIcon, FingerprintIcon, Settings, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const AccountDropdown = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[245px] border-neutral-800 bg-zinc-950 rounded-lg">
        <DropdownMenuGroup>
          <DropdownMenuItem className="rounded-lg">
            <User className="mr-2 h-4 w-4" />
            <span>Профиль</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <Settings className="mr-2 h-4 w-4" />
            <span>Настройки</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <FingerprintIcon className="mr-2 h-4 w-4" />
            <span>Безопасность</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <AreaChartIcon className="mr-2 h-4 w-4" />
            <span>История транзакций</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Выход</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
