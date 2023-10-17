import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const footerNav = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Бонусы и активность',
    href: '/bonuses',
  },
  {
    title: 'Реферальная система',
    href: '/referral',
  },
  {
    title: 'Помощь',
    href: '/help',
  },
  {
    title: 'Пользовательское соглашение',
    href: '#',
  },
];

const Footer = () => {
  const { route } = useRouter();
  return (
    <div className="px-8 py-2 border-t border-neutral-800">
      <div className="grid items-center gap-4 mt-4 lg:mt-0 md:gap-6 xl:gap-10 lg:grid-flow-col lg:grid-rows-1">
        <div className="flex items-center justify-center">
          <Image src="/img/syndicate-logo.svg" alt="logo" width={87} height={57} />
        </div>
        {footerNav.map(i => (
          <div className="relative flex items-center justify-center h-full text-center max-w-fit" key={i.title}>
            <Link
              href={i.href}
              className={cn('transition-colors whitespace-nowrap hover:text-white', route === i.href ? 'text-white' : 'text-gray-500')}
            >
              {i.title}
            </Link>
            <div
              className={cn(
                'absolute hidden lg:block transition opacity-0 -left-1/4 w-[150%] h-px bg-gradient-to-r from-neutral-800 via-white to-neutral-800 -top-[0.6rem]',
                route === i.href && 'opacity-100'
              )}
            ></div>
          </div>
        ))}

        <Button
          variant="link"
          onClick={() => {
            alert('Logout');
          }}
        >
          Выход из аккаунта
        </Button>
      </div>
    </div>
  );
};

export default Footer;
