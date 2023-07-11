import { Manrope } from 'next/font/google';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <MainLayout>
      <main className={`${manrope.className}`}>
        home
        <Button className="">home</Button>
      </main>
    </MainLayout>
  );
}
