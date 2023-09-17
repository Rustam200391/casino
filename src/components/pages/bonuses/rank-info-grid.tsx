import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';


const RankInfoGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Информация про ранги</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 w-full">
        <Card className=" w-[250px] rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#44944A]">
          <CardHeader>
            <CardTitle >Повышение ранга</CardTitle>
          </CardHeader>
          <CardContent className='relative' >
            <div className='pt-5 absolute z-10'>Ранги выдаются за уровни</div>
            <div className='absolute z-20'><Image src="/img/earth.png" alt="emerald" height={156} width={156} /> </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#939496]">
          <CardHeader>
            <CardTitle>Активация ранга</CardTitle>
          </CardHeader>
          <CardContent className='relative'>
            <div className='absolute z-10 pt-1 ' >Каждый ранг необходимо активировать выполнив определенные условия</div>
            <div className='absolute top-30 z-20'><Image src="/img/mountain.png" alt="" height={156} width={256} /></div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#A5260A]">
          <CardHeader>
            <CardTitle>Возможности и бонусы</CardTitle>
          </CardHeader>
          <CardContent className='relative'>
           <div className=''>За активацию ранга вы повышаете шанс победы на турнире, открываете
            новые возможности, косметические элементы и получаете бонусы</div>
            <div className='top-10 z-20'><Image src="/img/sferum.png" alt="emerald" height={1} width={86} /> </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RankInfoGrid;
