import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const JackpotGameCard = () => {
  const [state, setState] = useState<'waiting' | 'progress'>('waiting');
  return (
    <div
      className="relative col-span-1 p-5 py-24 border border-gray-500 md:col-span-2 bg-white/5 rounded-2xl"
      style={{
        background: 'radial-gradient(84.92% 150.00% at 50.00% 138.75%, rgba(12, 230, 167, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%);',
      }}
    >
      {state === 'waiting' && <GameCountDown />}
      {state === 'progress' && <GameInProgress />}
    </div>
  );
};

export default JackpotGameCard;

const GameCountDown = () => {
  return (
    <div className="relative flex flex-col h-full space-y-4">
      <Image src="/img/pregame-countdown.png" alt="" fill className="absolute top-0 left-0 object-contain -translate-y-2/3" />
      <Image src="/img/pregame-countdown.png" alt="" fill className="absolute top-0 left-0 object-contain rotate-180 translate-y-2/3" />
      <div className="flex flex-col items-center justify-center flex-1">
        <p className="text-sm text-center text-gray-500">До начала игры</p>
        <p className="text-5xl font-semibold">00:08</p>
      </div>
    </div>
  );
};

const GameInProgress = () => {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="relative flex flex-col items-center justify-center flex-1">
        <p className="absolute top-0 w-48 h-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400/50 left-1/2 blur-3xl"></p>
        <p className="text-xl text-green-500">12,640.00 BTC</p>
        <p className="relative text-purple-500 text-8xl">24.05x</p>
      </div>

      <Button className="w-full" glow="accent" variant="accent" size="lg">
        Забрать
      </Button>
    </div>
  );
};
