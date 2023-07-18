import MainLayout from '@/components/layout/main-layout';
import { buttonVariants } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const JackpotDiceGame = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-3/4">
        <TypographyH1>Данная игра еще в разработке</TypographyH1>
        <Link href="/" className={cn(buttonVariants({ variant: 'accent', size: 'lg' }), 'mt-8')}>
          На главную
        </Link>
      </div>
    </MainLayout>
  );
};

export default JackpotDiceGame;
