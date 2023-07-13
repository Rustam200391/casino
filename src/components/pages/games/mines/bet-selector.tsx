import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Gem } from 'lucide-react';
import React, { ComponentProps, PropsWithChildren, useState } from 'react';

const BetSelector = () => {
  const [betAmount, setBetAmount] = useState<string | number | undefined>();
  const [mines, setMines] = useState(14);

  return (
    <div className="flex flex-col justify-between col-span-2 p-5 bg-white/5 rounded-2xl">
      <div>
        <p className="text-xl font-semibold">Сумма ставки</p>
        <div className="relative">
          <Input
            value={betAmount}
            onChange={e => {
              const v = e.target.value;
              setBetAmount(v);
            }}
            // @ts-expect-error thats fine
            onBlur={() => setBetAmount(isNaN(+betAmount) ? 0 : +betAmount)}
            placeholder="100"
            className="px-6 mt-3 text-base border rounded-full border-stone-400 h-14"
          />
          <div className="absolute flex space-x-1 -translate-y-1/2 top-1/2 right-4">
            <BetButton>Макс</BetButton>
            <BetButton>Мин</BetButton>
          </div>
        </div>
        <div className="grid py-1 grid-flow-col overflow-auto no-scrollbar grid-rows-1 gap-1.5 mt-2">
          {[0.1, 0.5, 1, 5, 20, 100, 500].map(i => (
            <BetButton key={i} onClick={() => setBetAmount(i)}>
              {i}
            </BetButton>
          ))}
        </div>
        <p className="mt-8 text-xl font-semibold">Количество мин на поле</p>
        <div className="relative flex pr-6 mt-3 space-x-2 text-base border rounded-full border-stone-400 h-14">
          <div className="flex absolute h-[inherit] items-center justify-center -top-px -left-px px-5 text-lg border rounded-full w-fit border-stone-400">
            <Gem className="mr-2 text-red-500 rotate-180" />
            {mines}
          </div>
          <div className="min-w-[90px]"></div>
          <div className="flex items-center justify-center w-full">
            <Slider
              // className="border rounded-full border-neutral-800"
              onValueChange={e => {
                setMines(e[0]);
              }}
              value={[mines]}
              step={1}
              max={20}
              min={1}
            />
          </div>
        </div>

        <div className="grid grid-flow-col overflow-auto no-scrollbar grid-rows-1 gap-1.5 mt-2 py-1">
          {['Мин', 2, 5, 10, 15, 20, 'Макс'].map(i => (
            <BetButton
              key={i}
              onClick={() => {
                if (i === 'Мин') setMines(2);
                else if (i === 'Макс') setMines(20);
                else setMines(i as number);
              }}
            >
              {i}
            </BetButton>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center mt-8 space-x-2">
          <Switch id="airplane-mode" className="data-[state=checked]:bg-green-500" />
          <Label htmlFor="airplane-mode">Авто-игра</Label>
        </div>

        <Button glow="accent" variant="accent" size="lg" className="w-full mt-6">
          Играть
        </Button>
      </div>
    </div>
  );
};

export default BetSelector;

interface BetButtonProps extends ComponentProps<'button'>, PropsWithChildren {}

const BetButton = (props: BetButtonProps) => {
  return (
    <button {...props} className="px-2 py-1 text-sm transition rounded-lg cursor-pointer hover:bg-white/20 bg-white/10">
      {props.children}
    </button>
  );
};
