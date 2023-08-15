import { Dialog, DialogContent } from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai/index';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCardIcon } from 'lucide-react';
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
                    className="w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800"
                  >
                    <CreditCardIcon height={30} width={30} />
                    Банковская карта
                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800"
                  >
                    <CreditCardIcon height={30} width={30} />
                    СБП
                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-semibold text-neutral-500">Кошельки</p>
                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="ghost"
                    className="w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800"
                  >
                    <CreditCardIcon height={30} width={30} />
                    Qiwi
                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800"
                  >
                    <CreditCardIcon height={30} width={30} />
                    Яндекс.деньги
                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full rounded-xl justify-between whitespace-nowrap font-semibold border-neutral-800 hover:bg-neutral-800"
                  >
                    <CreditCardIcon height={30} width={30} />
                    Криптовалюта
                    <span className="font-light text-neutral-400">3%</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <TypographyH2>Пополнение баланса</TypographyH2>
                <p className="flex items-center gap-2 text-neutral-500 ml-1">
                  <CreditCardIcon height={30} width={30} />
                  Банковская карта
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-light text-sm whitespace-nowrap">
                    Шаг 2
                  </span>
                  <span className="font-light">Введите сумму пополнения</span>
                  <span className="text-neutral-500">(минимум 100 Р)</span>
                </div>
                <Input
                  className="rounded-3xl border-neutral-800"
                  placeholder="100"
                />
                <p>
                  Комиссия: <span className="text-neutral-500">3%</span>
                </p>
                <p>
                  Будет начислено: 70{' '}
                  <span className="text-neutral-500">RUBN</span>
                </p>
                <p>
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
          <TabsContent value="withdraw">2</TabsContent>
          <TabsContent value="transfer">3</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BalanceModal;
