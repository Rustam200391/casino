import { Dialog, DialogContent } from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  CreditCardIcon,
  Gem,
  RussianRubleIcon,
  SearchIcon,
} from 'lucide-react';
import { TypographyH2 } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';

const balanceModalAtom = atom(false);
export const useBalanceModalAtom = () => useAtom(balanceModalAtom);

const BalanceModal = () => {
  const [open, setOpen] = useBalanceModalAtom();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[675px] w-[675px] border-neutral-800">
        <Tabs defaultValue="topup" className="w-auto">
          <TabsList className="w-[100%]">
            <TabsTrigger className="w-[33%]" value="topup">
              Пополнить баланс
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="withdraw">
              Вывод средств
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="transfer">
              Перевести
            </TabsTrigger>
          </TabsList>
          <TabsContent value="topup" className="flex justify-between gap-6">
            <div className="flex flex-col w-[35%] text-left gap-6">
              <div className="flex gap-1">
                <span className="text-green-500 font-light text-sm whitespace-nowrap">
                  Шаг 1
                </span>
                <span className="font-light text-sm">
                  Выберите способ пополнения
                </span>
              </div>
              <div>
                <p className="font-semibold text-neutral-500">Карты</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Банковская карта</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">СБП</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-semibold text-neutral-500">Кошельки</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Qiwi</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Яндекс.деньги</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Криптовалюта</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <TypographyH2>Пополнение баланса</TypographyH2>
                <p className="flex items-center gap-2 text-neutral-500 ml-1 font-normal">
                  <CreditCardIcon height={30} width={30} />
                  Банковская карта
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-green-500 font-light text-sm">
                    Шаг 2
                  </span>
                  <span className="font-light">Введите сумму пополнения</span>
                  <span className="text-neutral-500 font-light text-sm">
                    (минимум 100 ₽)
                  </span>
                </div>
                <Input
                  className="rounded-3xl border-neutral-800"
                  placeholder="100 ₽"
                />
                <p className="text-sm">
                  Комиссия: <span className="text-neutral-500">3%</span>
                </p>
                <p className="text-sm flex">
                  Будет начислено:
                  <Gem className="w-5 h-5 mx-1 text-green-600" />
                  70
                  <span className="flex text-neutral-500 ml-1">RUBN</span>
                </p>
                <p className="text-sm">
                  Примерное время начисления:{' '}
                  <span className="text-neutral-500">от 1 дня до 3 дней</span>
                </p>
              </div>
              <div className="flex flex-col text-center">
                <Button variant="link" className="font-light underline">
                  Чат поддержки
                </Button>
                <Button className="text-white text-lg bg-green-500">
                  Перейти к оплате
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="withdraw" className="flex justify-between gap-6">
            <div className="flex flex-col w-[35%] text-left gap-6">
              <div className="flex gap-1">
                <span className="text-green-500 font-light text-sm whitespace-nowrap">
                  Шаг 1
                </span>
                <span className="font-light text-sm">
                  Выберите способ вывода средств
                </span>
              </div>
              <div>
                <p className="font-semibold text-neutral-500">Карты</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Банковская карта</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">СБП</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-semibold text-neutral-500">Кошельки</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Qiwi</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Яндекс.деньги</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Криптовалюта</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <TypographyH2>Вывод средств</TypographyH2>
                <p className="flex items-center gap-2 text-neutral-500 ml-1 font-normal">
                  <CreditCardIcon height={30} width={30} />
                  Банковская карта
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-green-500 font-light text-sm">
                    Шаг 2
                  </span>
                  <span className="font-light">Введите сумму вывода</span>
                  <span className="text-neutral-500 font-light text-sm">
                    (минимум 100 ₽)
                  </span>
                </div>
                <Input
                  className="rounded-3xl border-neutral-800"
                  placeholder="100 ₽"
                />
                <p className="text-sm">
                  Комиссия: <span className="text-neutral-500">3%</span>
                </p>
                <p className="text-sm flex">
                  Будет начислено:
                  <RussianRubleIcon className="w-5 h-5 mx-1 text-green-600" />
                  70
                  <span className="flex text-neutral-500 ml-1">₽</span>
                </p>
                <p className="text-sm">
                  Примерное время начисления:{' '}
                  <span className="text-neutral-500">от 1 дня до 3 дней</span>
                </p>
              </div>
              <div className="flex flex-col text-center">
                <Button variant="link" className="font-light underline">
                  Чат поддержки
                </Button>
                <Button className="text-white text-lg bg-green-500">
                  Перейти к оплате
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="transfer" className="flex justify-between gap-6">
            <div className="flex flex-col w-[35%] text-left gap-4">
              <div className="flex items-center px-3 border border-neutral-500 text-neutral-500 rounded-3xl">
                <SearchIcon />
                <Input placeholder="Поиск по нику" className="border-0" />
              </div>
              <hr className="border-neutral-800" />
              <div>
                <p className="font-semibold text-neutral-500">Карты</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">Банковская карта</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCardIcon height={30} width={30} />
                      <div className="font-normal">СБП</div>
                    </div>

                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <TypographyH2>Перевод доната</TypographyH2>
                <p className="flex items-center gap-2 text-neutral-500 ml-1 font-normal">
                  <CreditCardIcon height={30} width={30} />
                  Банковская карта
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-green-500 font-light text-sm">
                    Шаг 2
                  </span>
                  <span className="font-light">Введите сумму пополнения</span>
                  <span className="text-neutral-500 font-light text-sm">
                    (минимум 100 ₽)
                  </span>
                </div>
                <Input
                  className="rounded-3xl border-neutral-800"
                  placeholder="100 ₽"
                />
                <p className="text-sm">
                  Комиссия: <span className="text-neutral-500">3%</span>
                </p>
                <p className="text-sm flex">
                  Будет начислено:
                  <Gem className="w-5 h-5 mx-1 text-green-600" />
                  70
                  <span className="flex text-neutral-500 ml-1">RUBN</span>
                </p>
                <p className="text-sm">
                  Примерное время начисления:{' '}
                  <span className="text-neutral-500">от 1 дня до 3 дней</span>
                </p>
              </div>
              <div className="flex flex-col text-center">
                <Button variant="link" className="font-light underline">
                  Чат поддержки
                </Button>
                <Button className="text-white text-lg bg-green-500">
                  Перейти к оплате
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BalanceModal;
