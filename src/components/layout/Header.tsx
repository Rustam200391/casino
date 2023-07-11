import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  ActivitySquare,
  Bell,
  Bomb,
  ChevronDown,
  Diamond,
  Dices,
  DollarSign,
  Gamepad,
  Gamepad2,
  Gem,
  Home,
  Joystick,
  Menu,
  Settings,
  User,
  Volume,
  Volume2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const headerNav = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Бонусы и активность',
    href: '/bonuses',
  },
  {
    title: 'Реферальная система',
    href: '/referral',
  },
  {
    title: 'Помощь',
    href: '/help',
  },
];

function UserProgress({ sheetView }: { sheetView?: boolean }) {
  return (
    <div
      className={cn(
        'relative items-center  py-1 pl-2 border divide-x  rounded-2xl border-neutral-800 divide-neutral-800',
        sheetView ? 'flex' : 'md:flex hidden'
      )}
    >
      <div className="absolute border-none top-0 w-full h-10 pointer-events-none from-transparent to-transparent bg-gradient-to-r from-10% to-90% via-white/10"></div>

      <div className="flex items-center mr-2 space-x-2 border-none">
        <div className="p-1.5 border rounded-full border-neutral-500">
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">Slote_01</p>
            <div className="flex">
              <p className="flex rounded-lg bg-lime-900 text-[16px] font-bold text-lime-300 px-1.5">20</p>
            </div>
          </div>
          <Progress value={60} className={cn('mt-1.5 w-[150px]', !sheetView && 'hidden 2xl:block')} />
        </div>
        <div className="hidden mt-2 text-right 2xl:block">
          <p className="text-sm font-semibold">1744 XP</p>
          <p className="text-xs font-light text-neutral-500">до нового уровня</p>
        </div>
      </div>

      {!sheetView && <ChevronDown className="w-12 h-12 px-2 ml-2 transition cursor-pointer hover:text-neutral-400" />}
    </div>
  );
}

const Header = () => {
  const { route } = useRouter();

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 space-x-4 border-b border-neutral-800">
        <div className="flex items-center space-x-4 md:space-x-6 xl:space-x-10">
          <Image src="/img/syndicate-logo.svg" alt="logo" width={87} height={57} />
          <div className="items-center hidden space-x-4 xl:flex md:space-x-6 xl:space-x-10">
            {headerNav.map(i => (
              <div className="relative" key={i.title}>
                <Link href={i.href} className={cn('transition-colors hover:text-white', route === i.href ? 'text-white' : 'text-gray-500')}>
                  {i.title}
                </Link>
                <div
                  className={cn(
                    'absolute transition opacity-0 -left-1/4 w-[150%] h-px bg-gradient-to-r from-neutral-800 via-white to-neutral-800 -bottom-[2.1rem]',
                    route === i.href && 'opacity-100'
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Button
              className="hidden sm:flex"
              variant="accent"
              size="lg"
              style={{
                boxShadow: '0 0 32px #22c55e',
              }}
            >
              <Gem className="w-5 h-5 mr-2" />
              Пополнить
            </Button>

            <div className="relative group">
              <div className="absolute -inset-px w-[30%] bg-gradient-to-r from-green-600 via-transparent to-transparent rounded-full"></div>
              <button className="relative flex items-center h-10 px-4 leading-none bg-black border rounded-full border-neutral-800">
                <Gem className="w-5 h-5 mr-2 text-green-600" />
                {0.00002}
                <p className="mx-2 text-neutral-500">RUBN</p>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          <UserProgress></UserProgress>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 flex w-full h-24 justify-evenly md:hidden">
        <Link href="/games" className={cn(buttonVariants({ variant: 'ghost' }), 'flex-col space-y-1 rounded-md h-14')}>
          <Gamepad2 className="w-5 h-5" />
          Игры
        </Link>
        <Link href="/wallet" className={cn(buttonVariants({ variant: 'ghost' }), 'flex-col space-y-1 rounded-md h-14')}>
          <DollarSign className="w-5 h-5" />
          Кошелек
        </Link>
        <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'flex-col space-y-1 rounded-md h-14')}>
          <User className="w-5 h-5" />
          Профиль
        </Link>
        <MobileSheet />
      </div>
    </>
  );
};

export default Header;

const MobileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex-col space-y-1 rounded-md h-14" variant="ghost">
          <Menu className="w-5 h-5" />
          Меню
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div
          className="flex flex-col px-4 py-4 space-y-6 overflow-x-hidden overflow-y-auto"
          style={{
            height: 'calc(100vh - 120px)',
          }}
        >
          <UserProgress sheetView />
          <Button
            variant="accent"
            size="lg"
            style={{
              boxShadow: '0 0 32px #22c55e',
            }}
          >
            <Gem className="w-5 h-5 mr-2" />
            Пополнить
          </Button>
          <Button variant="outline" size="lg">
            <DollarSign className="w-5 h-5 mr-2" />
            Вывод средств
          </Button>

          <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start')}>
            <Home className="mr-2" />
            Главная
          </Link>
          <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start')}>
            <Joystick className="mr-2" />
            Jackpot
          </Link>
          <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start')}>
            <Dices className="mr-2" />
            Dice
          </Link>
          <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start')}>
            <ActivitySquare className="mr-2" />
            Crash
          </Link>
          <Link href="/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start')}>
            <Bomb className="mr-2" />
            Mines
          </Link>
        </div>
        <div className="flex px-8 pt-4 space-x-6">
          <Button size="icon" variant="ghost">
            <Volume2 className="w-8 h-8" />
          </Button>
          <Button size="icon" variant="ghost">
            <Settings className="w-8 h-8" />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell className="w-8 h-8" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
