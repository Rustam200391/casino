import { AreaChartIcon, FingerprintIcon, Settings, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthSignOut } from '@/hooks/api/auth/sign-in';

export const AccountDropdown = ({ trigger }: { trigger: React.ReactNode }) => {
  const signOut = useAuthSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[245px] border-neutral-800 bg-zinc-950 rounded-lg">
        <DropdownMenuGroup>
          <DropdownMenuItem className="rounded-lg">
            <User className="w-4 h-4 mr-2" />
            <span>Профиль</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <Settings className="w-4 h-4 mr-2" />
            <span>Настройки</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <FingerprintIcon className="w-4 h-4 mr-2" />
            <span>Безопасность</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg">
            <AreaChartIcon className="w-4 h-4 mr-2" />
            <span>История транзакций</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem
          onClick={() => {
            console.log('signOut');
            signOut.mutate();
          }}
        >
          <span>Выход</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
