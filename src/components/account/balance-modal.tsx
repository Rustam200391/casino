import { Dialog, DialogContent } from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai/index';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

const balanceModalAtom = atom(false);
export const useBalanceModalAtom = () => useAtom(balanceModalAtom);

const BalanceModal = () => {
  const [open, setOpen] = useBalanceModalAtom();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl border-neutral-800">
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
          <TabsContent value="topup">1</TabsContent>
          <TabsContent value="withdraw">2</TabsContent>
          <TabsContent value="transfer">3</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BalanceModal;
