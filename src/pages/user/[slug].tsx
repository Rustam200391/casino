import MainLayout from '@/components/layout/main-layout';
import React from 'react';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { useRouter } from 'next/router';
import RecentGamesTable from '@/components/pages/home/recent-games-table';
import Loader from '@/components/ui/loader';
import { Badge } from '@/components/ui/badge';
import { CopyIcon, GiftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLoadProfileByQuery } from '@/hooks/api/load-profile-by';

const ProfilePage = () => {
  const router = useRouter();
  const { data: loadProfileResponse, isLoading: isProfileLoading } =
    useLoadProfileByQuery(router.query.slug as string | number);

  const profileData = loadProfileResponse?.result.data;

  const name = profileData?.fist_name
    ? profileData.fist_name + ' ' + profileData.last_name
    : '-';

  console.log(profileData);

  return (
    <MainLayout>
      {isProfileLoading ? (
        <Loader />
      ) : (
        <>
          <TypographyH1>Профиль игрока</TypographyH1>
          <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4 gap-6">
            <div className="flex justify-between">
              <div>Ранг: {profileData?.rank || 0}</div>
              <div>Достижения</div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Avatar className="h-[87px] w-[87px]">
                  <AvatarImage src={profileData?.avatar || ''} />
                  <AvatarFallback>
                    {profileData?.nickname
                      ? profileData.nickname.substring(0, 2).toUpperCase()
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

                  <Button className="w-[212px] bg-yellow-500" variant="outline">
                    <GiftIcon />
                    Перевести донат
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4">
            <div className="flex items-center gap-2">
              <TypographyH3>Уровень</TypographyH3>
              <Badge className="p-0.5 rounded-sm bg-lime-900 text-lime-300">
                {profileData?.level || 0}
              </Badge>
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
          <div className="flex-col bg-neutral-900 rounded-3xl p-6 mt-4">
            <div className="flex justify-between">
              <TypographyH3>Личные данные</TypographyH3>
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
          <RecentGamesTable />
        </>
      )}
    </MainLayout>
  );
};

export default ProfilePage;
