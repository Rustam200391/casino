import MainLayout from '@/components/layout/main-layout';
import React from 'react';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router';
import RecentGamesTable from '@/components/pages/home/recent-games-table';
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

const ProfilePage = () => {
  const router = useRouter();
  const { data: loadDataResponse } = useLoadDataQuery();
  const { data: loadProfileResponse } = useLoadProfileQuery();

  const selectedTab = router.query.slug ? router.query.slug[0] : 'profile';

  const loadData = loadDataResponse?.data;
  const profileData = loadProfileResponse?.result.data;

  const [, setProfileModalOpen] = useProfileModalAtom();
  const name = profileData?.fist_name
    ? profileData.fist_name + ' ' + profileData.last_name
    : '-';

  const maxLevel = loadDataResponse?.levels_experience
    ? Math.max.apply(
        null,
        Object.keys(loadDataResponse.levels_experience).map(Number),
      )
    : 100;
  const nextLevel =
    maxLevel === (loadData?.level || 0) + 1
      ? maxLevel
      : (loadData?.level || 0) + 1;

  const nextLevelExp = Number(
    loadDataResponse?.levels_experience[String(nextLevel)],
  );

  const nextLevelExpNeed =
    Number(loadDataResponse?.levels_experience[String(nextLevel)]) -
    Number(loadData?.experience);

  return (
    <>
      <MainLayout>
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
                  onClick={() =>
                    navigator.clipboard.writeText(String(profileData?.id))
                  }
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
            <Progress value={profileData?.experience || 0} max={nextLevelExp} />
            <div className="whitespace-nowrap">
              {nextLevelExpNeed} XP{' '}
              <span className="text-sm text-neutral-500">до нового уровня</span>
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
              <div className="text-lg">{profileData?.coefficient_max || 0}</div>
            </div>
          </div>
        </div>
        <Tabs
          value={selectedTab}
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
            <div className="flex-col bg-neutral-900 rounded-3xl p-6">
              <div className="flex justify-between">
                <div>Title</div>
                <div>Button</div>
              </div>
              <div className="flex justify-between">
                <div>name</div>
                <div>name</div>
                <div>name</div>
                <div>name</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="games_history">
            <RecentGamesTable />
          </TabsContent>
          <TabsContent value="transactions_history">
            <RecentGamesTable />
          </TabsContent>
        </Tabs>
      </MainLayout>

      <ProfileModal />
    </>
  );
};

export default ProfilePage;
