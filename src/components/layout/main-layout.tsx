import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Chat from '@/components/layout/chat';
import Sidebar from '@/components/layout/sidebar';

import { cn } from '@/lib/utils';
import { Manrope } from 'next/font/google';
import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Syndicate Casino</title>
        <meta name="description" content="Online casino Syndicate. Play Jackpot, Crash, Mines." />
        {/* <meta name='og:image' /> */}
      </Head>
      <div className={cn('pb-24 md:pb-0 ', manrope.className)}>
        <Header />
        <div className="grid grid-cols-11  gap-4 my-4 grid-rows-1 min-h-[75vh] container">
          <Sidebar />
          <main className="col-span-11 lg:col-span-6">{children}</main>
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
