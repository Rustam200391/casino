import { Gem } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useMinesGameMinesAtom } from '@/components/pages/games/mines/state';

const MinesCard = () => {
  const [mines] = useMinesGameMinesAtom();

  return (
    <div className="relative col-span-5 p-2 md:col-span-3 bg-white/5 rounded-2xl">
      <div className="relative px-3 py-4 border border-stone-200 rounded-2xl">
        <Image
          className="object-cover"
          fill
          src="/img/mines-gradient.svg"
          alt="background"
        />
        <div className="relative">
          <div className="flex justify-center">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Gem className="w-8 h-8 text-green-600" />
                <p className="">{25 - mines}</p>
                <p className="text-neutral-500">Рубины</p>
              </div>
              <div className="flex items-center space-x-2">
                <Gem className="w-8 h-8 text-red-600 rotate-180" />
                <p className="">{mines}</p>
                <p className="text-neutral-500">Мины</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-5 gap-2 mt-3">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                className="flex items-center justify-center h-[70px] text-gray-500 bg-background rounded-2xl"
                key={i}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinesCard;
