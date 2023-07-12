import { atom, useAtom } from 'jotai';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const signInModalAtom = atom(false);
export const useSignInModal = () => useAtom(signInModalAtom);

const SignInModal = () => {
  const [open, setOpen] = useSignInModal();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="relative">
            <div className="max-w-[180px] m-auto text-base w-full text-center">
              Шаг 1/2
              <Progress value={50} className="mt-2" />
            </div>
            <div className="absolute left-0 w-full h-px -bottom-4 bg-neutral-800"></div>
          </DialogTitle>
          <DialogDescription className="pt-12">
            <p className="text-2xl font-bold text-white">Вход в Синдикат</p>

            <div className="grid items-center w-full max-w-full gap-2 mt-10">
              <Label htmlFor="email" className="text-base font-normal">
                Введите почту
              </Label>
              <Input type="email" id="email" placeholder="Email" className="px-6 rounded-full h-14 placeholder:text-base" />
            </div>

            <Button
              className="w-full text-lg mt-14 h-14"
              variant="accent"
              size="lg"
              style={{
                boxShadow: '0 0 32px #22c55e',
              }}
            >
              Далее
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
