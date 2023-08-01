import { Dialog, DialogContent } from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai/index';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCardIcon } from 'lucide-react';

const balanceModalAtom = atom(true);
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
          <TabsContent value="topup" className="flex justify-between">
            <div className="flex flex-col w-[35%] text-left">
              <div className="flex gap-1">
                <span className="text-green-500 font-light text-sm whitespace-nowrap">
                  Шаг 1
                </span>
                <span className="font-light text-sm">
                  Выберите способ пополнения
                </span>
              </div>
              <div>
                <p>Карты</p>
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
                <p>Карты</p>
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
            <div className="flex flex-col w-[65%]">
              <div>Step 2 title</div>
              <div>Step 2 input</div>
              <div className="text-center">Step 2 submit</div>
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
