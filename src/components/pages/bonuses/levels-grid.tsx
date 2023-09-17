import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LevelsGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold">Информация про уровни</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 w-full">
        <Card className="rounded-3xl bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#990066]">
          <CardHeader>
            <CardTitle>Повышение уровня</CardTitle>
          </CardHeader>
          <CardContent className="ml-4">
            <ol className="list-decimal">
              <li>Участвуйте в активностях</li>
              <li>Играйте в PVP и PVE игры</li>
              <li>
                Количество получаемого опыта зависит от режима игры и размера
                ставки
              </li>
            </ol>
          </CardContent>
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#30D5C8]">
          <CardHeader>
            <CardTitle>Повышение уровня</CardTitle>
          </CardHeader>
          <CardContent>
            За уровни вы получаете различные награды, чем выше уровень, тем
            ценнее приз
          </CardContent>
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#F34723]">
          <CardHeader>
            <CardTitle>Повышение уровня</CardTitle>
          </CardHeader>
          <CardContent>
            Каждые 10 уровней вы разблокируете ранг. При активации ранга вам
            откроются новые возможности и бонусы
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LevelsGrid;
