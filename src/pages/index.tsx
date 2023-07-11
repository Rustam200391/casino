import Image from 'next/image';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${manrope.className}`}>home</main>;
}
