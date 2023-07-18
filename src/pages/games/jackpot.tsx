import MainLayout from '@/components/layout/main-layout';
import AboutJackpotGame from '@/components/pages/games/jackpot/about';
import BankCard from '@/components/pages/games/jackpot/bank-card';
import BetSelector from '@/components/pages/games/jackpot/bet-selector';
import JackpotGameCard from '@/components/pages/games/jackpot/jackpot-game-card';
import RecentGamesTable from '@/components/pages/games/jackpot/recent-games-table';
import React from 'react';

const CrashGame = () => {
  return (
    <MainLayout>
      <div className="flex items-baseline space-x-2">
        <p className={`text-3xl font-bold`}>Jackpot</p>
        <p className="text-sm text-gray-500">#123321</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-8">
        <JackpotGameCard />
        <BetSelector />
        <BankCard />
      </div>

      <RecentGamesTable />

      <AboutJackpotGame />
    </MainLayout>
  );
};

export default CrashGame;
