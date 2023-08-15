import MainLayout from '@/components/layout/main-layout';
import React from 'react';
import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router';
import RecentGamesTable from '@/components/pages/home/recent-games-table';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const ProfilePage = () => {
  const router = useRouter();

  const selectedTab = router.query.slug ? router.query.slug[0] : 'profile';

  return (
    <MainLayout>
      <TypographyH1>Ваш профиль</TypographyH1>
      <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4">
        <div className="flex justify-between">
          <div>Rank</div>
          <div>Achievements</div>
        </div>
        <div>Profile data</div>
      </div>
      <div className="flex flex-col border border-neutral-800 rounded-3xl p-6 mt-4">
        <div className="flex justify-between items-center gap-2">
          <TypographyH3>Уровень</TypographyH3>
          <Badge className="p-0.5 rounded-sm bg-lime-900 text-lime-300">
            10
          </Badge>
          <Progress value={60} />
          <div className="whitespace-nowrap">
            1742 XP{' '}
            <span className="text-sm text-neutral-500">до нового уровня</span>
          </div>
        </div>
        <div className="flex justify-around text-center mt-4">
          <div className="flex flex-col items-center">
            <div className="uppercase text-neutral-500">Игры</div>
            <div className="text-lg">156</div>
          </div>
          <div>Money</div>
          <div>Top win</div>
          <div>Max c</div>
        </div>
      </div>
      <Tabs
        value={selectedTab}
        className="w-auto mt-4"
        onValueChange={(value) =>
          value === 'profile'
            ? router.push('/profile')
            : router.push(`/profile/${value}`)
        }
      >
        <TabsList className="w-[100%]">
          <TabsTrigger className="w-[25%]" value="profile">
            Личные данные
          </TabsTrigger>
          <TabsTrigger className="w-[25%]" value="security">
            Безопасность
          </TabsTrigger>
          <TabsTrigger className="w-[25%]" value="games_history">
            История игр
          </TabsTrigger>
          <TabsTrigger className="w-[25%]" value="transactions_history">
            История транзакций
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="flex-col bg-stone-900 rounded-3xl p-6">
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
        <TabsContent value="security">
          <div className="flex-col bg-stone-900 rounded-3xl p-6">
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
  );
};

export default ProfilePage;
