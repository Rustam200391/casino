import MainLayout from '@/components/layout/main-layout';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchLoadData } from '@/hooks/api/load-data';
import ActivitiesCarousel from '@/components/pages/home/activities-carousel';
import GamesGrid from '@/components/pages/home/games-grid';
import RecentGamesTable from '@/components/pages/home/recent-games-table';

export default function Home() {
  return (
    <MainLayout>
      <ActivitiesCarousel />
      <GamesGrid />
      <RecentGamesTable />
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
