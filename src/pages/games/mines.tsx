import MainLayout from '@/components/layout/main-layout';
import AboutMinesGame from '@/components/pages/games/mines/about';
import BetSelector from '@/components/pages/games/mines/bet-selector';
import MinesCard from '@/components/pages/games/mines/mines-card';
import RecentGamesTable from '@/components/pages/home/recent-games-table';
import React from 'react';
import { useMinesDataQuery } from '@/hooks/api/games/mines/data';

const MinesGame = () => {
  const { data: minesDataResponse } = useMinesDataQuery();

  return (
    <MainLayout>
      <div className="flex items-baseline space-x-2">
        <p className={`text-3xl font-bold`}>Mines</p>
        <p className="text-sm text-gray-500">#123322</p>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-8">
        <BetSelector />
        <MinesCard />
      </div>

      <RecentGamesTable />

      <AboutMinesGame />
    </MainLayout>
  );
};

export default MinesGame;
