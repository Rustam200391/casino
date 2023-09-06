import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import {Button} from "@/components/ui/button";

const ActivityBonusesGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold">Бонусы за активность</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        <BonusCard
          title="Бонус"
          description="за рубины из чата"
          className="xl:col-span-3"
          contentNode={
            <>
                В любой момент в чате может появиться ценный рубин. Кто первый нажмет на него, тому и достанется Бонус!
            </>
          }
          actionNode={
              <Button className="w-full">Получить</Button>
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
              <Button className="w-full">Получить</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за реферальную карту"
          className="xl:col-span-3"
          contentNode={
            <ol>
                <li className="before:content-['1'] space-y-4">Ознакомьтесь с реферальной системой</li>
                <li>Пригласите игрока по промокоду</li>
                <li>Активируйте реферальную карту и получай бонусы</li>
            </ol>
          }
          actionNode={
              <Button className="w-full">Получить</Button>
          }
        />
      </div>
    </div>
  );
};

export default ActivityBonusesGrid;
