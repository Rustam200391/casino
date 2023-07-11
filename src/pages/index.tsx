import { Manrope } from 'next/font/google';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { fetchLoadData, useLoadData } from '@/hooks/api/load-data';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  const initialData = useLoadData();

  return (
    <MainLayout>
      <main className={`${manrope.className}`}>
        home
        <Button className="">home</Button>
      </main>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['load_data'],
    queryFn: fetchLoadData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
