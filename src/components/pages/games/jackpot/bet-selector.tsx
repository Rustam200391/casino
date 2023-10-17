import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { ComponentProps, PropsWithChildren, useState } from 'react';

const BetSelector = () => {
  const [betAmount, setBetAmount] = useState<string | number | undefined>();

  return (
    <div className="flex flex-col justify-between p-5 bg-white/5 rounded-2xl">
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
      </div>

      <Button glow="accent" variant="accent" size="lg" className="w-full mt-12">
        Играть
      </Button>
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
