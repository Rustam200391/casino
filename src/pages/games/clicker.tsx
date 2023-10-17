import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import { TypographyH1 } from '@/components/ui/typography';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';


 const Clicker = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-around">
        <TypographyH1>
           Добро пожаловать к нам на огонек!
        </TypographyH1>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'accent', size: 'lg' }),
            'mt-8',
          )}
        >
          На главную
        </Link>
      </div>
    </MainLayout>
  );
};

export default Clicker;
