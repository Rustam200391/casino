import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import {Button} from "@/components/ui/button";

const ActivityBonusesGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Бонусы за активность</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        <BonusCard
          title="Бонус"
          description="за рубины из чата"
          className="xl:col-span-3 p-5"
          contentNode={
            <>
                В любой момент в чате может появиться ценный рубин. Кто первый нажмет на него, тому и достанется Бонус!
            </>
          }
          actionNode={
              <Button className="w-full">Войдите</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за активность в чате"
          className="xl:col-span-3"
          contentNode={
            <>
               Каждые 6 часов в чате начинается раздача рубинов случайный пользователям. Чтобы повысить шанс, будьте активнее и общайтесь!
            </>
          }
          actionNode={
              <Button className="w-full">Написать сообщение в чат</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за реферальную карту"
          className="xl:col-span-3 p-5"
          contentNode={
            <ul>
                <li className="flex items-center">
                    <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">1</div>
                    <span>Ознакомьтесь с реферальной системой</span>
                </li>
                <li className="flex items-center">
                    <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">2</div>
                    <span>Пригласите игрока по промокоду</span>
                </li>
                <li className='flex items-center'>
                    <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">3</div>
                    <span>Активируйте реферальную карту и получай бонусы</span>
                </li>
            </ul>
          }
          actionNode={
              <Button className="w-full bg-green-400 text-white">Реферальная система</Button>
          }
        />
      </div>
    </div>
  );
};

export default ActivityBonusesGrid;
