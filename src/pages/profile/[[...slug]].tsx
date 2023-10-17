import MainLayout from '@/components/layout/main-layout';
import React, { useEffect } from 'react';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router';
import RecentGamesTable from '@/components/pages/home/recent-games-table';
import Loader from '@/components/ui/loader';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useLoadProfileQuery } from '@/hooks/api/user/loadProfile';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { CopyIcon, Edit2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileModal, {
  useProfileModalAtom,
} from '@/components/account/profile-modal';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import GamesHistoryTable from '@/components/account/games-history-table';
import { useChangeProfilePrivacyMutation } from '@/hooks/api/user/changeProfilePrivacy';
import { toast } from 'react-toastify';
import { atom, useAtom } from 'jotai';

const profileTabAtom = atom('profile');
export const useProfileTabAtom = () => useAtom(profileTabAtom);

const ProfilePage = () => {
  const router = useRouter();
  const { data: loadDataResponse } = useLoadDataQuery();
  const { data: loadProfileResponse, isLoading: isProfileLoading } =
    useLoadProfileQuery();
  const changeProfilePrivacyMutation = useChangeProfilePrivacyMutation();
  const [profileTab, setProfileTab] = useProfileTabAtom();

  const loadData = loadDataResponse?.data;
  const profileData = loadProfileResponse?.result.data;

  const [, setProfileModalOpen] = useProfileModalAtom();
  const name = profileData?.fist_name
    ? profileData.fist_name + ' ' + profileData.last_name
    : '-';

  const nextLevelExpNeed =
    Number(loadData?.experience_next_level) - Number(loadData?.experience);

  useEffect(() => {
    setProfileTab(router.query.slug ? router.query.slug[0] : 'profile');
  }, [router.query.slug, setProfileTab]);

  return (
    <MainLayout>
      {isProfileLoading ? (
        <Loader />
      ) : (
        <>
          <TypographyH1>Ваш профиль</TypographyH1>
          <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4 gap-6">
            <div className="flex justify-between">
              <div>Ранг: {profileData?.rank}</div>
              <div>Достижения</div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Avatar className="h-[87px] w-[87px]">
                  <AvatarImage src={profileData?.avatar} />
                  <AvatarFallback>
                    {loadData?.name
                      ? loadData.name.substring(0, 2).toUpperCase()
                      : '-'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <div className="text-neutral-500">{name}</div>
                    <div className="font-semibold">
                      {profileData?.nickname || '-'}
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 font-light">
                    В игре с {profileData?.time_reg}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <Button className="underline p-0" variant="link">
                  Посмотреть достижения
                </Button>

                <div className="flex gap-2">
                  <Button
                    className="w-[212px] flex justify-between border-neutral-800"
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(String(profileData?.id));
                      toast.info('ID скопирован в буфер обмена');
                    }}
                  >
                    <div className="text-neutral-500 font-normal">
                      ID: {profileData?.id}
                    </div>
                    <CopyIcon />
                  </Button>

                  <Button
                    className="w-[212px] border-neutral-800"
                    variant="outline"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    Редактировать профиль
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4">
            <div className="flex justify-between items-center gap-2">
              <TypographyH3>Уровень</TypographyH3>
              <Badge className="p-0.5 rounded-sm bg-lime-900 text-lime-300">
                {loadData?.level}
              </Badge>
              <Progress
                value={profileData?.experience || 0}
                max={loadData?.experience_next_level || 0}
              />
              <div className="whitespace-nowrap">
                {nextLevelExpNeed} XP{' '}
                <span className="text-sm text-neutral-500">
                  до нового уровня
                </span>
              </div>
            </div>
            <div className="flex justify-around text-center mt-4">
              <div className="flex flex-col items-center">
                <div className="uppercase text-neutral-500">Игры</div>
                <div className="text-lg">{profileData?.games_total || 0}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="uppercase text-neutral-500">
                  Поднял в синдикате
                </div>
                <div className="text-lg">{profileData?.sum_total || 0}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="uppercase text-neutral-500">Топ выигрыш</div>
                <div className="text-lg">{profileData?.sum_max || 0}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="uppercase text-neutral-500">Макс. коэфф.</div>
                <div className="text-lg">
                  {profileData?.coefficient_max || 0}
                </div>
              </div>
            </div>
          </div>
          <Tabs
            value={profileTab}
            className="w-auto mt-8"
            onValueChange={(value) =>
              value === 'profile'
                ? router.push('/profile')
                : router.push(`/profile/${value}`)
            }
          >
            <TabsList className="w-[100%] mb-4">
              <TabsTrigger className="w-[25%] p-4" value="profile">
                Личные данные
              </TabsTrigger>
              <TabsTrigger className="w-[25%] p-4" value="security">
                Безопасность
              </TabsTrigger>
              <TabsTrigger className="w-[25%] p-4" value="games_history">
                История игр
              </TabsTrigger>
              <TabsTrigger className="w-[25%] p-4" value="transactions_history">
                История транзакций
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="flex-col bg-neutral-900 rounded-3xl p-6">
                <div className="flex justify-between">
                  <TypographyH3>Личные данные</TypographyH3>
                  <Button
                    variant="ghost"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    <Edit2Icon />
                  </Button>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Имя</div>
                    <div>{profileData?.fist_name || '-'}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Фамилия</div>
                    <div>{profileData?.last_name || '-'}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Пол</div>
                    <div>{profileData?.sex === 2 ? 'Женский' : 'Мужской'}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Адрес профиля</div>
                    <div>{profileData?.nickname || '-'}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security">
              <div className="flex flex-col bg-neutral-900 rounded-3xl p-6 gap-4">
                <div className="flex justify-between">
                  <TypographyH3>Безопасность</TypographyH3>
                  <Button
                    variant="ghost"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    <Edit2Icon />
                  </Button>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Логин</div>
                    <div>{profileData?.nickname || '-'}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Пароль</div>
                    <div className="text-green-500">Защищен</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-neutral-500">Email</div>
                    <div>{profileData?.email || '-'}</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between bg-neutral-950 rounded-2xl px-4 py-8 items-center gap-2 w-[48%]">
                    <Switch
                      id="private-profile-switch"
                      onClick={() => changeProfilePrivacyMutation.mutate()}
                      checked={Boolean(profileData?.profile_privacy)}
                    />
                    <Label
                      htmlFor="private-profile-switch"
                      className="flex flex-col gap-2"
                    >
                      <div>Приватность</div>
                      <div className="text-neutral-500">
                        Ваши данные и не будут видны для других пользователей
                      </div>
                    </Label>
                  </div>
                  <div className="flex justify-between bg-neutral-950 rounded-2xl px-4 py-8 items-center w-[48%]">
                    {Boolean(profileData?.twofa_enabled) ? (
                      <>
                        <div className="text-green-700 w-[50%]">
                          Аутентификация включена
                        </div>
                        <Button variant="link" className="underline text-sm">
                          Отключить
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="text-red-700 w-[50%]">
                          Аутентификация отключена
                        </div>
                        <Button variant="link" className="underline text-sm">
                          Включить
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl bg-neutral-950 px-4 py-6">
                  <div className="w-[40%] text-neutral-500 text-sm">
                    Привяжите соц.сети для защиты аккаунта и быстрого доступа к
                    сайту
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-green-500 text-xl">2</span>/4
                    </div>
                    <div>
                      vk: {profileData?.socials.vkontakte ? 'yes' : 'no'}
                    </div>
                    <div>
                      telegram: {profileData?.socials.telegram ? 'yes' : 'no'}
                    </div>
                    <div>
                      google: {profileData?.socials.google ? 'yes' : 'no'}
                    </div>
                    <div>
                      steam: {profileData?.socials.steam ? 'yes' : 'no'}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="games_history">
              <GamesHistoryTable />
            </TabsContent>
            <TabsContent value="transactions_history">
              <RecentGamesTable />
            </TabsContent>
          </Tabs>
          <ProfileModal />
        </>
      )}
    </MainLayout>
  );
};

export default ProfilePage;
