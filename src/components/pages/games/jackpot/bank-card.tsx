import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const BankCard = () => {
  return (
    <div className="px-2 py-3 bg-white/5 rounded-2xl">
      <div className="flex space-x-4 text-sm justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500">Ставка</p>
          <div className="flex space-x-1">
            <p>100</p>
            <p className="text-gray-600">BTC</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500">Шанс</p>
          <div className="flex space-x-1">5%</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500"># билетов</p>
          <div className="flex space-x-1">0</div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center p-6 mt-4 bg-background rounded-2xl"
        style={{
          background: 'radial-gradient(61.21% 61.21% at 50.00% 50.00%, #131F1B 0%, #0A0A0A 100%)',
        }}
      >
        <p className="text-xl font-semibold text-white">Банк</p>
        <p className="text-4xl text-green-400">1 200 640.00 ₽</p>
      </div>

      <div className="flex flex-wrap items-center justify-between px-2 mt-4 space-x-2">
        <div>
          <p className="text-sm">Удача дня</p>
          <UserItem />
        </div>
        <div>
          <p className="text-sm">Предыдущая игра</p>
          <UserItem />
        </div>
      </div>
    </div>
  );
};

export default BankCard;

const UserItem = () => {
  return (
    <div className="flex mt-2 space-x-2">
      <div className="p-1.5 border rounded-full h-fit border-neutral-500 flex">
        <Avatar className="">
          <AvatarImage src="https://avatars.dicebear.com/api/initials/Dmitrii%20Malakhov.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-xs text-gray-600">sloter_porter</p>
        {/* <div className="flex items-center space-x-1">
        </div> */}
        <p className="mt-2 text-xs">Шанс 45%</p>
        <p className="text-sm text-green-400">1 200 640 ₽</p>
      </div>
    </div>
  );
};
