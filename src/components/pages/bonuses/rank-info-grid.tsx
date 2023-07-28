import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RankInfoGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold">Информация про ранги</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 w-full">
        <Card className="w-[250px] rounded-3xl bg-zinc-950 border-none">
          <CardHeader>
            <CardTitle>Повышение ранга</CardTitle>
          </CardHeader>
          <CardContent>Ранги выдаются за уровни</CardContent>
        </Card>
        <Card className="w-[250px] rounded-3xl bg-zinc-950 border-none">
          <CardHeader>
            <CardTitle>Активация ранга</CardTitle>
          </CardHeader>
          <CardContent>
            Каждый ранг необходимо активировать выполнив определенные условия
          </CardContent>
        </Card>
        <Card className="w-[250px] rounded-3xl bg-zinc-950 border-none">
          <CardHeader>
            <CardTitle>Возможности и бонусы</CardTitle>
          </CardHeader>
          <CardContent>
            За активацию ранга вы повышаете шанс победы на турнире, открываете
            новые возможности, косметические элементы и получаете бонусы
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RankInfoGrid;
