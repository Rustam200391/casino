import MainLayout from '@/components/layout/main-layout';
import AboutCrashGame from '@/components/pages/games/crash/about';
import BetSelector from '@/components/pages/games/crash/bet-selector';
import CrashGameCard from '@/components/pages/games/crash/crash-card';
import RecentGamesTable from '@/components/pages/games/crash/recent-games-table';
import React from 'react';

const CrashGame = () => {
  return (
    <MainLayout>
      <div className="flex items-baseline space-x-2">
        <p className={`text-3xl font-bold`}>Crash</p>
        <p className="text-sm text-gray-500">#123321</p>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-8">
        <BetSelector />
        <CrashGameCard />
      </div>

      <RecentGamesTable />

      <AboutCrashGame />
    </MainLayout>
  );
};

export default CrashGame;
