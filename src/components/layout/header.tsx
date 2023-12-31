import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  ActivitySquare,
  Bell,
  Bomb,
  ChevronDown,
  Dices,
  DollarSign,
  Gamepad2,
  Gem,
  Globe,
  Home,
  Joystick,
  Menu,
  Settings,
  User,
  Volume2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useSignInModal } from '@/components/auth/sign-in-modal';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { useBalanceModalAtom } from '@/components/account/balance-modal';
import BalanceDropdown from '@/components/account/balance-dropdown';
import AccountDropdown from '@/components/account/account-dropdown';
import { toast } from 'react-toastify';

const headerNav = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Бонусы и активность',
    titleShort: 'Бонусы',
    href: '/bonuses',
  },
  {
    title: 'Реферальная система',
    titleShort: 'Рефералы',
    href: '/referral',
  },
  {
    title: 'Помощь',
    href: '/help',
  },
];

function UserProgress({ sheetView }: { sheetView?: boolean }) {
  const { data: loadDataResponse, error } = useLoadDataQuery();

  const nextLevelExpNeed =
    Number(loadDataResponse?.result.data.experience_next_level) -
    Number(loadDataResponse?.result.data.experience);

  useEffect(() => {
    if (error) {
      toast.error(
        'Произошла ошибка при загрузке данных: ' + (error as Error).message,
      );
    }
  }, [error]);

  return (
    <div
      className={cn(
        'relative items-center  py-1 pl-2 border divide-x  rounded-2xl border-neutral-800 divide-neutral-800',
        sheetView ? 'flex' : 'md:flex hidden',
      )}
    >
      <div className="absolute border-none top-0 w-full h-10 pointer-events-none from-transparent to-transparent bg-gradient-to-r from-10% to-90% via-white/10"></div>

      <div className="flex items-center mr-2 space-x-2 border-none cursor-default">
        <div className="p-1.5 border rounded-full border-neutral-500">
          <Avatar>
            <AvatarImage src={loadDataResponse?.result.data.avatar || ''} />
            <AvatarFallback>
              {loadDataResponse?.result.data?.name
                ? loadDataResponse?.result.data.name
                    .substring(0, 2)
                    .toUpperCase()
                : '-'}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">{loadDataResponse?.result.data.name}</p>
            <div className="flex">
              <p className="flex rounded-lg bg-lime-900 text-[16px] font-bold text-lime-300 px-1.5">
                {loadDataResponse?.result.data.level}
              </p>
            </div>
          </div>
          <Progress
            value={loadDataResponse?.result.data.experience || 0}
            max={loadDataResponse?.result.data.experience_next_level || 0}
            className={cn('mt-1.5 w-[150px]', !sheetView && 'hidden 2xl:block')}
          />
        </div>
        <div className="hidden mt-2 text-right 2xl:block">
          {/* TODO: Добавить счет до нового уровня, сейчас текущее количество опыта */}
          <p className="text-sm font-semibold">{nextLevelExpNeed} XP</p>
          <p className="text-xs font-light text-neutral-500">
            до нового уровня
          </p>
        </div>
      </div>

      {!sheetView && (
        <AccountDropdown
          trigger={
            <ChevronDown className="w-12 h-12 px-2 ml-2 transition hover:text-neutral-400" />
          }
        />
      )}
    </div>
  );
}

const Header = () => {
  const { route } = useRouter();
  const [, setShowSignIn] = useSignInModal();
  const { data: loadDataResponse } = useLoadDataQuery();
  const signedIn = loadDataResponse?.result.auth;
  const [, setBalanceModalOpen] = useBalanceModalAtom();

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 border-b md:space-x-4 border-neutral-800">
        <div className="flex items-center space-x-4 text-center md:space-x-6 xl:space-x-10">
          <Link href="/">
            <Image
              src="/img/syndicate-logo.svg"
              alt="logo"
              width={87}
              height={57}
            />
          </Link>
          <div className="items-center hidden grid-flow-col grid-rows-1 xl:gap-6 xl:grid 2xl:gap-10">
            {headerNav.map((i) => (
              <div
                className="relative flex items-center justify-center h-full"
                key={i.title}
              >
                <Link
                  href={i.href}
                  className={cn(
                    'transition-colors hover:text-white whitespace-nowrap',
                    route === i.href ? 'text-white' : 'text-gray-500',
                  )}
                >
                  <span className="hidden 2xl:block">{i.title}</span>
                  <span className="block 2xl:hidden">
                    {i.titleShort ?? i.title}
                  </span>
                </Link>
                <div
                  className={cn(
                    'absolute transition opacity-0 -left-1/4 w-[150%] h-px bg-gradient-to-r from-neutral-800 via-white to-neutral-800 -bottom-[2.1rem]',
                    route === i.href && 'opacity-100',
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {signedIn && (
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Button
                className="hidden sm:flex"
                variant="accent"
                size="lg"
                glow="accent"
                onClick={() => setBalanceModalOpen(true)}
              >
                <Gem className="w-5 h-5 mr-2" />
                Пополнить
              </Button>

              <div className="relative group">
                <div className="absolute group-hover:w-full transition-all -inset-px w-[30%] bg-gradient-to-r from-green-600 via-transparent to-transparent rounded-full"></div>
                <BalanceDropdown
                  trigger={
                    <div className="relative flex items-center h-10 px-4 leading-none transition bg-black border rounded-full group-hover:bg-neutral-900/70 border-neutral-800 focus:outline-0">
                      <Gem className="w-5 h-5 mr-2 text-green-600" />
                      {loadDataResponse?.result.data.balance}
                      <p className="mx-2 text-neutral-500">RUBN</p>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  }
                />
              </div>
            </div>

            <UserProgress />
          </div>
        )}

        {!signedIn && (
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="accent"
              size="lg"
              glow="accent"
              onClick={() => setShowSignIn(true)}
            >
              <Globe className="w-5 h-5 mr-2" />
              Регистрация
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowSignIn(true)}
            >
              <User className="w-5 h-5 mr-2" />
              Вход
            </Button>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 z-10 flex w-full h-24 bg-background justify-evenly md:hidden">
        <Link
          href="/games"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex-col space-y-1 rounded-md h-14',
          )}
        >
          <Gamepad2 className="w-5 h-5" />
          Игры
        </Link>
        <Link
          href="/wallet"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex-col space-y-1 rounded-md h-14',
          )}
        >
          <DollarSign className="w-5 h-5" />
          Кошелек
        </Link>
        <Link
          href="/profile/[[...slug]]"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex-col space-y-1 rounded-md h-14',
          )}
        >
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
  const [, setOpen] = useBalanceModalAtom();

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
            glow="accent"
            onClick={() => setOpen(true)}
          >
            <Gem className="w-5 h-5 mr-2" />
            Пополнить
          </Button>
          <Button variant="outline" size="lg">
            <DollarSign className="w-5 h-5 mr-2" />
            Вывод средств
          </Button>

          <Link
            href="/profile/[[...slug]]"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start',
            )}
          >
            <Home className="mr-2" />
            Главная
          </Link>
          <Link
            href="/profile/[[...slug]]"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start',
            )}
          >
            <Joystick className="mr-2" />
            Jackpot
          </Link>
          <Link
            href="/profile/[[...slug]]"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start',
            )}
          >
            <Dices className="mr-2" />
            Dice
          </Link>
          <Link
            href="/profile/[[...slug]]"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start',
            )}
          >
            <ActivitySquare className="mr-2" />
            Crash
          </Link>
          <Link
            href="/profile/[[...slug]]"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start',
            )}
          >
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
