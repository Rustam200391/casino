import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronLeft, ChevronRight, Gem } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

const ActivitiesCarousel = () => {
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
        <ActivityCard
          className="from-green-600 to-green-600"
          text="Регистрируйся и получай бонусы"
          background={<Image src="/img/register.jpg" layout="fill" alt="background" objectFit="cover" />}
          actions={
            <>
              <Button variant="outline">Войти</Button>
              <Button variant="outline">Создать аккаунт</Button>
            </>
          }
        />
        <ActivityCard
          className="from-orange-600 to-orange-600"
          text="ПОДПИСЫВАЙСЯ НА СОЦ.СЕТИ И ПОЛУЧАЙ ПРОМОКОДЫ!"
          background={<Image src="/img/subscribe.jpg" layout="fill" alt="background" objectFit="cover" />}
          actions={
            <>
              <Button variant="outline">VK</Button>
              <Button variant="outline">Telegram</Button>
            </>
          }
        />
        <ActivityCard
          className="from-white to-white"
          text="СТАНЬ ОБЛАДАТЕЛЕМ РЕФЕРАЛЬНОЙ КАРТЫ"
          background={<Image src="/img/register.jpg" layout="fill" alt="background" objectFit="cover" />}
          actions={
            <>
              <Button variant="outline">Получить</Button>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ActivitiesCarousel;

const ActivityCard = ({
  actions,
  background,
  text,
  className,
}: {
  background: React.ReactNode;
  text: string;
  actions: React.ReactNode;
  className: string;
}) => {
  return (
    <div className="relative snap-center snap-always group w-[400px] min-w-[400px] h-[160px]">
      <div className={cn('absolute w-[100.5%] transition-all rounded-3xl -inset-px bg-gradient-to-br via-transparent', className)}></div>
      <div className="relative w-full h-full px-5 py-4 overflow-hidden rounded-3xl bg-background">
        {background}
        <div className="relative flex flex-col justify-between h-full">
          <p className="text-xl italic uppercase font-extrabold max-w-[70%] text-left">{text}</p>
          <div className="flex items-center mt-4 space-x-2">{actions}</div>
        </div>
      </div>
    </div>
  );
};
