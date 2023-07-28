import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import {Button} from "@/components/ui/button";

const StarterBonusesGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold">Стартовые бонусы</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
          <BonusCard
              title="Бонус"
              description="за реферальную ссылку"
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
              description="за реферальную ссылку"
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
              description="за реферальную ссылку"
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
      </div>
    </div>
  );
};

export default StarterBonusesGrid;
