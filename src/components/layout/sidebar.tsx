import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { BellIcon, SettingsIcon, Volume2Icon } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="h-fit col-span-2 border border-neutral-800 rounded-3xl p-4 lg:flex lg:flex-col">
      <p>PVP</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/jackpot/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image src="/img/game.png" alt="Jackpot" height={56} width={56} />
            Jackpot
          </div>
        </Link>
        <Link href="/games/jackpot-dice/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image
              src="/img/game.png"
              alt="Jackpot Dice"
              height={56}
              width={56}
            />
            Jackpot Dice
          </div>
        </Link>
      </div>
      <p>PVE</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/crash/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image src="/img/game.png" alt="Crash" height={56} width={56} />
            Crash
          </div>
        </Link>
        <Link href="/games/mines/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image src="/img/game.png" alt="Mines" height={56} width={56} />
            Mines
          </div>
        </Link>
        <Link href="/games/dice/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image src="/img/game.png" alt="Dice" height={56} width={56} />
            Dice
          </div>
        </Link>
      </div>
      <p>Прокачка уровня</p>
      <div className="flex flex-col mt-1">
        <Link href="/games/clicker/">
          <div className="btn py-2 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900 flex items-center gap-2">
            <Image src="/img/game.png" alt="Кликер XP" height={56} width={56} />
            Кликер XP
          </div>
        </Link>
      </div>

      <div className="flex ">
        <Button className="flex-grow p-2" variant="ghost">
          <Icons.flag />
        </Button>
        <Button className="flex-grow p-2" variant="ghost">
          <Volume2Icon />
        </Button>
        <Button className="flex-grow p-2" variant="ghost">
          <SettingsIcon />
        </Button>
        <Button className="flex-grow p-2" variant="ghost">
          <BellIcon />
        </Button>
      </div>

      <div className="flex mb-4 px-1 py-2 bg-center border gray rounded-3xl w-auto">
        <Button
          className="w-1/4 p-2 bg-clip-padding border-1 h-11"
          variant="ghost"
        >
          <Icons.vk />
        </Button>
        <Button
          className="w-1/4 p-2 bg-clip-padding border-1 h-11"
          variant="ghost"
        >
          <Icons.tg />
        </Button>
        <Button
          className="w-1/4 p-1 bg-clip-padding border-1 h-11 m-10px"
          variant="ghost"
        >
          <Icons.group />
        </Button>
        <Button
          className=" w-1/4 p-1 bg-clip-padding border-1 h-11"
          variant="ghost"
        >
          <Icons.youtube />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
