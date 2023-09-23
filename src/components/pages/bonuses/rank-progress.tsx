import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronLeft, ChevronRight, Gem } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

const RankProgress = () => {
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
    <div className="relative">
      <Button variant="outline" size="icon" onClick={scrollLeft} className="absolute z-10 -translate-y-1/2 -left-3 top-1/2">
        <ChevronLeft />
      </Button>
      <Button variant="outline" size="icon" onClick={scrollRight} className="absolute z-10 -translate-y-1/2 -right-3 top-1/2">
        <ChevronRight />
      </Button>

      <div className="relative flex px-1 py-2 space-x-4 overflow-x-auto snap-x snap-mandatory no-scrollbar" ref={container}>
        <ProgressCard
          heading="Roll"
          description="Эмоция для чата"
          icon={<Image src="/img/dice.svg" alt="rank" width={40} height={40} />}
        />
        <ProgressCard
          heading=""
          description=""
          icon={<Image src="" alt="" width={0} height={0} />}
        />
        <ProgressCard
          heading="Roll"
          description="Эмоция для чата"
          icon={<Image src="/img/dice.svg" alt="rank" width={40} height={40} />}
        />
         <ProgressCard
          heading=""
          description=""
          icon={<Image src="" alt="" width={0} height={0} />}
        />
        <ProgressCard
          heading="Полыхаю"
          description="эмоции для чата"
          icon={<Image src="/img/полыхаю.png" alt="rank" width={40} height={40} />}
        />
        <ProgressCard
          heading="Воин"
          description="Достижения"
          icon={<Image src="/img/warrior.png" alt="rank" width={40} height={40} />}
        />
      </div>
      <div className=' flex flex-wrap pl-6 '>
        < div className=' w-1/9 p-2 items-center '>
          <Image src="/img/green_level.png" alt="level" width={10} height={10} className="w-1/3 mx-auto"/>
          <p className="text-center">7 уровень</p>
        </div>
      
        <div className='w-1/9 p-2'>
          <Image src="/img/green_level.png" alt="level" width={10} height={10} className="w-1/3 mx-auto" />
          <p className="text-center">8 уровень</p>
        </div>
   
        <div className='w-1/8 p-2'>
          <Image src="/img/green_level.png" alt="level" width={30} height={30} className="w-1/3 mx-auto"/>
          <p className="text-center">9 уровень</p>
        </div>
        <div className='w-1/8 p-2'>
          <Image src="/img/level_10.png" alt="level" width={30} height={30} className="w-1/4 mx-auto mt-2"/>
          <p className="text-center">10 уровень</p>
        </div>
        <div className='w-1/8 p-2'>
          <Image src="/img/level_11.png" alt="level" width={10} height={10} className="w-1/3 mx-auto"/>
          <p className="text-center">11 уровень</p>
        </div>
        <div className='w-1/8 p-2'>
          <Image src="/img/level_11.png" alt="level" width={30} height={30} className="w-1/3 mx-auto"/>
          <p className="text-center">12 уровень</p>
        </div>
         <div className='w-1/8 p-2'>
          <Image src="/img/level_11.png" alt="level" width={30} height={30} className="w-1/3 mx-auto"/>
          <p className="text-center">13 уровень</p>
        </div>

      </div>
    </div>

    
  );
};

export default RankProgress;

const ProgressCard = ({
  icon,
  heading,
  description,
  className,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className="relative snap-center snap-always group w-[140px] min-w-[140px] h-[140px]">
      <div className={cn('absolute w-[100.5%] transition-all rounded-3xl -inset-px bg-gradient-to-br via-transparent border border-slate-900', className)}></div>
      <div className="relative w-full h-full px-5 py-4 overflow-hidden rounded-3xl bg-background">
        <div className="relative flex flex-col h-full items-center">
          <div className="w-[40px] h-[40px]">{icon}</div>
          <p className="text-sm max-w-[70%] text-center">{heading}</p>
          <p className="text-xs max-w-[70%] text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};
