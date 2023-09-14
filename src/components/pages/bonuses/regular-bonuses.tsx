import * as React from "react"
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Icons } from "@/components/ui/icons"


const GameCard = ({
  className,
  background,
  href,
  title,
}: {
  className?: string;
  background: React.ReactNode;
  href: string;
  title: string;
}) => {
  return (
    <div
      className={cn(
        'px-4 py-3 border relative overflow-hidden border-gray-500 transition hover:scale-[102%] hover:border-gray-400 min-h-[200px]  rounded-3xl',
        className
      )}
    >
      {background}
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm text-gray-400">12 000 ₽</p>
        </div>
        <Link href={href} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')}>
          Играть
        </Link>
      </div>
    </div>
  );
};

const RegularBonuses = () => {

    return (
      <div className="flex  flex-wrap justify-between ">
          <Card className="w-full mt-10 border-0 bg-transparent mb-8">
              <p className="text-2xl font-bold "> Регулярные бонусы</p>
          </Card>   
            
        <div className="flex gap-4">
          <Card className="w-full md:w-1/3  rounded-3xl bg-transparent border-neutral-600 ">
                <CardHeader>
                    <CardTitle>Введите промокод и получите бонус</CardTitle>
                    <CardDescription>Вы можете активировать помокод раз в неделю</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4 pt-11">
                            <div className="flex flex-col space-y-1.5">
                                <Input className="rounded-full border-neutral-600" placeholder="SYNDICATE123" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between h-content pt-11">
                    <Button className="w-full border-neutral-600 ">Активировать</Button>
                </CardFooter>
            </Card>
       
            <Card className="w-full md:w-2/3 ml-2px rounded-3xl flex flex-col bg-transparent bg-[url('/img/wheell1.png')] bg-cover border-neutral-600 justify-between space-x-2">
                <CardHeader>
                    <CardTitle className="flex text-[#ffffff]">Крутите рулетку и получайте рубины</CardTitle>
                    <CardDescription className="flex">Раз в 24 часа крути рулетку и получай до 20 рубинов на баланс</CardDescription>
                </CardHeader>
                <CardContent className="float-right">
              

                </CardContent>
                <CardFooter className="flex">
                    <div className="flex-col mb-[-20px]">
                        <div className="text-[#cbd5e1] pl-0">Каждый день доступно 1 кручение</div>   
                        <div className="pt-3 ">
                            <Button variant="outline" className="w-8/12 border-green-500 hover:bg-green-500 pt-1">Крутить</Button>
                        </div>
                    </div>
                    <div className="ml-[25px] mb-[20px]">
                        <div>
                          {/* <GameCard
                          title=""
                          href="/src/components/pages/bonuses/regular-bonuses.tsx"
                          background={<Image src="/img/wheell1.png" alt="background" fill className="object-cover"   />}
                           className="xl:col-span-5 xl:row-span-2"
                          /> */}
                        </div>
                    </div>
                </CardFooter>
          </Card>
          </div>
        </div>
    )
}

export default RegularBonuses;