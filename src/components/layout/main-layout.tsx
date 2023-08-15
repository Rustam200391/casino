import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Chat from '@/components/layout/chat';
import Sidebar from '@/components/layout/sidebar';

import { cn } from '@/lib/utils';
import { Manrope } from 'next/font/google';
import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import SignInModal from '@/components/auth/sign-in-modal';
import BalanceModal from '@/components/account/balance-modal';
import centrifuge from '@/lib/ws';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

const MainLayout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    console.log('useEffect');
    centrifuge.on('connected', () => {
      console.log('connected');
    });
    centrifuge.on('message', (data) => {
      console.log('message', { data });
    });

    centrifuge.subscribe('public', function (message) {
      if (message.data != null) {
        const data = message.data.params;
        console.log(data);
      }
    });

    const USER_ID = 1;
    centrifuge.subscribe('$private:user:' + USER_ID, function (message) {
      if (message.data != null) {
        const data = message.data.params;
        if (message.data.module == 'user') {
          console.log(data);
        }
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Syndicate Casino</title>
        <meta
          name="description"
          content="Online casino Syndicate. Play Jackpot, Crash, Mines."
        />
        {/* <meta name='og:image' /> */}
      </Head>
      <div className={cn('pb-24 md:pb-0 ', manrope.className)}>
        <Header />
        <div className="grid grid-cols-11  gap-4 my-4 grid-rows-1 min-h-[75vh] px-4 md:px-6 container max-w-screen-2xl">
          <Sidebar />
          <main className="col-span-11 lg:col-span-6">{children}</main>
          <Chat />
        </div>
        <Footer />
      </div>

      <SignInModal />
      <BalanceModal />
    </>
  );
};

export default MainLayout;
