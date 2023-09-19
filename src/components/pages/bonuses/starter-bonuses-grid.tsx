import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import {Button} from "@/components/ui/button";

const StarterBonusesGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Стартовые бонусы</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
          <BonusCard
              title="Бонус"
              description="за подписку на Телеграм канал"
              className="bg-gradient-to-b from-black to-[#0a6469]"
                  contentNode={
                      <>
                        <ul className='pt-9'>
                          <li className="flex items-around">
                            <div className=" mt-1 mr-2">
                              <Image src="/img/mark.png"
                                alt="mark"
                                height={27}
                                width={27}
                              />
                            </div>
                                <span className='text-green-300'>Подпишитесь на телеграм канал</span>
                          </li>
                          <li className="flex items-around">
                            <div className="mt-1 mr-2 ">
                              <Image src="/img/mark.png"
                                alt="mark"
                                height={27}
                                width={33}
                              />
                            </div>
                                 <span className='text-green-300'>Привяжите телеграм аккаунт к профилю</span>
                          </li>
                          </ul>
                        
                          <div className='flex pt-16'>
                               <div className='pl-20 pt-11'>
                                  <Image src="/img/emerald-mini.png" alt="emerald" height={36} width={36} /> 
                              </div>
                              <div className='justify-self-center pt-12'>20</div>
                          </div>
                          
                      </>  
              }
              actionNode={
                  <Button className="w-full bg-[#042123] text-green-500 border-2 border-white">Получено</Button>
              }
          />
          <BonusCard
              title="Бонус"
              description="за сообщение в чат поддержки"
              className="bg-gradient-to-b from-black to-[#2a0a35]"
                  contentNode={
                 <>
                    <ul className="pt-9">
                      <li className="flex items-around">
                        <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                         1
                        </div>
                        <span className="text-white ">
                          Напишите в чат поддержки слово{' '}
                          <div className="bg-gray-600 rounded-full container">
                          ПРОМОКОД
                          </div>
                        </span>
                      </li>
                      <li className="flex items-around">
                        <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                         2
                        </div>
                        <span className="text-white">
                          Получите промокод и активируйте
                        </span>
                      </li>
                    </ul>
                    <div className="relative "></div>
                    <div className="flex pt-16">
                      <div className="pt-4 pl-20">
                        <Image
                          src="/img/emerald-mini.png"
                          alt="emerald"
                          height={36}
                          width={36}
                        />
                    </div>
                    <div className="justify-self-center pt-5">20</div>
                    </div>
                </>
              }
              actionNode={
                  <Button className="w-full bg-[#3d164c] text-white border-2 border-white">Чат поддержки</Button>
              }
          />
          <BonusCard
              title="Бонус"
              description="за заполнение профиля"
              className="bg-gradient-to-b from-black to-gold pt-0 "
                  contentNode={
                  <>
                        <ul className="pt-10">
                          <li className="flex items-around ">
                            <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                               1
                             </div>
                            <span className="text-white underline ">
                            Подключите двухфакторную аутентификацию
                             </span>
                          </li>
                            <li className="flex items-around">
                              <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                                2
                              </div>
                              <span className="text-white underline ">
                                Укажите Имя и Фамилию
                              </span>
                            </li>
                            <li className="flex items-around">
                              <div className="bg-neutral-800 font-bold italic text-white text-center rounded-full w-[27px] h-[27px] flex items-center justify-center p-3 mr-2">
                                3
                              </div>
                              <span className="text-white underline ml-0">
                                Подтвердите почту
                              </span>
                            </li>
                          </ul>

                          <div className="relative"></div>

                          <div className="flex pt-12">
                            <div className="pl-20 pt-2">
                              <Image
                                src="/img/emerald-mini.png"
                                alt="emerald"
                                height={36}
                                width={36}
                              />
                            </div>
                            <div className="justify-self-center pt-3">20</div>
                          </div>
                    </>
              }
              actionNode={
                  <Button className="w-full bg-[#604716] text-white border-2 border-white">Получить</Button>
              }
          />
      </div>
    </div>
  );
};

export default StarterBonusesGrid;
