import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';

import { atom, useAtom } from 'jotai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TypographyH3 } from '@/components/ui/typography';
import { Edit2Icon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useUpdateProfileMutation } from '@/hooks/api/user/updateProfile';
import { useUpdateNicknameMutation } from '@/hooks/api/user/updateNickname';
import { useLoadProfileQuery } from '@/hooks/api/user/loadProfile';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'react-toastify';

const profileModalAtom = atom(false);
export const useProfileModalAtom = () => useAtom(profileModalAtom);

const ProfileModal = () => {
  const [open, setOpen] = useProfileModalAtom();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [sex, setSex] = useState<1 | 2 | null>(1);
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const [selectedTab, setSelectedTab] = useState('profile');

  const { data: loadProfileResponse, isLoading: isProfileLoading } =
    useLoadProfileQuery();

  useEffect(() => {
    if (open) {
      setFirstName(loadProfileResponse?.result.data.fist_name || '');
      setLastName(loadProfileResponse?.result.data.last_name || '');
      setNickname(loadProfileResponse?.result.data.nickname || '');
      setSex(loadProfileResponse?.result.data.sex || 1);
    }
  }, [open, isProfileLoading]);

  const updateProfileMutation = useUpdateProfileMutation();
  const updateNicknameMutation = useUpdateNicknameMutation();

  const validateForm = () => {
    switch (selectedTab) {
      case 'person':
        return false;
      case 'profile':
        if (!firstName) return 'Имя обязательно к заполнению';
        break;
      case 'security':
        return false;
      default:
        return false;
    }
  };

  useEffect(() => {
    switch (selectedTab) {
      case 'person':
        return;
      case 'profile':
        if (updateProfileMutation.data?.success) setOpen(false);
        break;
      case 'security':
        return;
      default:
        return;
    }
  }, [updateProfileMutation, updateNicknameMutation, setOpen, selectedTab]);

  const handleSubmit = () => {
    const err = validateForm();

    if (err) {
      toast.error(err);
    }

    switch (selectedTab) {
      case 'personal':
        break;
      case 'profile':
        updateProfileMutation.mutate({
          first_name: firstName,
          last_name: lastName,
          sex,
        });

        if (
          Boolean(nickname) &&
          nickname !== loadProfileResponse?.result.data.nickname
        ) {
          updateNicknameMutation.mutate({ nickname });
        }
        break;
      case 'security':
        break;
      default:
        break;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-neutral-800 rounded-2xl min-h-[667px] flex flex-col justify-between">
        <div className="flex flex-col">
          <DialogHeader>Настройки профиля</DialogHeader>

          <Tabs
            defaultValue={selectedTab}
            className="w-auto"
            onValueChange={(value) => setSelectedTab(value)}
          >
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
            ></TabsContent>
            <TabsContent
              value="profile"
              className="flex flex-col justify-between gap-6"
            >
              <TypographyH3>Настройки личных данных</TypographyH3>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName" className="font-normal">
                    Имя
                  </Label>
                  <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                    <Input
                      id="firstName"
                      value={firstName}
                      className="border-0"
                      placeholder="Иван"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Edit2Icon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName" className="font-normal">
                    Фамилия
                  </Label>
                  <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                    <Input
                      id="lastName"
                      value={lastName}
                      className="border-0"
                      placeholder="Иванов"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Edit2Icon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nickname" className="font-normal">
                    Никнейм
                  </Label>
                  <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                    <Input
                      id="nickname"
                      value={nickname}
                      className="border-0"
                      placeholder="ivanov777"
                      onChange={(e) => setNickname(e.target.value)}
                    />
                    <Edit2Icon />
                  </div>
                  <div>Вы можете менять никнейм 1 раз</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Пол</div>
                <RadioGroup
                  defaultValue={String(sex)}
                  className="flex"
                  onChange={(e) => console.log(e.target)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="male" />
                    <Label htmlFor="male">Мужской</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="female" />
                    <Label htmlFor="female">Женский</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
            <TabsContent value="security">
              <TypographyH3>Настройки безопасности</TypographyH3>
              <div className="flex flex-col mt-8">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName" className="font-normal">
                    Введите пароль чтобы редактировать
                  </Label>
                  <div className="flex border-neutral-800 rounded-3xl w-full border items-center px-4 py-1">
                    <Input
                      id="password"
                      value={password}
                      className="border-0"
                      placeholder="Не менее 6 символов"
                      onChange={(e) => setPassword(e.target.value)}
                      type={isVisiblePassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                    >
                      {isVisiblePassword ? <EyeIcon /> : <EyeOffIcon />}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button
            className="w-full p-6 border-neutral-800 text-neutral-500 text-lg hover:bg-neutral-800"
            variant="outline"
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
