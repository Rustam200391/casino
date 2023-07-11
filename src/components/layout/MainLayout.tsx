import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
