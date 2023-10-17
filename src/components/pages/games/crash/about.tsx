import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyH3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const AboutCrashGame = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={cn('mt-10', !show && 'max-h-[50px] overflow-hidden')}>
        <div className="flex flex-wrap items-baseline justify-between pb-2 border-b">
          <TypographyH2>Об игре Crash</TypographyH2>

          {!show ? (
            <Button variant="link" className="p-0" onClick={() => setShow(true)}>
              <ChevronDown className="mr-2" />
              Показать
            </Button>
          ) : (
            <Button variant="link" className="p-0" onClick={() => setShow(false)}>
              <ChevronUp className="mr-2" />
              Скрыть
            </Button>
          )}
        </div>

        <p className="mt-3 text-stone-300">
          В настоящие время Crash-игры набирают все большую популярность. Это игра основанная на генераторе случайных чисел, в которую
          играют одновременно множество пользователей. Игра запускается автоматически, а все игроки делают ставки любого размера.
        </p>
        <TypographyH3 className="mt-6">Правила игры</TypographyH3>
        <p className="mt-3 text-stone-300">Игра запускается автоматически, а все игроки делают ставки любого размера.</p>
        <p className="mt-3 text-stone-300">
          Банк игрока быстро увеличивается в цене, пока внезапно не рухнет. Игрок предугадывает, когда это произойдет, чтобы успеть вывести
          деньги. Если он успевает нажать на кнопку «Забрать» и вывести деньги до падения банка — выигрывает сумму равную ставке умноженной
          на коэффициент в момент вывода. Если нет — его ставка сгорает.
        </p>
        <TypographyH3 className="mt-6">Как пополнить баланс</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">
            После авторизации, в шапке сайта будет доступна кнопка
            <Button className="px-0 text-green-600" variant="link">
              «Пополнить»
            </Button>
          </li>
          <li className="mt-3 text-stone-300">
            Выберите удобный способ пополнения из представленных. Обратите внимание, комиссия у каждого способа пополнения отличается, ниже
            поля ввода будет информация о зачислении с учетом курса валюты к рубинам и комиссии
          </li>
          <li className="mt-3 text-stone-300">Далее мы предоставим вам реквизиты или адрес кошелька для пополнения баланса</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Пополнить баланс
        </Button>
        <TypographyH3 className="mt-6">Как вывести выигранные рубины</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">После авторизации, в шапке сайта будет доступен ваш кошелек со всеми доступными валютами</li>
          <li className="mt-3 text-stone-300">
            Откройте кошелек и выберите
            <Button className="px-0 text-green-600" variant="link">
              «Вывод средств»
            </Button>
          </li>
          <li className="mt-3 text-stone-300">
            Выберите удобный способ вывода средств из представленных. Обратите внимание, комиссия у каждого способа вывода отличается, ниже
            поля ввода будет информация о зачислении с учетом курса валюты к рубинам и комиссии
          </li>
          <li className="mt-3 text-stone-300">Укажите свои реквизиты по которым мы переведем вам выигрыш</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Вывод средств
        </Button>
        <TypographyH3 className="mt-6">Как перевести донат другому игроку</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">После авторизации и получения 2 ранга у вас откроется доступ к донату другим игрокам</li>
          <li className="mt-3 text-stone-300">Для доната игроку нажмите на его аватар в чате или на странице игры</li>
          <li className="mt-3 text-stone-300">В появившемся окне нажмите кнопку «Задонатить» и укажите сумму перевода</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Вывод средств
        </Button>
      </div>
    </>
  );
};

export default AboutCrashGame;
