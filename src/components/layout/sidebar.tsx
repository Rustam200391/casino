import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FlagIcon, SettingsIcon, VolumeIcon, BellIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-fit col-span-2 border border-neutral-800 rounded-3xl p-4 lg:flex lg:flex-col">
      <p>PVP</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/jackpot/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Jackpot
          </div>
        </Link>
        <Link href="/games/jackpot-dice/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Jackpot Dice
          </div>
        </Link>
      </div>
      <p>PVE</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/crash/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Crash
          </div>
        </Link>
        <Link href="/games/mines/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Mines
          </div>
        </Link>
        <Link href="/games/dice/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Dice
          </div>
        </Link>
      </div>
      <p>Прокачка уровня</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/clicker-xp/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Кликер XP
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <Button variant="ghost">
          <FlagIcon />
        </Button>
        <Button variant="ghost">
          <VolumeIcon />
        </Button>
        <Button variant="ghost">
          <SettingsIcon />
        </Button>
        <Button variant="ghost">
          <BellIcon />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
