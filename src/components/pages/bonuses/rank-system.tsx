import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import RankRewardsGrid from '@/components/pages/bonuses/rank-rewards-grid';

const RankSystem = () => {
  const container = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const elem = container.current;
    console.log(elem?.scrollLeft);

    elem?.scroll({ behavior: 'smooth', left: elem?.scrollLeft - 300 });
  };
  const scrollRight = () => {
    const elem = container.current;
    console.log(elem?.scrollLeft);

    elem?.scroll({ behavior: 'smooth', left: elem?.scrollLeft + 300 });
  };

  return (
    <div className="flex flex-col border border-neutral-800 rounded-3xl">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          className="absolute z-10 -translate-y-1/2 -left-3 top-1/2"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          className="absolute z-10 -translate-y-1/2 -right-3 top-1/2"
        >
          <ChevronRight />
        </Button>

        <div
          className="relative flex px-1 py-2 space-x-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          ref={container}
        >
          <ProgressCard
            heading="Ранг 1"
            description="Новичок"
            status="Активирован"
            icon={
              <Image src="/img/boss.png" alt="rank" width={94} height={122} />
            }
          />
          <ProgressCard
            heading="Ранг 2"
            description="Падаван"
            status="Активирован"
            icon={
              <Image src="/img/boss.png" alt="rank" width={94} height={122} />
            }
          />
          <ProgressCard
            heading="Ранг 3"
            description="Опытный"
            status="Ваш ранг"
            icon={
              <Image src="/img/boss.png" alt="rank" width={94} height={122} />
            }
          />
        </div>
      </div>

      <RankRewardsGrid />
    </div>
  );
};

export default RankSystem;

const ProgressCard = ({
  icon,
  heading,
  description,
  status,
  className,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
  status: string;
  className?: string;
}) => {
  return (
    <div className="relative snap-center snap-always group w-[140px] min-w-[223px] h-[223px]">
      <div
        className={cn(
          'absolute w-[100.5%] transition-all rounded-3xl -inset-px bg-gradient-to-br via-transparent border border-slate-900',
          className,
        )}
      ></div>
      <div className="relative w-full h-full px-5 py-4 overflow-hidden rounded-3xl bg-background">
        <div className="relative flex flex-col h-full items-center">
          <div className="w-[94px] h-[122px]">{icon}</div>
          <p className="text-sm max-w-[70%] text-center">{heading}</p>
          <p className="text-lg max-w-[70%] text-center font-semibold">
            {description}
          </p>
          <p className="text-sm max-w-[70%] text-center text-green-500">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};
