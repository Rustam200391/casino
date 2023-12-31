import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';


const ActivityBonusesGrid = () => {

  return (
    <div className="mt-1">
      <p className="text-2xl font-bold">Бонусы за активность</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 ">
        <BonusCard
          title="Бонус"
          description="за рубины из чата"
          className=" bg-gradient-to-b from-black to-[#0a1573] relative"
          contentNode={
            <div className='mt-5 relative pt-6'>
              В любой момент в чате может появиться ценный рубин. Кто первый нажмет на него, тому и достанется Бонус!
              <div className="relative">
                <div className="flex absolute inset-0 bg-[#171930] opacity-75 blur-xl"></div>
                <div className="relative flex flex-wrap rounded-full">
                  <div className="flex justify-center pr-2 w-1/4">
                   
                    <Image
                      src="/img/Syndicat_logo.png"
                      alt="syndicat"
                      height={56}
                      width={56}
                    />
                  </div>
                  <div className="relative text-center font-manro text-sm not-italic
                    font-bold leading-4 tracking-tight pr-2 pl-2 pt-2 w-2/4">Модератор</div>
                  <div className=" inline-flex p-1 pt-2 justify-start gap-10 h-8 bg-[#3E0C0C] w-1/4">
                    <p className='text-[#FC3232] text-center font-manro text-xs not-italic
                    font-bold leading-4 tracking-tight '>Админ</p></div>
                  <div className='mr-4  w-3/4'>
                    <div className="flex justify-center ml-4">
                      <Image
                        src="/img/emerald.png"
                        alt="Dice"
                        height={66}
                        width={66}
                        className="flex justify-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          }
         actionNode={
              <Button className="w-full border-2 border-white text-white  bg-blue-900">Войдите в аккаунт</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за активность в чате"
          className="bg-gradient-to-b from-black to-[#740a1d] relative"
          contentNode={
            <div className="-mt-1 relative m-3 pt-1">
              Каждые 6 часов в чате начинается раздача рубинов случайный пользователям. Чтобы повысить шанс, будьте активнее и общайтесь!
            </div>
          }
          actionNode={
              <Button className="w-full border-2 border-white text-white bg-red-900 whitespace nowrap ">Написать сообщение в чат</Button>
        }
        />
        <BonusCard
          title="Бонус"
          description="за реферальную карту"
          className="bg-gradient-to-b from-black to-[#2f5e18] pt-0"
          contentNode={
               <ul className='pt-3'>
                <li className="flex items-around">
                  <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2 ">
                    1
                  </div>
                  <span>Ознакомьтесь с реферальной системой</span>
                </li>
                <li className="flex items-around">
                  <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                    2
                  </div>
                  <span>Пригласите игрока по промокоду</span>
                </li>
                <li className="flex items-around">
                  <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                    3
                  </div>
                  <span className="">
                    Активируйте реферальную карту и получай бонусы
                  </span>
                </li>
              </ul>
  
          }
          actionNode={
              <Button className="w-full bg-green-700 text-white border-2 border-white">Реферальная система</Button>
          }
        />
      </div>
    </div>
  );
};

export default ActivityBonusesGrid;
