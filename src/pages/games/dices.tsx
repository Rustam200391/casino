import MainLayout from '@/components/layout/main-layout';
import AboutDicesGame from '@/components/pages/games/dices/about';
import BetSelector from '@/components/pages/games/dices/bet-selector';
import DicesCard from '@/components/pages/games/dices/dices-card';
import RecentGamesTable from '@/components/pages/games/dices/recent-games-table';
import { TypographyH1 } from '@/components/ui/typography';
import React from 'react';

const CrashGame = () => {
  return (
    <MainLayout>
      <TypographyH1>Work in progress.</TypographyH1>
      {/* <div className="flex items-baseline space-x-2">
        <p className={`text-3xl font-bold`}>Mines</p>
        <p className="text-sm text-gray-500">#123321</p>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-8">
        <BetSelector />
        <DicesCard />
      </div>

      <RecentGamesTable />

      <AboutDicesGame /> */}
    </MainLayout>
  );
};

export default CrashGame;
