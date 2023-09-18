import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';


const RankInfoGrid = () => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Информация про ранги</p>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 w-full">
        <Card className=" w-[250px] rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#0b410a]">
          <CardHeader>
            <CardTitle >Повышение ранга</CardTitle>
          </CardHeader>
          <CardContent className='relative' >
            <Image src="/img/earth.png" alt="emerald" height={156} width={156} className='w-full h-auto mt-10' /> 
            <div className=' absolute top-3 left-0 w-full h-full flex flex-col justify-center items-center  text-white opacity-100 hover:opacity-100 transition-opacity duration-300'>Ранги выдаются за уровни</div>
           
          </CardContent> 
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none bg-gradient-to-b from-black to-[#3a3a3a] h-content">
          <CardHeader>
            <CardTitle>Активация ранга</CardTitle>
          </CardHeader>
          <CardContent className='relative p-0 pt-12'>
            <div className='absolute top-20 left-6 w-full h-full flex flex-col justify-center items-center  text-white opacity-100 hover:opacity-100 transition-opacity duration-300'>Каждый ранг необходимо активировать выполнив определенные условия</div>
            <Image src="/img/mountain.png" alt="" height={250} width={556} className='w-full h-auto mt-10 pt-13' />
            
          </CardContent>
        </Card>
        <Card className="rounded-3xl bg-zinc-950 border-none  bg-gradient-to-b from-black to-[#4b0707]">
          <CardHeader>
            <CardTitle>Возможности и бонусы</CardTitle>
          </CardHeader>
          <CardContent className='relative'>
            <Image src="/img/sferum.png" alt="emerald" height={1} width={86} className=' w-full h-auto' /> 
           <div className='absolute top-9  w-full h-full flex flex-col justify-center items-center  text-white opacity-100 hover:opacity-100 transition-opacity duration-300'>За активацию ранга вы повышаете шанс победы на турнире, открываете
            новые возможности, косметические элементы и получаете бонусы</div>
           
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RankInfoGrid;
