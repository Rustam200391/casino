import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import React, { ComponentProps, PropsWithChildren, useState } from 'react';

const BetSelector = () => {
  const [betAmount, setBetAmount] = useState<string | number | undefined>();
  const [multiplicator, setMultiplicator] = useState(20.98);

  return (
    <div className="flex flex-col justify-between col-span-5 p-5 md:col-span-2 bg-white/5 rounded-2xl">
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
            className="px-6 mt-3 text-xl border rounded-full border-stone-400 h-14"
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
        <p className="mt-8 text-xl font-semibold">Авто-вывод</p>
        <div className="relative flex pr-6 mt-3 space-x-2 text-base border rounded-full border-stone-400 h-14">
          <div className="flex w-[90px] absolute h-[inherit] items-center justify-center -top-px -left-px px-5 text-lg border rounded-full border-stone-400">
            {multiplicator}x
          </div>
          <div className="min-w-[90px]"></div>
          <div className="flex items-center justify-center w-full">
            <Slider
              // className="border rounded-full border-neutral-800"
              onValueChange={e => {
                setMultiplicator(e[0]);
              }}
              value={[multiplicator]}
              step={0.1}
              max={50}
              min={1}
            />
          </div>
        </div>

        <div className="grid grid-flow-col overflow-auto no-scrollbar grid-rows-1 gap-1.5 mt-2 py-1">
          {[1.1, 1.5, 2, 2.5, 3, 'Выключить'].map(i => (
            <BetButton
              key={i}
              onClick={() => {
                if (i === 'Выключить') setMultiplicator(0);
                else setMultiplicator(i as number);
              }}
            >
              {typeof i === 'string' ? i : `${i}x`}
            </BetButton>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full border-b border-neutral-800"></div>
        <div className="flex justify-between mt-4">
          <p className="text-xl">Возможный выигрыш</p>
          <p className="text-lg">1.05x</p>
        </div>
        <p className="mt-2 text-xl text-green-500">+ 12,640.00 BTC</p>
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
