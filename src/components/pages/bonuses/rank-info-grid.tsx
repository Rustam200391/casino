import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';


const RankInfoGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Информация про ранги</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 whitespace nowrap md:grid-cols-2 xl:grid-cols-3 w-full ">
        <Card className="rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#0b410a] h-content whitespace nowrap ">
          <CardHeader>
            <CardTitle className='flex justify-center items-center' >Повышение ранга</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center items-center'>
            <div className='whitespace nowrap ' >Ранги выдаются за уровни</div>
          </CardContent> 
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#3a3a3a] h-content whitespace nowrap ">
          <CardHeader>
            <CardTitle>Активация ранга</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center items-center pt-7 '>
            <div className='whitespace nowrap ' >Каждый ранг необходимо активировать выполнив определенные условия</div>
            
          </CardContent>
        </Card>
        <Card className="rounded-3xl  bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#4b0707] h-content whitespace nowrap">
          <CardHeader>
            <CardTitle >Возможности и бонусы</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center items-center' >
           <div className='whitespace nowrap '>За активацию ранга вы повышаете шанс победы на турнире, открываете
            новые возможности, косметические элементы и получаете бонусы</div>
           
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RankInfoGrid;
