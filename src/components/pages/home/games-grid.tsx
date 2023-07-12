import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GamesGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold">Добро пожаловать в Syndicate</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-11">
        <GameCard
          title="Jackpot"
          href="/games/jackpot"
          background={<Image src="/img/jackpot.png" alt="background" fill className="object-cover" />}
          className="xl:col-span-5 xl:row-span-2"
        />
        <GameCard
          title="Mines"
          href="/games/jackpot"
          background={<Image src="/img/register.jpg" alt="background" fill className="object-cover" />}
          className="xl:col-span-3"
        />
        <GameCard
          title="Crash"
          href="/games/jackpot"
          background={<Image src="/img/register.jpg" alt="background" fill className="object-cover" />}
          className="xl:col-span-3"
        />
        <GameCard
          title="Jackpot Dice"
          href="/games/jackpot"
          background={<Image src="/img/register.jpg" alt="background" fill className="object-cover" />}
          className="xl:col-span-3"
        />
        <GameCard
          title="Dices"
          href="/games/jackpot"
          background={<Image src="/img/register.jpg" alt="background" fill className="object-cover" />}
          className="xl:col-span-3"
        />
      </div>
    </div>
  );
};

export default GamesGrid;

const GameCard = ({
  className,
  background,
  href,
  title,
}: {
  className?: string;
  background: React.ReactNode;
  href: string;
  title: string;
}) => {
  return (
    <div
      className={cn(
        'px-4 py-3 border relative overflow-hidden border-gray-500 transition hover:scale-[102%] hover:border-gray-400 min-h-[200px]  rounded-3xl',
        className
      )}
    >
      {background}
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm text-gray-400">12 000 ₽</p>
        </div>
        <Link href={href} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')}>
          Играть
        </Link>
      </div>
    </div>
  );
};
