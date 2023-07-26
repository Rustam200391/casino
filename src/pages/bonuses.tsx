import MainLayout from '@/components/layout/main-layout';
import React from 'react';
import RegularBonuses from "@/components/pages/bonuses/regular-bonuses";
import ActivityBonusesGrid from "@/components/pages/bonuses/activity-bonuses-grid";
import RankProgress from "@/components/pages/bonuses/rank-progress";
import LevelsGrid from "@/components/pages/bonuses/levels-grid";
import {TypographyH1} from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StarterBonusesGrid from "@/components/pages/bonuses/starter-bonuses-grid";

const BonusesPage = () => {
  return (
    <MainLayout>
        <TypographyH1>Бонусы и активность</TypographyH1>
        <RankProgress />
        <Tabs defaultValue="bonuses" className="w-auto">
            <TabsList className="w-[100%]">
                <TabsTrigger className="w-[33%]" value="bonuses">Бонусы</TabsTrigger>
                <TabsTrigger className="w-[33%]" value="levels">Уровни</TabsTrigger>
                <TabsTrigger className="w-[33%]" value="activity">Активность</TabsTrigger>
            </TabsList>
            <TabsContent value="bonuses">
                <RegularBonuses />
                <ActivityBonusesGrid />
                <StarterBonusesGrid />
            </TabsContent>
            <TabsContent value="levels">
                <LevelsGrid />
            </TabsContent>
            <TabsContent value="activity">Tab three content</TabsContent>
        </Tabs>
    </MainLayout>
  );
};

export default BonusesPage;

