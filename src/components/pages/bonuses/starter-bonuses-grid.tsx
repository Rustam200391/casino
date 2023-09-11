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
              description="за подписку на Телеграм канал"
              className="bg-gradient-to-b from-black to-green-700"
              contentNode={
                  <ul>
                      <li className="flex items-around">
                          <div className="bg-green-500 h-7 w-8 text-black rounded-full flex items-center justify-center mr-2 ">v</div>
                          <span className='text-green-300'>Подпишитесь на телеграм канал</span>
                      </li>
                      <li className="flex items-around">
                           <div className="bg-green-500 h-7 w-9 text-black rounded-full flex items-center justify-center mr-2">v</div>
                           <span className='text-green-300'>Привяжите телеграм аккаунт к профилю</span>
                     </li>
                  </ul>
              }
              actionNode={
                  <Button className="w-full bg-green-900 text-green-500 border-2 border-white">Получено</Button>
              }
          />
          <BonusCard
              title="Бонус"
              description="за сообщение в чат поддержки"
              className="bg-gradient-to-b from-black to-violet-900"
              contentNode={
                   <ul>
                      <li className="flex items-around">
                          <div className="bg-gray-500 h-7 w-8 text-white rounded-full flex items-center justify-center mr-2 ">1</div>
                          <span className='text-white'>Напишите в чат поддержки слово <div className='bg-gray-600 rounded-full container'>ПРОМОКОД</div></span>
                      </li>
                      <li className="flex items-around">
                           <div className="bg-gray-500 h-7 w-9 text-white rounded-full flex items-center justify-center mr-2">2</div>
                           <span className='text-white'>Получите промокод и активируйте</span>
                     </li>
                  </ul>
              }
              actionNode={
                  <Button className="w-full bg-purple-900 text-white border-2 border-white">Чат поддержки</Button>
              }
          />
          <BonusCard
              title="Бонус"
              description="за заполнение профиля"
              className="bg-gradient-to-b from-black to-gold"
                  contentNode={
                       <ul>
                      <li className="flex items-around">
                          <div className="bg-gray-500 h-7 w-8 text-white rounded-full flex items-center justify-center mr-2  ">1</div>
                          <span className='text-white underline'>Подключите двухфакторную аутентификацию </span>
                      </li>
                      <li className="flex items-around">
                           <div className="bg-gray-500 h-7 w-9 text-white rounded-full flex items-center justify-center mr-2">2</div>
                           <span className='text-white underline'>Укажите Имя и Фамилию</span>
                          </li>
                           <li className="flex items-around">
                           <div className="bg-gray-500 h-7 w-9 text-white rounded-full flex items-center justify-center mr-2">3</div>
                           <span className='text-white underline'>Подтвердите почту</span>
                     </li>
                  </ul>
                          
               
              }
              actionNode={
                  <Button className="w-full bg-gold text-white border-2 border-white">Получить</Button>
              }
          />
      </div>
    </div>
  );
};

export default StarterBonusesGrid;
