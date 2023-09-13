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
              className="bg-gradient-to-b from-black to-green-600"
                  contentNode={
                      <>
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
                          <div className='relative '>
                            <Image src="/img/4.png" alt="цифра" height={56} width={56} className='float-right pt-10' />
                          </div>
                          <div className='flex pt-16'>
                               <div className='pl-20 pt-11'>
                                  <Image src="/img/emerald-mini.png" alt="emerald" height={36} width={36} /> 
                              </div>
                              <div className='justify-self-center pt-12'>20</div>
                          </div>
                          
                      </>  
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
                 <>
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
                    <div className='relative '>
                        <Image src="/img/5.png" alt="цифра" height={56} width={56} className='float-right pt-10' />
                          </div>
                          <div className='flex pt-16'>
                            <div className='pt-8 pl-20'>
                                <Image src="/img/emerald-mini.png" alt="emerald" height={36} width={36} /> 
                            </div>
                              <div className='justify-self-center pt-9'>20</div>
                        </div>
                </>
              }
              actionNode={
                  <Button className="w-full bg-purple-900 text-white border-2 border-white">Чат поддержки</Button>
              }
          />
          <BonusCard
              title="Бонус"
              description="за заполнение профиля"
              className="bg-gradient-to-b from-black to-gold pt-3 "
                  contentNode={
                    <>
                        <ul className='pt-10'>
                         <li className="flex items-around ">
                             <div className="bg-gray-500 h-7 w-16 text-white rounded-full flex items-baseline justify-center mr-2  ">1</div>
                             <span className='text-white underline ml-1'>Подключите двухфакторную аутентификацию </span>
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
                    
                          
                    <div className='relative '>
                        <Image src="/img/6.png" alt="цифра" height={56} width={56} className='float-right pt-10' />
                    </div>
                          
                        <div className='flex pt-11'>
                            <div className='pl-20 pt-2'>
                                <Image src="/img/emerald-mini.png" alt="emerald" height={36} width={36} /> 
                            </div>
                            <div className='justify-self-center pt-3'>20</div>
                      </div>
                    </>
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
