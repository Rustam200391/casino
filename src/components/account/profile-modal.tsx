import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TypographyH3 } from '@/components/ui/typography';
import { Edit2Icon } from 'lucide-react';

const profileModalAtom = atom(false);
export const useProfileModalAtom = () => useAtom(profileModalAtom);

const ProfileModal = () => {
  const [open, setOpen] = useProfileModalAtom();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-neutral-800 rounded-2xl">
        <DialogHeader>Настройки профиля</DialogHeader>

        <Tabs defaultValue="person" className="w-auto">
          <TabsList className="w-[100%]">
            <TabsTrigger className="w-[33%]" value="person">
              Персонализация
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="profile">
              Личные данные
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="security">
              Безопасность
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="person"
            className="flex flex-col justify-between gap-6"
          >
            <TypographyH3>Настройки личных данных</TypographyH3>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-normal">
                  Имя
                </Label>
                <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                  <Input id="name" value="Pedro Duarte" className="border-0" />
                  <Edit2Icon />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-normal">
                  Имя
                </Label>
                <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                  <Input id="name" value="Pedro Duarte" className="border-0" />
                  <Edit2Icon />
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-normal">
                  Имя
                </Label>
                <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                  <Input id="name" value="Pedro Duarte" className="border-0" />
                  <Edit2Icon />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="profile">2</TabsContent>
          <TabsContent value="security">3</TabsContent>
        </Tabs>
        <DialogFooter>
          <Button
            className="w-full p-6 border-neutral-800 text-neutral-500 text-lg hover:bg-neutral-800"
            variant="outline"
          >
            Сохранить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
