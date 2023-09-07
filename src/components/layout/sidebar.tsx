import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import {
  SettingsIcon,
  Volume2Icon,
  BellIcon,
  LanguagesIcon,
} from 'lucide-react';

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
        <Link href="/games/clicker/">
          <div className="btn p-4 text-left text-neutral-500 w-full rounded-2xl hover:bg-neutral-900">
            Кликер XP
          </div>
        </Link>
      </div>
       
      <div className="flex ">
        <Button className='flex-grow p-2' variant="ghost">
          <Icons.flag />
        </Button>
        <Button className='flex-grow p-2' variant="ghost">
          <Volume2Icon />
        </Button>
        <Button className='flex-grow p-2' variant="ghost">
          <SettingsIcon />
        </Button>
        <Button className='flex-grow p-2' variant="ghost">
          <BellIcon />
          </Button>
        </div>
    
      <div className="flex mb-4 pt-1 bg-center border-4 gray rounded-full w-auto	">
        
           <Button className='w-1/4 p-1 bg-blue-800 border-1 h-11' variant="ghost">
             <Icons.vk />
           </Button>
           <Button className='w-1/4 p-2 bg-clip-padding border-1 h-11 ' variant="ghost">
             <Icons.tg />
           </Button>
           <Button className='w-1/4 p-1 bg-clip-padding border-1 h-11 m-10px' variant="ghost">
             <Icons.group />
           </Button>
           <Button className=' w-1/4 p-1 bg-clip-padding border-1 h-11' variant="ghost">
             <Icons.youtube />
         </Button>
      </div>
    </div>
  );
};

export default Sidebar;
