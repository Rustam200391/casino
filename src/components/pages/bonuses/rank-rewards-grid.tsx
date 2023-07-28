import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const RankRewardsGrid = () => {
  return (
    <div className="mt-10 p-6">
      <p className="text-2xl font-bold text-center">
        Награды за активацию ранга
      </p>
      <p className="text-sm text-center text-green-500">Получено</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 w-full">
        <RankRewardCard
          heading="Денежный кейс"
          icon={<Image src="/img/case.svg" alt="rank" width={67} height={55} />}
        />
        <RankRewardCard
          heading="Денежный кейс"
          icon={<Image src="/img/case.svg" alt="rank" width={67} height={55} />}
        />
        <RankRewardCard
          heading="Денежный кейс"
          icon={<Image src="/img/case.svg" alt="rank" width={67} height={55} />}
        />
        <RankRewardCard
          heading="Денежный кейс"
          icon={<Image src="/img/case.svg" alt="rank" width={67} height={55} />}
        />
      </div>
    </div>
  );
};

export default RankRewardsGrid;

const RankRewardCard = ({
  icon,
  heading,
  className,
}: {
  icon: React.ReactNode;
  heading: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col w-[230px] h-[135px] p-5 items-center justify-between border rounded-3xl border-green-500',
        className,
      )}
    >
      <div className="w-[67px] h-[55px]">{icon}</div>
      <p className="text-lg max-w-[70%] text-center font-light">{heading}</p>
    </div>
  );
};